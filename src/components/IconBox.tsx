import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; title: string; desc: string };

export default function IconBox({ icon: Icon, title, desc }: Props) {
  return (
    <div className="rounded-2xl border border-silver/40 bg-white p-7 transition hover:border-green hover:shadow-md">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
        <Icon size={22} />
      </div>
      <h3 className="mb-2 text-base font-semibold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-navy-dark/70">{desc}</p>
    </div>
  );
}
