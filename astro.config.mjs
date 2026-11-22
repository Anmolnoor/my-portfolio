// @ts-check
import { readFile, writeFile } from "node:fs/promises";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { unified } from "@astrojs/markdown-remark";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/**
 * `@astrojs/vercel` emits exact-match `^/path$` redirect rules when
 * `trailingSlash` is `"ignore"`, which makes `/path/` fall through to 404.
 * Extend redirect rules after the adapter writes `.vercel/output/config.json`
 * so both `/path` and `/path/` redirect permanently.
 *
 * @param {ReturnType<typeof vercel>} adapter
 */
function withTrailingSlashRedirects(adapter) {
  const originalDone = adapter.hooks?.["astro:build:done"];
  if (!originalDone) return adapter;
  return {
    ...adapter,
    hooks: {
      ...adapter.hooks,
      /** @type {typeof originalDone} */
      "astro:build:done": async (options) => {
        await originalDone(options);
        const configPath = new URL(
          "./.vercel/output/config.json",
          import.meta.url,
        );
        const config = JSON.parse(await readFile(configPath, "utf8"));
        for (const route of config.routes ?? []) {
          if (
            route.headers?.Location &&
            typeof route.src === "string" &&
            route.src.endsWith("$") &&
            !route.src.endsWith("/?$")
          ) {
            route.src = `${route.src.slice(0, -1)}/?$`;
          }
        }
        await writeFile(configPath, `${JSON.stringify(config, null, "\t")}\n`);
      },
    },
  };
}

export default defineConfig({
  site: "https://www.anmolnoor.com",
  output: "static",
  adapter: withTrailingSlashRedirects(vercel()),
  integrations: [react(), mdx(), sitemap()],
  redirects: {
    "/experience": "/resume",
    "/skills": "/resume",
    "/blog/beekeeper-launch": "/blog/beekeeper",
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    }),
    syntaxHighlight: false,
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
