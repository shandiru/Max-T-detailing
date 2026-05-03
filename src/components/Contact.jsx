import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/contact-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-14">
          Contact <span className="text-red-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-black/80 p-8 border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">
              Send us a WhatsApp message:
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#C0C0C0] text-sm">First Name</label>
                  <input className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm" type="text" />
                </div>

                <div>
                  <label className="text-[#C0C0C0] text-sm">Last Name</label>
                  <input className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm" type="text" />
                </div>
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">Email Address</label>
                <input className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm" type="email" />
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">Phone Number</label>
                <input className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm" type="tel" />
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">Subject / Enquiry Type</label>
                <select className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm">
                  <option>Place an Order</option>
                  <option>Order Update / Tracking</option>
                  <option>Document Submission Query</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">
                  Registration Number <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  placeholder="AB12 XYZ"
                  className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm"
                  type="text"
                />
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-black/50 border border-[#868386] px-3 py-2 text-sm"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-[#C0C0C0]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-red-600"
                />
                <span>I agree to the Privacy Policy.</span>
              </label>

              <button
                type="submit"
                disabled={!agreed}
                className="px-6 py-2 border border-red-600 text-red-600 text-sm hover:bg-red-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* DETAILS */}
          <div className="text-white lg:pt-2">
            <h3 className="text-xl font-semibold mb-4">Contact details:</h3>

            <p className="text-[#C0C0C0] leading-relaxed">
              Que Sera, Pentre Hill,
              <br />
              Flint Mountain, Flint, United Kingdom
            </p>

            <p className="text-[#C0C0C0] mt-4">
              <a href="tel:+447392791919" className="hover:text-red-600">
                +44 7392 791919
              </a>
            </p>

            <div className="flex items-center gap-4 mt-6 text-xl">
              <a href="#" className="hover:text-red-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-red-600">
                <FaInstagram />
              </a>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-3">Business Hours</h3>

            <ul className="text-[#C0C0C0] space-y-1 text-sm">
              <li>Monday: 8:00 AM - 8:00 PM</li>
              <li>Tuesday: 8:00 AM - 8:00 PM</li>
              <li>Wednesday: 8:00 AM - 8:00 PM</li>
              <li>Thursday: 8:00 AM - 8:00 PM</li>
              <li>Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}