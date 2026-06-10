import { getImage } from "../data/images";

export default function MediaFrame({ name, label, className = "" }: { name: string; label: string; className?: string }) {
  const src = getImage(name);
  if (src) {
    return <img src={src} alt={label} loading="lazy" className={`aspect-[4/3] w-full rounded-2xl object-cover ${className}`} />;
  }
  return (
    <div className={`flex aspect-[4/3] items-center justify-center rounded-2xl bg-offwhite text-center ${className}`}>
      <span className="px-6 text-sm font-medium text-steel">[ {label} ]</span>
    </div>
  );
}
