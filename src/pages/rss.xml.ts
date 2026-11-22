import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getPostSlug } from "@/lib/blog";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Anmol Noor — Blog",
    description:
      "Notes on shipping software — AI agents, systems, homelab, and developer tooling.",
    site: context.site ?? "https://www.anmolnoor.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description:
        post.data.tldr || post.data.description || post.data.excerpt || "",
      categories: post.data.tags,
      link: `/blog/${getPostSlug(post)}`,
    })),
  });
}
