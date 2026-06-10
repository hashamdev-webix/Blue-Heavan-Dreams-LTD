import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Building2,
  BadgeCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import FaqItem from "../components/FaqItem";
import Reveal from "../components/Reveal";
import { company } from "../data/siteData";

const cities = [
  "Calgary",
  "Airdrie",
  "Chestermere",
  "Cochrane",
  "Okotoks",
  "Other",
];
const serviceOptions = [
  "Home Renovations",
  "Kitchen Renovations",
  "Bathroom Renovations",
  "Basement Development",
  "Secondary Suites",
  "Construction Management",
  "Custom Home Planning",
  "Infill Project Support",
  "Exterior Improvements",
];
const projectTypes = [
  "Residential Home",
  "Rental Property",
  "Basement Suite",
  "Infill Project",
  "Small Custom Home",
  "Other",
];
const timelines = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Within 6 Months",
  "Planning Stage",
];
const budgets = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const whyContact = [
  {
    icon: MessageSquare,
    title: "Customer-Focused Communication",
    desc: "Clear updates and organized project discussions from consultation to completion.",
  },
  {
    icon: ClipboardList,
    title: "Residential Construction Coordination",
    desc: "Professional support for renovations, basement developments and housing improvements.",
  },
  {
    icon: Building2,
    title: "Calgary Market Knowledge",
    desc: "Understanding of local residential construction and renovation requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Service Approach",
    desc: "Organized planning and customer-oriented project coordination services.",
  },
];

const faqs = [
  {
    q: "How quickly will someone contact me after submitting the form?",
    a: "Our team aims to respond to all inquiries as quickly as possible during regular business hours.",
  },
  {
    q: "Do you provide consultations for residential projects?",
    a: "Yes. We discuss project goals, timelines and residential construction requirements during the consultation process.",
  },
  {
    q: "What types of projects do you manage?",
    a: "We manage residential renovations, basement developments, secondary suites, construction management and selected small custom-home projects.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Calgary and surrounding Alberta residential communities.",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  service: "",
  projectType: "",
  timeline: "",
  budget: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.service || !form.message) {
      setError("Please fill in all required fields marked with *.");
      return;
    }
    if (!form.consent) {
      setError("Please agree to be contacted regarding your inquiry.");
      return;
    }
    setError("");
    setSending(true);
    try {
      await emailjs.send(
        "service_g8bqrlf",
        "template_9nmmp2i",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          address: form.address || "Not provided",
          city: form.city || "Not provided",
          service: form.service,
          projectType: form.projectType || "Not provided",
          timeline: form.timeline || "Not provided",
          budget: form.budget || "Not provided",
          message: form.message,
        },
        { publicKey: "wPSrfcun9p5e6aSmd" }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong while sending your message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-silver/60 bg-white px-4 py-2.5 text-sm text-navy-dark outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10";
  const labelClass = "mb-1.5 block text-sm font-medium text-navy-dark";

  return (
    <>
      <PageHero
        title="Contact Blue Haven Dreams Ltd."
        sub="Get in Touch for Residential Construction & Renovation Services in Calgary"
        intro="Blue Haven Dreams Ltd. provides organized residential construction management, renovation and home-improvement services for homeowners, families, landlords and property investors across Calgary and Alberta."
      />

      {/* INTRO */}
      <section className="section text-center">
        <SectionHeading
          label="Contact Our Team"
          heading="Discuss Your Residential Construction Project"
          sub="Whether you are planning a home renovation, basement development, secondary suite or residential improvement project, our team is ready to discuss your requirements and help you understand the next steps with organized communication and professional coordination."
        />
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="section pt-0">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-silver/40 bg-white p-7 md:p-9">
              <h3 className="text-2xl font-bold text-navy">
                Request Information
              </h3>
              <p className="mt-2 text-sm text-navy-dark/70">
                Complete the form below and our team will contact you shortly
                regarding your residential construction or renovation project.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center rounded-xl bg-green/15 p-8 text-center">
                  <CheckCircle2 size={48} className="text-green-dark" />
                  <p className="mt-4 text-lg font-semibold text-navy">
                    Thank you for contacting Blue Haven Dreams Ltd.
                  </p>
                  <p className="mt-1 text-sm text-navy-dark/70">
                    Our team will review your inquiry and contact you soon.
                  </p>
                </div>
              ) : (
                <div className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input
                        className={inputClass}
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input
                        className={inputClass}
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Property Address</label>
                      <input
                        className={inputClass}
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>City</label>
                      <select
                        className={inputClass}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                      >
                        <option value="">Select a city</option>
                        {cities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Service Required *</label>
                      <select
                        className={inputClass}
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Project Type</label>
                      <select
                        className={inputClass}
                        value={form.projectType}
                        onChange={(e) => update("projectType", e.target.value)}
                      >
                        <option value="">Select a type</option>
                        {projectTypes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Estimated Project Timeline
                      </label>
                      <select
                        className={inputClass}
                        value={form.timeline}
                        onChange={(e) => update("timeline", e.target.value)}
                      >
                        <option value="">Select a timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Estimated Budget</label>
                      <select
                        className={inputClass}
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                      >
                        <option value="">Select a budget</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={5}
                      className={inputClass}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-navy-dark/80">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-silver"
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                    />
                    <span>I agree to be contacted regarding my inquiry.</span>
                  </label>
                  {error && (
                    <p className="text-sm font-medium text-red-600">{error}</p>
                  )}
                  <button onClick={handleSubmit} disabled={sending} className="btn-primary w-full disabled:opacity-60">{sending ? "Sending..." : "Submit Request"}</button>
                </div>
              )}
            </div>
          </Reveal>

          {/* CONTACT INFO */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-navy-dark p-7 text-white">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green">
                  Contact Information
                </p>
                <h3 className="text-xl font-bold">
                  Connect with Our Calgary Residential Construction Team
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-white/80">
                  <li className="flex gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-green" />
                    <span>{company.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={20} className="mt-0.5 shrink-0 text-green" />
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all transition hover:text-green"
                    >
                      {company.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-silver/40 bg-white p-7">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel">
                  Service Areas
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {company.serviceAreas.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-2 text-sm text-navy-dark/80"
                    >
                      <CheckCircle2 size={16} className="shrink-0 text-green" />{" "}
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Why Work With Us"
            heading="Professional Residential Construction Management with Organized Communication"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {whyContact.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <IconBox icon={w.icon} title={w.title} desc={w.desc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section">
        <SectionHeading
          heading="Serving Calgary & Surrounding Alberta Communities"
          sub="Blue Haven Dreams Ltd. proudly provides residential construction management and renovation services throughout Calgary and nearby areas."
        />
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-silver/40">
            <iframe
              title="Blue Haven Dreams Ltd. location"
              src="https://www.google.com/maps?q=4026+8th+ST+SE,+Calgary,+AB+T2G+3A7&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite">
        <div className="section">
          <SectionHeading
            label="Frequently Asked Questions"
            heading="Questions About Contacting Blue Haven Dreams Ltd."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <FaqItem question={f.q} answer={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
