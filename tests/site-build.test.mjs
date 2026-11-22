// Behavioral checks on blog sources and the built site.
// The "built site" tests read .vercel/output/, so run `npm run build` first.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { describe, test } from "node:test";
import { getOgImageForCover } from "../src/lib/blog.ts";

const SITE = "https://www.anmolnoor.com";
const root = new URL("../", import.meta.url);
const publicDir = new URL("public/", root);
const blogDir = new URL("src/content/blog/", root);
const vercelOut = new URL(".vercel/output/", root);
const staticDir = new URL("static/", vercelOut);

const readText = (url) => readFile(url, "utf8");

// Minimal frontmatter reader: top-level `key: value` lines only.
const frontmatterField = (src, key) => {
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const value = fm.match(new RegExp(`^${key}:[ \\t]*(.+)$`, "m"))?.[1].trim();
  return value?.replace(/^(["'])(.*)\1$/, "$2");
};

const posts = await Promise.all(
  (await readdir(blogDir))
    .filter((f) => f.endsWith(".mdx"))
    .map(async (file) => {
      const src = await readText(new URL(file, blogDir));
      return {
        file,
        src,
        slug: frontmatterField(src, "slug") ?? file.replace(/\.mdx$/, ""),
        cover: frontmatterField(src, "cover"),
        canonical: frontmatterField(src, "canonical"),
      };
    })
);

const publicFile = (path) => new URL(path.replace(/^\//, ""), publicDir);

describe("blog sources", () => {
  test("all posts have unique slugs", () => {
    assert.ok(posts.length > 0, "expected at least one blog post");
    assert.equal(new Set(posts.map((p) => p.slug)).size, posts.length);
  });

  test("every cover exists in public/ and maps to an OG card in public/og/", () => {
    assert.ok(existsSync(publicFile("/og/default.jpg")), "public/og/default.jpg missing");
    for (const { file, cover } of posts) {
      assert.ok(cover, `${file} has no cover`);
      assert.ok(existsSync(publicFile(cover)), `${file}: cover ${cover} not in public/`);
      const og = getOgImageForCover(cover);
      assert.match(og, /^\/og\/[^/]+\.jpg$/, `${file}: ${cover} maps to ${og}`);
      assert.notEqual(og, "/og/default.jpg", `${file}: ${cover} fell back to the default card`);
      assert.ok(existsSync(publicFile(og)), `${file}: ${og} not in public/og/`);
    }
  });

  test("no post references a /blog/*.png image", () => {
    for (const { file, src } of posts) {
      assert.doesNotMatch(src, /\/blog\/[^\s)"'\]]+\.png\b/, `${file} references a .png under /blog/`);
    }
  });

  test("no post declares a broken canonical URL", () => {
    for (const { file, slug, canonical } of posts) {
      if (canonical === undefined) continue;
      let url;
      assert.doesNotThrow(() => (url = new URL(canonical)), `${file}: canonical is not an absolute URL`);
      assert.equal(url.protocol, "https:", `${file}: canonical must be https`);
      if (/(^|\.)anmolnoor\.com$/.test(url.hostname)) {
        assert.equal(url.origin, SITE, `${file}: canonical must use ${SITE}`);
        assert.equal(url.pathname, `/blog/${slug}/`, `${file}: canonical must point at its own post`);
      }
    }
  });
});

describe("formatDateUTC", () => {
  test("formats 2026-05-09 as May 9, 2026 in a timezone behind UTC", () => {
    // A child process, so TZ is in effect before any Date code runs.
    const script = `
      const { formatDateUTC } = await import(${JSON.stringify(new URL("src/lib/blog.ts", root).href)});
      const d = new Date("2026-05-09");
      console.log(JSON.stringify({
        fromString: formatDateUTC("2026-05-09"),
        fromDate: formatDateUTC(d),
        naive: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      }));`;
    const out = JSON.parse(
      execFileSync(process.execPath, ["--input-type=module", "-e", script], {
        env: { ...process.env, TZ: "America/Vancouver" },
        encoding: "utf8",
      })
    );
    assert.equal(out.naive, "May 8, 2026", "TZ override did not take effect, test proves nothing");
    assert.equal(out.fromString, "May 9, 2026");
    assert.equal(out.fromDate, "May 9, 2026");
  });
});

// Tiny XML well-formedness check: every open tag is closed in order.
const assertWellFormedXml = (xml, name) => {
  assert.match(xml, /^<\?xml [^>]*\?>/, `${name}: missing XML declaration`);
  const body = xml
    .replace(/^<\?xml [^>]*\?>/, "")
    .replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  const stack = [];
  for (const [, close, tag, selfClose] of body.matchAll(/<(\/?)([A-Za-z][\w:.-]*)[^>]*?(\/?)>/g)) {
    if (selfClose) continue;
    if (close) assert.equal(stack.pop(), tag, `${name}: unexpected </${tag}>`);
    else stack.push(tag);
  }
  assert.deepEqual(stack, [], `${name}: unclosed tags`);
};

describe("built site (.vercel/output)", () => {
  test("build output exists (run `npm run build` first)", () => {
    assert.ok(existsSync(new URL("config.json", vercelOut)), ".vercel/output/config.json missing: run `npm run build`");
    assert.ok(existsSync(new URL("index.html", staticDir)), ".vercel/output/static/index.html missing: run `npm run build`");
  });

  const built = (path) => readText(new URL(path, staticDir));
  const expectedPostUrls = posts.map((p) => `${SITE}/blog/${p.slug}/`).sort();

  test("rss.xml is well-formed RSS linking every post on the www host", async () => {
    const xml = await built("rss.xml");
    assertWellFormedXml(xml, "rss.xml");
    assert.match(xml, /<rss[\s>]/);
    const itemLinks = [...xml.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => m[1]);
    assert.deepEqual(itemLinks.sort(), expectedPostUrls);
  });

  test("sitemap uses the www host, lists the main pages, and drops removed routes", async () => {
    const index = await built("sitemap-index.xml");
    assertWellFormedXml(index, "sitemap-index.xml");
    assert.match(index, new RegExp(`<loc>${SITE}/sitemap-0\\.xml</loc>`));

    const xml = await built("sitemap-0.xml");
    assertWellFormedXml(xml, "sitemap-0.xml");
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const loc of locs) assert.ok(loc.startsWith(`${SITE}/`), `non-www loc: ${loc}`);
    for (const path of ["/", "/blog/", "/projects/", "/resume/", "/about/", "/contact/"]) {
      assert.ok(locs.includes(`${SITE}${path}`), `sitemap missing ${path}`);
    }
    for (const url of expectedPostUrls) assert.ok(locs.includes(url), `sitemap missing ${url}`);
    for (const gone of ["/experience", "/skills", "/pocket"]) {
      assert.ok(!locs.some((loc) => loc.includes(gone)), `sitemap still lists ${gone}`);
    }
  });

  test("removed routes are not built as pages", () => {
    for (const gone of ["experience", "skills", "pocket"]) {
      assert.ok(!existsSync(new URL(`${gone}/index.html`, staticDir)), `${gone}/index.html was built`);
    }
  });

  test("Vercel config emits permanent redirects for retired URLs (with and without trailing slash)", async () => {
    const { routes } = JSON.parse(await readText(new URL("config.json", vercelOut)));
    const expected = {
      "/experience": "/resume",
      "/experience/": "/resume",
      "/skills": "/resume",
      "/skills/": "/resume",
      "/blog/beekeeper-launch": "/blog/beekeeper",
      "/blog/beekeeper-launch/": "/blog/beekeeper",
    };
    for (const [from, to] of Object.entries(expected)) {
      const route = routes.find((r) => r.src && new RegExp(r.src).test(from) && r.headers?.Location);
      assert.ok(route, `no redirect route for ${from}`);
      assert.ok([301, 308].includes(route.status), `${from} redirect is ${route.status}, not permanent`);
      assert.equal(route.headers.Location, to);
    }
  });

  test("blog index lazy-loads covers and keeps tag filters outside card links", async () => {
    const html = await built("blog/index.html");
    const lazyImgs = html.match(/<img\b[^>]*\bloading="lazy"[^>]*>/g) ?? [];
    assert.equal(lazyImgs.length, posts.length, "every post card cover should be lazy");

    const filter = html.match(/<div[^>]*aria-label="Filter posts by tag"[^>]*>([\s\S]*?)<\/div>/);
    assert.ok(filter, "tag filter group missing");
    assert.ok((filter[1].match(/<button\b/g) ?? []).length > 1, "tag filter has no buttons");

    const anchors = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)];
    assert.ok(anchors.length >= posts.length);
    for (const [, inner] of anchors) {
      assert.doesNotMatch(inner, /<button\b/, "a <button> is nested inside a link");
    }
  });

  test("robots.txt points at the www sitemap index", async () => {
    assert.match(await built("robots.txt"), new RegExp(`^Sitemap: ${SITE}/sitemap-index\\.xml$`, "m"));
  });

  test("every post page has a www canonical and a 1200px /og/*.jpg card", async () => {
    for (const { slug } of posts) {
      const html = await built(`blog/${slug}/index.html`);
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      assert.equal(canonical, `${SITE}/blog/${slug}/`, `${slug}: canonical`);
      const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
      assert.match(ogImage ?? "", new RegExp(`^${SITE}/og/[^/]+\\.jpg$`), `${slug}: og:image`);
      assert.ok(existsSync(new URL(new URL(ogImage).pathname.slice(1), staticDir)), `${slug}: ${ogImage} not built`);
      assert.match(html, /<meta property="og:image:width" content="1200"/, `${slug}: og:image:width`);
    }
  });
});
