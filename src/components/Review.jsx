import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Peter Yule",
      text: "Brilliant service from start to finish. Diagnosed the issue quickly and explained everything clearly before any work. Great pricing and communication.",
    },
    {
      name: "Foysal Ahmed",
      text: "Always reliable, always get good work done at a good price.",
    },
    {
      name: "Aires Silva",
      text: "5★ service, always there when needed. Just want to say thank you.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 text-[#0E1C29]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted by drivers for reliable service, clear communication, and great results.
          </p>
        </div>

        {/* IMAGE ROW */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/after.jpg"
              alt="After service"
              className="w-full h-[260px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/before.jpg"
              alt="Before service"
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform flex flex-col"
            >
              {/* Stars */}
              <div className="flex mb-3 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {item.text}
              </p>

              {/* Name */}
              <h4 className="font-semibold uppercase tracking-wide text-sm">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}