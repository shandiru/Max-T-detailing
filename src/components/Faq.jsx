import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    q: "Are your plates DVLA approved?",
    a: "Yes. All road-legal plates are made to current DVLA requirements and BS AU 145e standards.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are turned around quickly, with many completed and dispatched within 48 hours.",
  },
  {
    q: "Can I customize my plate design?",
    a: "Yes. Show plates offer the most freedom, while road-legal plates must stay within DVLA formatting rules.",
  },
  {
    q: "Do you offer premium styles like 3D and 4D?",
    a: "Absolutely. We offer standard, 3D gel, 4D, and premium hybrid finishes depending on the look you want.",
  },
  {
    q: "What documents do I need?",
    a: "For road-legal plates you will need proof of identity and proof of entitlement, in line with DVLA requirements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#0D0D0D] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Need help?</p>
        <h2 className="mb-20 max-w-3xl text-5xl uppercase leading-[0.9] md:text-6xl lg:text-7xl">
          Frequently Asked <br /> Questions
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.q} className="rounded-md border border-white/10 bg-[#1F1F1F]">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex min-h-[88px] w-full items-center justify-between gap-6 px-7 text-left md:px-8"
                >
                  <h3 className="text-xl uppercase leading-tight md:text-2xl">{item.q}</h3>
                  <span className="shrink-0 text-lg text-[#E8196B]">{isOpen ? <FaMinus /> : <FaPlus />}</span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-7 leading-relaxed text-[#888888] md:px-8">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
