import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { services, clients } from "../data/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition hover:text-navy ${isActive ? "text-navy" : "text-navy-dark/80"}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-silver/40 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Blue Haven Dreams Ltd."
            className="h-12 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink to="/services" className={linkClass}>
              <span className="inline-flex items-center gap-1">
                Our Services <ChevronDown size={15} />
              </span>
            </NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="rounded-xl border border-silver/40 bg-white p-2 shadow-lg">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services#${s.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-navy-dark/80 transition hover:bg-offwhite hover:text-navy"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="group relative">
            <NavLink to="/who-we-serve" className={linkClass}>
              <span className="inline-flex items-center gap-1">
                Who We Serve <ChevronDown size={15} />
              </span>
            </NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="rounded-xl border border-silver/40 bg-white p-2 shadow-lg">
                {clients.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/who-we-serve#${c.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-navy-dark/80 transition hover:bg-offwhite hover:text-navy"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/contact" className="btn-primary px-5 py-2">
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className="text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-silver/40 bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-3">
            <li>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-navy-dark"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-navy-dark"
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "services" ? null : "services")
                }
                className="flex w-full items-center justify-between py-2 text-navy-dark"
              >
                Our Services{" "}
                <ChevronDown
                  size={16}
                  className={
                    openMenu === "services"
                      ? "rotate-180 transition"
                      : "transition"
                  }
                />
              </button>
              {openMenu === "services" && (
                <ul className="ml-3 border-l border-silver/40 pl-3">
                  <li>
                    <Link
                      to="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm font-medium text-navy"
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services#${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-navy-dark/80"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "clients" ? null : "clients")
                }
                className="flex w-full items-center justify-between py-2 text-navy-dark"
              >
                Who We Serve{" "}
                <ChevronDown
                  size={16}
                  className={
                    openMenu === "clients"
                      ? "rotate-180 transition"
                      : "transition"
                  }
                />
              </button>
              {openMenu === "clients" && (
                <ul className="ml-3 border-l border-silver/40 pl-3">
                  <li>
                    <Link
                      to="/who-we-serve"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm font-medium text-navy"
                    >
                      All Clients
                    </Link>
                  </li>
                  {clients.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/who-we-serve#${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-navy-dark/80"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
