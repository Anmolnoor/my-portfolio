import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("blog index exposes an animated grid/list layout toggle", async () => {
  const blogIndex = await readFile(
    new URL("../src/pages/blog/index.astro", import.meta.url),
    "utf8"
  );

  assert.match(blogIndex, /BlogPostList/);
  assert.match(blogIndex, /client:load/);

  const postList = await readFile(
    new URL("../src/components/blog/BlogPostList.tsx", import.meta.url),
    "utf8"
  );

  assert.match(postList, /Writing \/ Blog/);
  assert.match(postList, /layout === "grid"/);
  assert.match(postList, /layout === "list"/);
  assert.match(
    postList,
    /transition-\[grid-template-columns,opacity,transform\]/
  );
  assert.match(postList, /aria-pressed={layout === "grid"}/);
  assert.match(postList, /aria-pressed={layout === "list"}/);
});
