import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; title: string; desc: string; to: string };

export default function ServiceCard({ icon: Icon, title, desc, to }: Props) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-silver/40 bg-white p-7 transition hover:-translate-y-1 hover:border-green hover:shadow-lg">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-offwhite text-navy transition group-hover:bg-green group-hover:text-navy-dark">
        <Icon size={26} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-navy-dark/70">
        {desc}
      </p>
      <Link
        to={to}
        className="inline-flex items-center gap-1 text-sm font-semibold text-steel transition group-hover:gap-2 hover:text-navy"
      >
        Learn more <ArrowRight size={16} />
      </Link>
    </div>
  );
}
