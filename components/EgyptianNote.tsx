import { ChatCircleText } from "@phosphor-icons/react/dist/ssr";

export default function EgyptianNote({ text, className = "" }: { text: string; className?: string }) {
  return (
    <aside
      className={`max-w-4xl rounded-2xl border border-[#C9A54C]/35 bg-gradient-to-br from-[#FFF9EC] to-white p-5 shadow-soft sm:p-6 ${className}`}
    >
      <p className="inline-flex items-center gap-2 text-sm font-bold text-[#9A7A26]">
        <ChatCircleText size={18} weight="duotone" />
        بالمصري، ببساطة
      </p>
      <p className="mt-2 text-[1.02rem] leading-[1.9] text-tasami-dark">{text}</p>
    </aside>
  );
}
