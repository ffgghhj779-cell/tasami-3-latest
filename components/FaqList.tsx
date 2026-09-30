import { Plus } from "@phosphor-icons/react/dist/ssr";

export type FaqEntry = { q: string; a: string };

/** Accessible accordion — native <details>, no JS. */
export default function FaqList({ items }: { items: FaqEntry[] }) {
  return (
    <div className="divide-y divide-[rgba(26,53,80,0.1)] rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5 sm:px-6">
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-tasami-dark marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Plus
              weight="bold"
              aria-hidden
              className="h-5 w-5 shrink-0 text-[#006BDE] transition-transform group-open:rotate-45 motion-reduce:transition-none"
            />
          </summary>
          <p className="pb-5 leading-[1.8] text-tasami-gray">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
