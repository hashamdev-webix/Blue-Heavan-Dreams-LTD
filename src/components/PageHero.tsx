import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = { title: string; sub?: string; intro?: string };

export default function PageHero({ title, sub, intro }: Props) {
  return (
    <section className="bg-navy-dark">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        <Reveal>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
          {sub && (
            <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-green">
              {sub}
            </p>
          )}
          {intro && (
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80">
              {intro}
            </p>
          )}
          <Link to="/contact" className="btn-accent mt-8 inline-flex">
            Contact Us <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
