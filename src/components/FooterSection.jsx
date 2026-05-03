import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="relative overflow-hidden border-b border-white/10 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8196B]/8 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <ShieldCheck className="text-[#E8196B]" size={32} />
            <h2 className="text-3xl font-bold uppercase tracking-[0.12em] md:text-5xl">
              UK <span className="text-[#E8196B]">Plate Lab</span>
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-sm uppercase tracking-[0.14em] text-[#888888] md:text-base">
            Custom road legal and show number plates made to BSAU145e standards.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="inline-block border-b border-[#E8196B] pb-2 text-lg font-semibold uppercase tracking-[0.16em] text-white">
            Our Range
          </h3>
          <ul className="space-y-3 pt-6 text-sm">
            {["Road legal plates", "3D and 4D styles", "Single and paired plates"].map((service) => (
              <li
                key={service}
                className="flex items-center gap-2 text-[#888888] transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8196B]" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="inline-block border-b border-[#E8196B] pb-2 text-lg font-semibold uppercase tracking-[0.16em] text-white">
            Get In Touch
          </h3>

          <div className="space-y-5 pt-6 text-sm text-[#888888]">
            <div className="group flex items-start gap-3 transition-colors hover:text-white">
              <a
                href="https://maps.google.com/?q=Snibston+Dr+Leicestershire+LE67+3NQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#E8196B]" />
                <p className="hover:text-[#E8196B]">
                  Snibston Dr,
                  <br />
                  Leicestershire LE67 3NQ,
                  <br />
                  United Kingdom
                </p>
              </a>
            </div>

            <div className="group flex items-center gap-3 transition-colors hover:text-white">
              <Phone size={18} className="flex-shrink-0 text-[#E8196B]" />
              <a href="tel:+447580392806" className="transition-colors hover:text-[#E8196B]">
                +44 7580 392806
              </a>
            </div>

            <div className="group flex items-center gap-3 transition-colors hover:text-white">
              <Mail size={18} className="flex-shrink-0 text-[#E8196B]" />
              <a href="mailto:ukplatelab@gmail.com" className="transition-colors hover:text-[#E8196B]">
                ukplatelab@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="inline-block border-b border-[#E8196B] pb-2 text-lg font-semibold uppercase tracking-[0.16em] text-white">
            Connect With Us
          </h3>

          <div className="mb-8 flex gap-4 pt-6">
            <a
              href="https://www.facebook.com/UKPlateLab/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#888888] transition-all duration-300 hover:border-[#E8196B] hover:bg-[#E8196B]/10 hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/ukplatelab/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#888888] transition-all duration-300 hover:border-[#E8196B] hover:bg-[#E8196B]/10 hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="text-sm uppercase tracking-[0.16em] text-white">Business Hours</p>
          <p className="mt-3 text-sm leading-relaxed text-[#888888]">
            Mon-Sun 8 AM - 8 PM
            <br />
            Fast response on WhatsApp and email.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-3 flex flex-col items-center justify-center gap-4 text-sm text-[#888888] sm:flex-row">
            <Link to="/privacy" className="transition-colors hover:text-[#E8196B]">
              Privacy Policy
            </Link>
            <span className="hidden text-white/15 sm:inline">|</span>
            <Link to="/terms" className="transition-colors hover:text-[#E8196B]">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-center text-sm text-[#888888]">&copy; 2026 UK Plate Lab. All rights reserved.</p>
          <p className="mt-2 text-center text-xs text-white/35">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8196B] transition-colors hover:text-white"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
