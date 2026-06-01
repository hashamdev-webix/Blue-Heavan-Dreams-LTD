import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Props = { question: string; answer: string };

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-silver/40 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-navy">{question}</span>
        <span className="shrink-0 text-navy">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed text-navy-dark/70">
          {answer}
        </div>
      )}
    </div>
  );
}
