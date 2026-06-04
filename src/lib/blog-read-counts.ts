type Env = {
  KV_REST_API_TOKEN?: string;
  KV_REST_API_URL?: string;
  UPSTASH_REDIS_REST_TOKEN?: string;
  UPSTASH_REDIS_REST_URL?: string;
};

type Fetcher = (
  url: string,
  init: {
    headers: {
      Authorization: string;
    };
  }
) => Promise<Response>;

export class ReadCounterStoreNotConfigured extends Error {
  constructor() {
    super(
      "Read counter storage is not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN."
    );
    this.name = "ReadCounterStoreNotConfigured";
  }
}

export class ReadCounterStoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ReadCounterStoreError";
  }
}

export const isValidBlogSlug = (slug: string) =>
  /^[a-z0-9][a-z0-9-]*$/.test(slug);

export const getReadCountKey = (slug: string) => `blog:reads:${slug}`;

export const createBlogReadCounter = (env: Env, fetcher: Fetcher = fetch) => {
  const url = (env.KV_REST_API_URL ?? env.UPSTASH_REDIS_REST_URL ?? "").replace(
    /\/$/,
    ""
  );
  const token = env.KV_REST_API_TOKEN ?? env.UPSTASH_REDIS_REST_TOKEN ?? "";

  const requestCount = async (command: "get" | "incr", slug: string) => {
    if (!url || !token) {
      throw new ReadCounterStoreNotConfigured();
    }

    if (!isValidBlogSlug(slug)) {
      throw new ReadCounterStoreError("Invalid blog slug.");
    }

    const response = await fetcher(
      `${url}/${command}/${encodeURIComponent(getReadCountKey(slug))}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const payload = (await response.json()) as {
      error?: string;
      result?: unknown;
    };

    if (!response.ok || payload.error) {
      throw new ReadCounterStoreError(
        payload.error ?? `Read counter request failed with ${response.status}.`
      );
    }

    return normalizeCount(payload.result);
  };

  return {
    get: (slug: string) => requestCount("get", slug),
    increment: (slug: string) => requestCount("incr", slug),
  };
};

const normalizeCount = (value: unknown) => {
  if (value === null || value === undefined) {
    return 0;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.max(0, Math.floor(value));
  }

  if (typeof value === "string" && /^\d+$/.test(value)) {
    return Number(value);
  }

  throw new ReadCounterStoreError("Read counter returned an invalid count.");
};
