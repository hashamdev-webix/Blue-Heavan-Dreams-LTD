type Props = { step: number; title: string; desc: string; isLast?: boolean };

export default function ProcessStep({
  step,
  title,
  desc,
  isLast = false,
}: Props) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
          {step}
        </div>
        {!isLast && <div className="mt-1 w-0.5 flex-1 bg-silver/50" />}
      </div>
      <div className="pb-10">
        <h3 className="mb-1 text-lg font-semibold text-navy">{title}</h3>
        <p className="text-sm leading-relaxed text-navy-dark/70">{desc}</p>
      </div>
    </div>
  );
}
