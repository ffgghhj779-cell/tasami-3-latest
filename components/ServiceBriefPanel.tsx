import { getServiceBrief } from "@/lib/service-briefs";

type Props = {
  serviceKey: string;
  kind?: "government" | "tech" | "sector";
  labels: {
    whatTitle: string;
    platformTitle: string;
    needsTitle: string;
    durationTitle: string;
    disclaimer: string;
  };
  platformNames?: Record<string, string>;
};

export default function ServiceBriefPanel({
  serviceKey,
  kind = "government",
  labels,
  platformNames = {},
}: Props) {
  const brief = getServiceBrief(serviceKey, kind);
  const platforms = brief.platformKeys
    .map((k) => platformNames[k] || k)
    .filter(Boolean);

  return (
    <div className="mt-8 space-y-5">
      <div className="rounded-card border border-tasami-purple/10 bg-white/90 p-5 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#007AFF]">
          {labels.whatTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-tasami-dark">
          {brief.whatWeDo}
        </p>
      </div>

      {platforms.length > 0 ? (
        <div className="rounded-card border border-tasami-purple/10 bg-white/90 p-5">
          <p className="text-xs font-semibold text-tasami-dark">
            {labels.platformTitle}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {platforms.map((name) => (
              <span
                key={name}
                className="rounded-full bg-[#007AFF]/10 px-3 py-1 text-xs font-medium text-[#0066D6]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-card border border-tasami-purple/10 bg-white/90 p-5">
        <p className="text-xs font-semibold text-tasami-dark">{labels.needsTitle}</p>
        <ul className="mt-2 space-y-2 text-sm text-tasami-gray">
          {brief.clientNeeds.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#007AFF]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-card border border-amber-200/60 bg-amber-50/70 p-5">
        <p className="text-xs font-semibold text-tasami-dark">
          {labels.durationTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
          {brief.durationNote}
        </p>
        <p className="mt-3 text-[11px] leading-relaxed text-tasami-gray/90">
          {labels.disclaimer}
        </p>
      </div>
    </div>
  );
}
