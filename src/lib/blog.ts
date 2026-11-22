export interface BlogEntryLike {
  id: string;
  data: {
    slug?: string;
  };
}

export function getPostSlug(post: BlogEntryLike): string {
  return post.data.slug ?? post.id.replace(/\.mdx$/, "");
}

export function formatDateUTC(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
): string {
  const parsed = typeof date === "string" ? new Date(date) : date;
  return parsed.toLocaleDateString("en-US", {
    ...options,
    timeZone: "UTC",
  });
}

export const DEFAULT_SOCIAL_IMAGE = "/og/default.jpg";

export function getOgImageForCover(cover?: string): string {
  if (!cover) return DEFAULT_SOCIAL_IMAGE;
  const match = cover.match(/\/([^/]+)\.(?:png|webp|jpe?g)$/i);
  if (!match) return DEFAULT_SOCIAL_IMAGE;
  return `/og/${match[1]}.jpg`;
}
