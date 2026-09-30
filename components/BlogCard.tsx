import Image from "next/image";
import { Link } from "@/navigation";
import { blogCover, readingMinutes, type BlogPost } from "@/lib/blog";

type Props = {
  post: BlogPost;
  labels: { line: string; minutes: string; readMore: string };
  headingLevel?: "h2" | "h3";
};

export default function BlogCard({ post, labels, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  return (
    <article lang="ar" dir="rtl" className="lux-card group flex flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden className="lux-media relative block aspect-[16/9]">
        <Image
          src={blogCover(post.slug)}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover"
        />
        <span className="absolute start-3 top-3 z-[1] rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#0057B8] shadow-sm">
          {labels.line}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm text-tasami-gray">
          {labels.minutes.replace("{n}", String(readingMinutes(post)))}
        </p>
        <Heading className="mt-2 text-lg font-bold leading-[1.45] text-tasami-dark">
          <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-[#0057B8]">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2 line-clamp-3 flex-1 leading-[1.8] text-tasami-gray">{post.summary}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-3 inline-flex min-h-[44px] items-center font-bold text-[#0057B8]"
          aria-label={`${labels.readMore}: ${post.title}`}
        >
          {labels.readMore}
        </Link>
      </div>
    </article>
  );
}
