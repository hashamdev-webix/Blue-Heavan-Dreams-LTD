import Reveal from "./Reveal";

type Props = {
  label?: string;
  heading: string;
  sub?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  label,
  heading,
  sub,
  align = "center",
  light = false,
}: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      {label && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${light ? "text-green" : "text-steel"}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-navy-dark/70"}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
