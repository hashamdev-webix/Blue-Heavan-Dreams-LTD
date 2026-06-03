import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  BadgeCheck,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import IconBox from "../components/IconBox";
import ProcessStep from "../components/ProcessStep";
import CTASection from "../components/CTASection";
import { services, clients, process } from "../data/siteData";
import { serviceIcons, clientIcons, fallbackIcon } from "../data/icons";

const trustItems = [
  "Calgary Based",
  "Construction Management",
  "Safety Focused",
  "Customer-Oriented Service",
  "Licensed Subcontractor Coordination",
];

const whyIcons = [
  ShieldCheck,
  BadgeCheck,
  MessageSquare,
  CheckCircle2,
  MapPin,
  HeartHandshake,
];

const whyChooseHome = [
  {
    title: "Organized Project Planning",
    desc: "Structured project coordination focused on timelines, budgeting and clear communication.",
  },
  {
    title: "Safety-Focused Operations",
    desc: "Commitment to job-site safety, qualified subcontractors and responsible construction practices.",
  },
  {
    title: "Transparent Communication",
    desc: "Written scopes, updates and customer communication throughout every stage of the project.",
  },
  {
    title: "Quality Control",
    desc: "Inspection-focused project management with attention to workmanship and finishing standards.",
  },
  {
    title: "Local Calgary Focus",
    desc: "Supporting Calgary homeowners, suppliers, trades and residential communities.",
  },
  {
    title: "Customer-Oriented Service",
    desc: "Professional and practical construction solutions tailored to each client's needs and budget.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-dark">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #ADEA9C 0, transparent 40%), radial-gradient(circle at 80% 70%, #34607F 0, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center md:py-32">
          <Reveal>
            <span className="inline-block rounded-full border border-green/40 bg-green/10 px-4 py-1.5 text-sm font-medium text-green">
              Calgary Residential Construction Experts
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Trusted Residential Construction & Home Renovation Services in
              Calgary
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Blue Haven Dreams Ltd. provides reliable residential construction
              management, home renovations, basement development,
              secondary-suite coordination and custom-home support services
              across Calgary and Alberta.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy-dark"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustItems.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle2 size={16} className="text-green" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-offwhite text-center">
            <span className="px-6 text-sm font-medium text-steel">
              [ Construction planning / homeowner consultation image ]
            </span>
          </div>
        </Reveal>
        <div>
          <p className="section-label">About Blue Haven Dreams Ltd.</p>
          <h2 className="h2">
            Professional Residential Construction Management Company in Calgary
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-dark/70">
            Blue Haven Dreams Ltd. is a Calgary-based residential construction
            management and home-building company focused on delivering
            organized, safe and customer-oriented housing projects. We
            specialize in renovations, basement developments, secondary suites,
            infill project support and residential construction coordination for
            homeowners and small property investors.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-dark/70">
            Our goal is to simplify residential construction by managing
            schedules, subcontractors, permits, communication and project
            execution while helping clients protect budgets, timelines and
            property value.
          </p>
          <Link to="/about" className="btn-primary mt-7">
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Our Services"
            heading="Residential Construction & Renovation Services We Offer"
            sub="Professional construction solutions tailored for Calgary homeowners, families, landlords and property investors."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard
                  icon={serviceIcons[s.slug] ?? fallbackIcon}
                  title={s.title}
                  desc={s.desc}
                  to={`/services#${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <SectionHeading
          label="Who We Serve"
          heading="Serving Calgary Homeowners, Families & Property Investors"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => {
            const Icon = clientIcons[c.slug] ?? fallbackIcon;
            return (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to={`/who-we-serve#${c.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-silver/40 bg-white p-6 transition hover:border-green hover:shadow-md"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition group-hover:bg-green group-hover:text-navy-dark">
                    <Icon size={22} />
                  </span>
                  <span className="font-semibold text-navy">{c.title}</span>
                  <ArrowRight
                    size={18}
                    className="ml-auto text-steel transition group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Why Choose Blue Haven Dreams Ltd."
            heading="Reliable Residential Construction Management You Can Trust"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseHome.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <IconBox icon={whyIcons[i]} title={w.title} desc={w.desc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <SectionHeading
          label="Our Process"
          heading="How Our Residential Construction Process Works"
        />
        <div className="mx-auto mt-14 max-w-2xl">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <ProcessStep
                step={p.step}
                title={p.title}
                desc={p.desc}
                isLast={i === process.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Start Your Residential Construction Project with Confidence"
        text="Whether you are planning a renovation, basement development, secondary suite or residential construction project, Blue Haven Dreams Ltd. is ready to help you manage the process professionally."
      />
    </>
  );
}
