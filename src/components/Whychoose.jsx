import React from "react";
import { FaCheckCircle, FaClipboardCheck, FaClock, FaGem, FaHandshake, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Ceramic Coated Plates",
    desc: "Every plate comes with a protective ceramic coating as standard, giving your order a crisp premium finish.",
  },
  {
    icon: <FaCheckCircle />,
    title: "100% Road Legal",
    desc: "All road-legal plates comply with British Standard BS AU 145e and current DVLA regulations.",
  },
  {
    icon: <FaGem />,
    title: "Premium Finish",
    desc: "From standard to 4D gel, every plate is built for a strong, professional, high-contrast look.",
  },
  {
    icon: <FaClock />,
    title: "Fast & Reliable Service",
    desc: "Orders are handled quickly with clear communication and attention to detail from start to finish.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Hassle-Free Process",
    desc: "Simple ordering, clear document guidance, and smooth delivery with no unnecessary friction.",
  },
  {
    icon: <FaHandshake />,
    title: "Honest & Transparent",
    desc: "No hidden costs and no shortcuts, just high-quality plates delivered with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#0D0D0D] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">
            Built around confidence and compliance
          </p>
          <h2 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">
            Why Choose <span className="text-[#E8196B]">Us</span>
          </h2>
          <div className="mt-4 h-[2px] w-20 bg-[#E8196B]" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {reasons.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-md border border-white/10 bg-[#1F1F1F] p-6">
              <div className="mt-1 text-2xl text-[#E8196B]">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.12em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#888888]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
