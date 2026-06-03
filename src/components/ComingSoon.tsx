import { Link } from "react-router-dom";
import { HardHat, ArrowRight, ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-offwhite px-4 py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-navy text-green">
          <HardHat size={40} />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-steel">
          {title}
        </p>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">
          This Page Is Coming Soon
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-dark/70">
          We are putting the finishing touches on this section. In the meantime,
          feel free to get in touch — our team would be glad to discuss your
          residential construction or renovation project.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={18} />
          </Link>
          <Link to="/" className="btn-outline">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
