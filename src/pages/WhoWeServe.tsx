import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ClipboardList,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import ProcessStep from "../components/ProcessStep";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { clients } from "../data/siteData";
import { clientIcons, fallbackIcon } from "../data/icons";

const whyWorkWithUs = [
  {
    icon: MessageSquare,
    title: "Reliable Communication",
    desc: "Clear updates, organized coordination and transparent customer interaction.",
  },
  {
    icon: ClipboardList,
    title: "Organized Project Planning",
    desc: "Structured scheduling and construction-management support for residential projects.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Focused Operations",
    desc: "Commitment to responsible work practices and qualified subcontractor coordination.",
  },
  {
    icon: MapPin,
    title: "Calgary Residential Experience",
    desc: "Understanding of local residential housing and renovation requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Focused Coordination",
    desc: "Attention to workmanship standards and project organization.",
  },
  {
    icon: HeartHandshake,
    title: "Professional Customer Service",
    desc: "Practical residential construction solutions tailored to customer needs.",
  },
];

const approach = [
  {
    step: 1,
    title: "Project Consultation",
    desc: "Discussing client goals, property requirements and project expectations.",
  },
  {
    step: 2,
    title: "Planning & Coordination",
    desc: "Developing organized scopes, scheduling and project-management plans.",
  },
  {
    step: 3,
    title: "Construction Oversight",
    desc: "Managing communication, subcontractor coordination and project progression.",
  },
  {
    step: 4,
    title: "Quality Review",
    desc: "Inspecting work stages and addressing deficiencies where necessary.",
  },
  {
    step: 5,
    title: "Project Completion",
    desc: "Final walkthrough and customer-focused project handover.",
  },
];

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        title="Who We Serve"
        sub="Residential Construction & Renovation Services for Calgary Homeowners, Families, Landlords & Property Investors"
        intro="Blue Haven Dreams Ltd. provides organized residential construction management and renovation services tailored to the needs of Calgary homeowners, landlords, families and small residential property investors."
      />

      {/* INTRO */}
      <section className="section text-center">
        <SectionHeading
          label="Who We Serve"
          heading="Supporting Calgary Residential Construction & Housing Improvement Projects"
          sub="Every residential construction project has unique goals, timelines and budget requirements. Blue Haven Dreams Ltd. works with a variety of residential clients by providing organized planning, transparent communication and professionally coordinated construction-management services — whether you are improving your family home, expanding living space, upgrading a rental property or coordinating a small residential development project."
        />
      </section>

      {/* CLIENT SECTIONS (alternating) */}
      <div className="pb-8">
        {clients.map((c, i) => {
          const Icon = clientIcons[c.slug] ?? fallbackIcon;
          const reversed = i % 2 === 1;
          return (
            <section
              key={c.slug}
              id={c.slug}
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
                        [ {c.title} image ]
                      </p>
                    </div>
                  </div>
                </Reveal>
                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-offwhite text-navy">
                    <Icon size={24} />
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-navy">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy-dark/70">
                    {c.desc}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-steel">
                    Services Commonly Requested
                  </p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {c.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm text-navy-dark/80"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-green"
                        />{" "}
                        {s}
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

      {/* WHY CLIENTS WORK WITH US */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Why Clients Work With Us"
            heading="Customer-Oriented Residential Construction Management Services"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {whyWorkWithUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <IconBox icon={w.icon} title={w.title} desc={w.desc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section">
        <SectionHeading
          label="Our Approach"
          heading="How We Support Residential Clients"
        />
        <div className="mx-auto mt-14 max-w-2xl">
          {approach.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <ProcessStep
                step={p.step}
                title={p.title}
                desc={p.desc}
                isLast={i === approach.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Discuss Your Residential Construction Project with Our Team"
        text="Blue Haven Dreams Ltd. works with homeowners, landlords, families and property investors seeking organized and professionally managed residential construction services in Calgary."
      />
    </>
  );
}
