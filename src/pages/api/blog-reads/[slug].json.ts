import type { APIRoute } from "astro";
import {
  ReadCounterStoreNotConfigured,
  createBlogReadCounter,
  isValidBlogSlug,
} from "@/lib/blog-read-counts";

export const prerender = false;

const env = {
  KV_REST_API_TOKEN:
    import.meta.env.KV_REST_API_TOKEN ?? process.env.KV_REST_API_TOKEN,
  KV_REST_API_URL:
    import.meta.env.KV_REST_API_URL ?? process.env.KV_REST_API_URL,
  UPSTASH_REDIS_REST_TOKEN:
    import.meta.env.UPSTASH_REDIS_REST_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN,
  UPSTASH_REDIS_REST_URL:
    import.meta.env.UPSTASH_REDIS_REST_URL ??
    process.env.UPSTASH_REDIS_REST_URL,
};

const counter = createBlogReadCounter(env);

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json",
    },
  });

const getSlug = (value: string | undefined) => {
  if (!value || !isValidBlogSlug(value)) {
    return null;
  }

  return value;
};

const handleError = (error: unknown) => {
  if (error instanceof ReadCounterStoreNotConfigured) {
    return json({ configured: false, count: null }, 200);
  }

  return json({ error: "Read counter unavailable." }, 500);
};

export const GET: APIRoute = async ({ params }) => {
  const slug = getSlug(params.slug);

  if (!slug) {
    return json({ error: "Invalid blog slug." }, 400);
  }

  try {
    const count = await counter.get(slug);
    return json({ configured: true, count, slug });
  } catch (error) {
    return handleError(error);
  }
};

export const POST: APIRoute = async ({ params }) => {
  const slug = getSlug(params.slug);

  if (!slug) {
    return json({ error: "Invalid blog slug." }, 400);
  }

  try {
    const count = await counter.increment(slug);
    return json({ configured: true, count, slug });
  } catch (error) {
    return handleError(error);
  }
};
