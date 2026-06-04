import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("blog posts render a persistent read counter", async () => {
  const postPage = await readFile(
    new URL("../src/pages/blog/[...slug].astro", import.meta.url),
    "utf8"
  );

  assert.match(postPage, /BlogReadCounter/);
  assert.match(postPage, /client:load/);

  const counterWidget = await readFile(
    new URL("../src/components/blog/BlogReadCounter.tsx", import.meta.url),
    "utf8"
  );

  assert.match(counterWidget, /return null/);
  assert.doesNotMatch(counterWidget, /-- reads/);

  const apiRoute = await readFile(
    new URL("../src/pages/api/blog-reads/[slug].json.ts", import.meta.url),
    "utf8"
  );

  assert.match(apiRoute, /export const prerender = false/);

  const { createBlogReadCounter, getReadCountKey } = await import(
    "../src/lib/blog-read-counts.ts"
  );
  const requests = [];
  const fakeFetch = async (url, init) => {
    requests.push({ url, init });
    return Response.json({ result: "12" });
  };
  const counter = createBlogReadCounter(
    {
      KV_REST_API_URL: "https://example-kv.upstash.io",
      KV_REST_API_TOKEN: "token",
    },
    fakeFetch
  );

  await assert.rejects(
    () => createBlogReadCounter({}, fakeFetch).increment("hello-world"),
    { name: "ReadCounterStoreNotConfigured" }
  );

  assert.equal(getReadCountKey("hello-world"), "blog:reads:hello-world");
  assert.equal(await counter.increment("hello-world"), 12);
  assert.deepEqual(requests, [
    {
      url: "https://example-kv.upstash.io/incr/blog%3Areads%3Ahello-world",
      init: {
        headers: {
          Authorization: "Bearer token",
        },
      },
    },
  ]);
});
