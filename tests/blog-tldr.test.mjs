import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { test } from "node:test";

const blogDir = new URL("../src/content/blog/", import.meta.url);

test("every blog post has a non-empty tldr in its frontmatter", async () => {
  const files = (await readdir(blogDir)).filter((f) => f.endsWith(".mdx"));
  assert.ok(files.length > 0);
  for (const file of files) {
    const src = await readFile(new URL(file, blogDir), "utf8");
    const frontmatter = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
    assert.match(frontmatter, /^tldr: *"?[^"\s]/m, `${file} is missing a tldr`);
  }
});

test("blog post page renders the tldr above the post body", async () => {
  const page = await readFile(
    new URL("../src/pages/blog/[...slug].astro", import.meta.url),
    "utf8"
  );
  const tldr = page.indexOf("{post.data.tldr}");
  assert.ok(tldr > -1, "page does not render post.data.tldr");
  assert.ok(tldr < page.indexOf("<Content />"), "tldr must come before the body");
});
