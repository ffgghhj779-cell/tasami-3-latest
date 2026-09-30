import { Link } from "@/navigation";
import { readingMinutes, type BlogPost } from "@/lib/blog";

type Props = {
  post: BlogPost;
  labels: { line: string; minutes: string; readMore: string };
  headingLevel?: "h2" | "h3";
};

export default function BlogCard({ post, labels, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  return (
    <article lang="ar" dir="rtl" className="flex flex-col rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
      <p className="text-sm text-tasami-gray">
        <span className="font-bold text-[#006BDE]">{labels.line}</span>
        {" · "}
        {labels.minutes.replace("{n}", String(readingMinutes(post)))}
      </p>
      <Heading className="mt-2 text-lg font-bold leading-[1.4] text-tasami-dark">
        <Link href={`/blog/${post.slug}`} className="hover:text-[#006BDE]">
          {post.title}
        </Link>
      </Heading>
      <p className="mt-2 line-clamp-3 flex-1 leading-[1.8] text-tasami-gray">{post.summary}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-3 inline-flex min-h-[44px] items-center font-bold text-[#006BDE]"
        aria-label={`${labels.readMore}: ${post.title}`}
      >
        {labels.readMore}
      </Link>
    </article>
  );
}
