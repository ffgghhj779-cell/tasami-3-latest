import type { BlogPost } from "./types";
import { POSTS_GOV_1 } from "./posts-gov-1";
import { POSTS_GOV_2 } from "./posts-gov-2";
import { POSTS_GOV_3 } from "./posts-gov-3";
import { POSTS_GOV_4 } from "./posts-gov-4";
import { POSTS_GOV_5 } from "./posts-gov-5";
import { POSTS_TECH } from "./posts-tech";
import { POSTS_TECH_2 } from "./posts-tech-2";
import { POSTS_TECH_3 } from "./posts-tech-3";

export type { BlogPost, BlogBlock } from "./types";

export const BLOG_POSTS: BlogPost[] = [
  ...POSTS_GOV_1,
  ...POSTS_GOV_2,
  ...POSTS_GOV_3,
  ...POSTS_GOV_4,
  ...POSTS_GOV_5,
  ...POSTS_TECH,
  ...POSTS_TECH_2,
  ...POSTS_TECH_3,
].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt)
);

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function blogCover(slug: string): string {
  return `/blog/${slug}.webp`;
}

export function latestPosts(n: number): BlogPost[] {
  return BLOG_POSTS.slice(0, n);
}

export function wordCount(post: BlogPost): number {
  const text = [
    post.summary,
    ...post.body.flatMap((b) => ("text" in b ? [b.text] : b.items)),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: BlogPost): number {
  return Math.max(2, Math.round(wordCount(post) / 180));
}
