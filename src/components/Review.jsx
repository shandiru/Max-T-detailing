import React from "react";

const testimonials = [
  {
    name: "Peter Yule",
    text: "Brilliant service from start to finish. Fast turnaround, clear communication, and the finished plates looked superb.",
  },
  {
    name: "Foysal Ahmed",
    text: "Always reliable and always great quality. The ordering process was simple and the finish was spot on.",
  },
  {
    name: "Aires Silva",
    text: "5-star service. Easy to deal with, professional throughout, and the plates looked even better in person.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-24 text-white" id="reviews">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Social proof</p>
          <h2 className="mb-4 text-4xl font-bold uppercase md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-3xl text-lg text-[#888888]">
            Trusted by drivers for reliable service, sharp finish quality, and clear communication.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-white/10 shadow-lg">
            <img src="/after.jpg" alt="After service" className="h-[260px] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 shadow-lg">
            <img src="/before.jpg" alt="Before service" className="h-[260px] w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-md border border-white/10 bg-[#1F1F1F] p-6 shadow-lg transition-transform hover:-translate-y-2 hover:border-[#E8196B]/40"
            >
              <div className="mb-3 flex text-[#E8196B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <p className="mb-6 flex-grow leading-relaxed text-[#888888]">{item.text}</p>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em]">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
