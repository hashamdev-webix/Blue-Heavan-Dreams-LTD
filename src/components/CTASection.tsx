import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = { heading: string; text?: string };

export default function CTASection({ heading, text }: Props) {
  return (
    <section className="bg-navy-dark">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {heading}
          </h2>
          {text && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {text}
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
