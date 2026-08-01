import { Link } from "@/navigation";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-sm font-medium text-tasami-pink">404</p>
      <h1 className="font-display mt-3 text-2xl text-tasami-purple sm:text-3xl">
        الصفحة غير موجودة
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
        Page not found.
      </p>
      <Link href="/" className="btn-primary mt-8 min-w-[160px]">
        العودة للرئيسية
      </Link>
    </div>
  );
}
