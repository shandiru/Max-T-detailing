import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative bg-[#0D0D0D] px-6 py-24 text-white md:px-12 lg:px-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/contact-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-[#0D0D0D]/85" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-14 text-4xl font-bold uppercase md:text-5xl">
          Contact <span className="text-[#E8196B]">Us</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-[#1F1F1F]/95 p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-semibold">Send us a WhatsApp message:</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-[#888888]">First Name</label>
                  <input
                    className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                    type="text"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#888888]">Last Name</label>
                  <input
                    className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#888888]">Email Address</label>
                <input
                  className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                  type="email"
                />
              </div>

              <div>
                <label className="text-sm text-[#888888]">Phone Number</label>
                <input
                  className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                  type="tel"
                />
              </div>

              <div>
                <label className="text-sm text-[#888888]">Subject / Enquiry Type</label>
                <select className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none">
                  <option>Place an Order</option>
                  <option>Order Update / Tracking</option>
                  <option>Document Submission Query</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-[#888888]">
                  Registration Number <span className="text-[#888888]/70">(optional)</span>
                </label>
                <input
                  placeholder="AB12 XYZ"
                  className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                  type="text"
                />
              </div>

              <div>
                <label className="text-sm text-[#888888]">Message</label>
                <textarea
                  rows="5"
                  className="w-full rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-2 text-sm focus:border-[#E8196B] focus:outline-none"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-[#888888]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-[#E8196B]"
                />
                <span>I agree to the Privacy Policy.</span>
              </label>

              <button
                type="submit"
                disabled={!agreed}
                className="rounded-md border border-[#E8196B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#E8196B] transition hover:bg-[#E8196B] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:pt-2">
            <h3 className="mb-4 text-xl font-semibold">Contact details:</h3>

            <p className="leading-relaxed text-[#888888]">
              Snibston Dr,
              <br />
              Leicestershire LE67 3NQ, UK
            </p>

            <p className="mt-4 text-[#888888]">
              <a href="tel:+447580392806" className="hover:text-[#E8196B]">
                +44 7580 392806
              </a>
            </p>

            <div className="mt-6 flex items-center gap-4 text-xl">
              <a href="https://facebook.com/UKPlateLab" className="hover:text-[#E8196B]">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/ukplatelab" className="hover:text-[#E8196B]">
                <FaInstagram />
              </a>
            </div>

            <h3 className="mb-3 mt-10 text-xl font-semibold">Business Hours</h3>

            <ul className="space-y-1 text-sm text-[#888888]">
              <li>Monday - Sunday: 8:00 AM - 8:00 PM</li>
              <li>WhatsApp support available during business hours</li>
              <li>Fast turnaround on road-legal and show plate orders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
