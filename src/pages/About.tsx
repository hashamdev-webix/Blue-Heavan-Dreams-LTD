import {
  CheckCircle2,
  Target,
  Eye,
  CalendarCheck,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Users,
  ClipboardList,
  MessageSquare,
  MapPin,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import ProcessStep from "../components/ProcessStep";
import FaqItem from "../components/FaqItem";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { services } from "../data/siteData";

const coreValues = [
  {
    icon: CalendarCheck,
    title: "Reliability",
    desc: "Arrive prepared, communicate early, document project decisions and deliver on agreed timelines wherever controllable.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    desc: "Treat job-site safety, WHMIS awareness, insurance requirements and qualified subcontractor coordination as essential operating standards.",
  },
  {
    icon: FileText,
    title: "Transparency",
    desc: "Use written scopes, estimates, updates and project communication so clients understand timelines, progress and project expectations.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Control",
    desc: "Inspect work stages carefully, address deficiencies quickly and maintain professional workmanship standards throughout the project lifecycle.",
  },
  {
    icon: Users,
    title: "Local Contribution",
    desc: "Build strong relationships with Calgary homeowners, trades, suppliers and communities while contributing to local residential development.",
  },
];

const whyChoose = [
  {
    icon: ClipboardList,
    title: "Organized Project Management",
    desc: "Structured planning and scheduling designed to improve project efficiency and communication.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    desc: "Clear project updates and transparent coordination throughout each stage of construction.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Conscious Operations",
    desc: "Commitment to safe work practices, qualified trades and responsible construction procedures.",
  },
  {
    icon: MapPin,
    title: "Calgary Market Focus",
    desc: "Local understanding of Calgary residential construction requirements, housing trends and homeowner expectations.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Focused Coordination",
    desc: "Attention to workmanship standards, project inspections and organized construction management.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Service Approach",
    desc: "Professional accountability focused on timelines, organization and customer satisfaction.",
  },
];

const approach = [
  {
    step: 1,
    title: "Project Consultation",
    desc: "Understanding project goals, timelines and homeowner expectations.",
  },
  {
    step: 2,
    title: "Planning & Coordination",
    desc: "Developing organized scopes, schedules and subcontractor coordination plans.",
  },
  {
    step: 3,
    title: "Construction Management",
    desc: "Managing trades, communication, inspections and project progression.",
  },
  {
    step: 4,
    title: "Quality Review",
    desc: "Monitoring workmanship standards and addressing deficiencies promptly.",
  },
  {
    step: 5,
    title: "Project Completion",
    desc: "Final walkthrough, project handover and customer support.",
  },
];

const faqs = [
  {
    q: "What types of residential projects do you manage?",
    a: "We focus on renovations, basement developments, secondary-suite coordination, construction management and selected small custom-home projects in Calgary and surrounding areas.",
  },
  {
    q: "Do you work with subcontractors and licensed trades?",
    a: "Yes. We coordinate with qualified subcontractors, suppliers and licensed professionals for specialized construction functions and inspections.",
  },
  {
    q: "Do you help with permits and inspections?",
    a: "Yes. Our construction-management process includes permit coordination, project scheduling and inspection support where required.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Calgary and surrounding Alberta residential communities.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Blue Haven Dreams Ltd."
        sub="Reliable Residential Construction Management & Home Building Services in Calgary"
        intro="Blue Haven Dreams Ltd. is a Calgary-based residential construction management and home-building company focused on organized project coordination, professional communication, safety-conscious operations and customer-oriented residential construction services across Alberta."
      />

      {/* WHO WE ARE */}
      <section className="section grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-offwhite text-center">
            <span className="px-6 text-sm font-medium text-steel">
              [ Construction planning meeting / residential project coordination
              ]
            </span>
          </div>
        </Reveal>
        <div>
          <p className="section-label">Who We Are</p>
          <h2 className="h2">
            Professional Residential Construction Management Company
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-dark/70">
            Blue Haven Dreams Ltd. was established to provide Calgary
            homeowners, landlords and property investors with reliable
            residential construction management and renovation services. The
            company operates through a construction-management model that
            emphasizes organized planning, responsible subcontractor
            coordination, safety procedures, customer communication and
            disciplined project execution.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-dark/70">
            The company focuses on residential renovations, basement
            developments, secondary-suite coordination, infill-related support
            and selected small custom-home projects designed to meet the growing
            demand for organized and professionally managed housing improvements
            in Calgary.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-dark/70">
            Rather than competing immediately with large production builders,
            Blue Haven Dreams Ltd. concentrates on well-managed mid-sized
            residential projects where communication, accountability and quality
            control are critical to customer satisfaction.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Mission & Vision"
            heading="Building Trust Through Organized Residential Construction"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-silver/40 bg-white p-8">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white">
                  <Target size={26} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-navy-dark/70">
                  The mission of Blue Haven Dreams Ltd. is to provide reliable
                  residential construction management and home-building services
                  that help Calgary homeowners improve, expand and protect the
                  value of their homes through organized planning, safe work
                  practices, responsible subcontractor coordination and clear
                  communication.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-silver/40 bg-white p-8">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green text-navy-dark">
                  <Eye size={26} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">Our Vision</h3>
                <p className="text-base leading-relaxed text-navy-dark/70">
                  Our vision is to become a trusted Calgary residential builder
                  and construction management firm known for disciplined project
                  execution, practical customer service and contribution to the
                  local housing supply through renovations, secondary suites,
                  infill support and selected custom-home projects.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <SectionHeading
          label="Our Core Values"
          heading="Values That Guide Every Residential Construction Project"
        />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <IconBox icon={v.icon} title={v.title} desc={v.desc} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Our Services"
            heading="Residential Construction Services Designed for Calgary Homeowners"
            sub="Blue Haven Dreams Ltd. provides organized residential construction and renovation solutions tailored to the needs of homeowners, landlords, families and residential property investors."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.03}>
                <div className="flex items-center gap-3 rounded-xl border border-silver/40 bg-white px-5 py-4">
                  <CheckCircle2 size={20} className="shrink-0 text-green" />
                  <span className="font-medium text-navy">{s.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <SectionHeading
          label="Why Choose Blue Haven Dreams Ltd."
          heading="Focused on Professional Project Coordination & Customer Service"
        />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <IconBox icon={w.icon} title={w.title} desc={w.desc} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Our Approach"
            heading="How We Manage Residential Construction Projects"
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
        </div>
      </section>

      {/* CALGARY COMMUNITY */}
      <section className="relative overflow-hidden bg-navy-dark">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #ADEA9C 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green">
              Local Commitment
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Proudly Serving Calgary & Alberta Residential Communities
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80">
              Blue Haven Dreams Ltd. is committed to supporting Calgary
              homeowners, local suppliers, subcontractors and residential
              communities through organized construction management, renovation
              services and responsible housing improvement projects.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80">
              Our goal is to contribute positively to Calgary's growing
              residential housing market by helping clients improve property
              value, functionality and long-term living quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHeading
          label="Frequently Asked Questions"
          heading="Questions About Blue Haven Dreams Ltd."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FaqItem question={f.q} answer={f.a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Discuss Your Residential Construction Project"
        text="Contact Blue Haven Dreams Ltd. to learn more about our residential construction management, renovation and home improvement services in Calgary."
      />
    </>
  );
}
