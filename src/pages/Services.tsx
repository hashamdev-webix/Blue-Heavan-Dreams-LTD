import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { services } from "../data/siteData";
import { serviceIcons, fallbackIcon } from "../data/icons";

const whyChoosePoints = [
  "Organized Project Coordination",
  "Safety-Conscious Operations",
  "Reliable Communication",
  "Quality-Focused Construction Oversight",
  "Calgary Residential Market Knowledge",
  "Transparent Service Approach",
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Residential Construction & Renovation Services in Calgary"
        sub="Professional construction management, renovations, basement development and home improvement services"
        intro="Blue Haven Dreams Ltd. provides organized and customer-focused residential construction services designed to improve property value, living space, functionality and long-term housing quality across Calgary and Alberta."
      />

      {/* INTRO */}
      <section className="section text-center">
        <SectionHeading
          label="Our Services"
          heading="Reliable Residential Construction Solutions for Calgary Homes"
          sub="Our services are designed for homeowners, families, landlords and residential property investors seeking organized project coordination, clear communication and professionally managed construction services. From renovations and basement developments to custom-home planning and construction management, Blue Haven Dreams Ltd. focuses on disciplined execution, safety-conscious operations and quality-focused project delivery."
        />
      </section>

      {/* SERVICE SECTIONS (alternating) */}
      <div className="pb-8">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.slug] ?? fallbackIcon;
          const reversed = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-24 ${i % 2 === 1 ? "bg-offwhite" : "bg-white"}`}
            >
              <div className="section grid items-center gap-12 lg:grid-cols-2">
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-navy-dark/5 text-center">
                    <div className="px-6">
                      <span className="mx-auto mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-green">
                        <Icon size={32} />
                      </span>
                      <p className="text-sm font-medium text-steel">
                        [ {s.title} project image ]
                      </p>
                    </div>
                  </div>
                </Reveal>
                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-offwhite text-navy">
                    <Icon size={24} />
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-navy">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy-dark/70">
                    {s.desc}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-navy-dark/80"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-green"
                        />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary mt-7">
                    Contact Us <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* WHY CHOOSE US */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Why Choose Blue Haven Dreams Ltd."
            heading="Professional Residential Construction Management with a Customer-Focused Approach"
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {whyChoosePoints.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-silver/40 bg-white px-5 py-4">
                  <CheckCircle2 size={20} className="shrink-0 text-green" />
                  <span className="font-medium text-navy">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Discuss Your Residential Construction Project with Our Team"
        text="Blue Haven Dreams Ltd. is committed to helping Calgary homeowners, families and property investors complete organized and professionally managed residential construction projects."
      />
    </>
  );
}
