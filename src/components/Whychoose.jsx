import React from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaGem,
  FaClock,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: "Ceramic Coated Plates",
      desc: "Every plate comes with a protective ceramic coating as standard — no extra cost.",
    },
    {
      icon: <FaCheckCircle />,
      title: "100% Road Legal",
      desc: "All plates fully comply with British Standard BS AU 145e and DVLA regulations.",
    },
    {
      icon: <FaGem />,
      title: "Premium Finish",
      desc: "From standard to 4D gel, every plate is built for a sharp, professional look.",
    },
    {
      icon: <FaClock />,
      title: "Fast & Reliable Service",
      desc: "Orders handled efficiently with attention to detail from start to finish.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Hassle-Free Process",
      desc: "Simple ordering, clear document guidance, and smooth delivery every time.",
    },
    {
      icon: <FaHandshake />,
      title: "Honest & Transparent",
      desc: "No hidden costs, no shortcuts — just quality plates at fair prices.",
    },
  ];

  return (
    <section id="why" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Why Choose <span className="text-red-600">Us</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C0C0C0] mt-4"></div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* ICON */}
              <div className="text-red-600 text-2xl mt-1">{item.icon}</div>

              {/* TEXT */}
              <div>
                <h3 className="uppercase font-semibold tracking-wide text-lg">
                  {item.title}
                </h3>
                <p className="text-[#C0C0C0] text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}