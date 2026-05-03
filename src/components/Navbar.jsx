import React, { useEffect, useState } from "react";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", link: "/#" },
  { name: "About", link: "/#about" },
  { name: "Products", link: "/#products" },
  { name: "Why Us", link: "/#why" },
  { name: "Reviews", link: "/#reviews" },
  { name: "Contact", link: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
        setShowTopBar(currentScrollY < lastScrollY);
      } else {
        setShowTopBar(true);
        setScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-500 ease-in-out ${
          showTopBar ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex w-full flex-col border-b border-white/10 md:flex-row">
          <div className="flex flex-1 justify-center bg-[#E8196B] text-white md:justify-start">
            <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-6 py-2.5 md:flex-row md:justify-start md:gap-6">
              <a href="tel:+447580392806" className="flex items-center gap-2 text-sm font-semibold">
                <Phone size={16} />
                <span>+44 7580 392806</span>
              </a>
              <div className="hidden h-4 w-px bg-white/70 md:block" />
              <a href="mailto:ukplatelab@gmail.com" className="flex items-center gap-2 text-sm font-semibold">
                <Mail size={16} />
                <span className="hover:text-white/85">ukplatelab@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-center bg-[#0D0D0D] text-white md:justify-end">
            <div className="flex w-full max-w-7xl items-center justify-center px-6 py-2.5 md:justify-end">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#888888]">
                <Clock size={16} />
                <span className="hidden sm:inline">DVLA Registered · BSAU145e · Mon-Sun 8 AM - 8 PM</span>
                <span className="sm:hidden">Mon-Sun 8 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-white/10 bg-[#0D0D0D]/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_12px_30px_rgba(0,0,0,0.28)]" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4 xl:gap-8">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img
                src="/logo.png"
                alt="UK Plate Lab"
                loading="eager"
                decoding="async"
                className="h-14 w-auto shrink-0 rounded-md border border-white/10 bg-[#1F1F1F] p-2"
              />
              <div className="hidden min-w-0 lg:block">
                <p className="truncate font-display text-xl uppercase leading-none tracking-[0.06em] text-white xl:text-2xl">
                  UK Plate Lab
                </p>
                <p className="truncate text-[10px] uppercase tracking-[0.18em] text-[#888888] xl:text-[11px] xl:tracking-[0.22em]">
                  Custom Road Legal &amp; Show Plates
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.link}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-[#888888] transition-colors hover:text-white xl:tracking-[0.18em]"
                >
                  {item.name}
                </HashLink>
              ))}
            </nav>

            <Link
              to="/build-your-plate"
              className="hidden whitespace-nowrap rounded-md bg-[#E8196B] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#FF5FA0] xl:inline-flex xl:px-6 xl:tracking-[0.18em]"
            >
              Build Your Plate
            </Link>

            <button
              onClick={() => setIsOpen((current) => !current)}
              className="rounded-md border border-white/10 p-2 text-white transition-colors hover:border-[#E8196B] xl:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#111111] transition-all duration-300 xl:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-3 px-6 py-4">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-white"
              >
                {item.name}
              </HashLink>
            ))}
            <Link
              to="/build-your-plate"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-md bg-[#E8196B] py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#FF5FA0]"
            >
              Build Your Plate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
