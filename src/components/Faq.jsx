import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Are your plates DVLA approved?",
      a: "Yes, all our road legal plates are fully DVLA approved and BS AU 145e certified. They are safe and legal for use on UK roads.",
    },
    {
      q: "How long does delivery take?",
      a: "Most orders are delivered within 48 hours. We offer express shipping for urgent orders.",
    },
    {
      q: "Can I customize my plate design?",
      a: "Yes! We offer customization for show plates. Road legal plates must follow DVLA format standards.",
    },
    {
      q: "What is your warranty?",
      a: "All plates come with a 5-year durability guarantee. We replace any plates that fade or show defects.",
    },
    {
      q: "Do you accept returns?",
      a: "We offer returns within 30 days if you're not satisfied with your order.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] max-w-3xl mb-20">
          Frequently Asked <br /> Questions
        </h2>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-white/10 bg-black"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full min-h-[88px] px-7 md:px-8 flex items-center justify-between gap-6 text-left"
                >
                  <h3 className="font-serif text-xl md:text-2xl uppercase leading-tight">
                    {item.q}
                  </h3>

                  <span className="shrink-0 text-white text-lg">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 md:px-8 pb-7 text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}