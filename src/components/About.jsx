"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-20" id="about">
      <div className="relative mx-auto max-w-7xl">
        <img
          src="/newheros.jpeg"
          alt="UK Plate Lab"
          className="h-[400px] w-full max-w-[900px] object-cover object-top md:h-[500px] lg:h-[600px]"
        />

        <div className="mt-6 w-full bg-[#1F1F1F] p-10 text-white shadow-xl md:p-12 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[50%] lg:-translate-y-1/2 lg:p-16">
          <div className="absolute left-0 top-0 hidden h-full w-[6px] bg-[#E8196B] lg:block" />

          <div className="lg:ml-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">
              Technical. Trustworthy. Direct.
            </p>
            <h2 className="mb-6 text-4xl font-extrabold uppercase md:text-5xl">About UK Plate Lab</h2>

            <p className="mb-6 leading-relaxed text-[#888888]">
              We are a dedicated number plate manufacturer based in Leicestershire, crafting high-quality road-legal
              and custom plates for everyday drivers, car enthusiasts, and show vehicles. Our team brings years of
              experience in detailing and precision finishing to every plate we produce.
            </p>

            <p className="mb-10 leading-relaxed text-[#888888]">
              If you want a straightforward service, genuinely great plates, and results you can see on your vehicle,
              you&apos;re in the right place.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-white/10 bg-[#0D0D0D] py-6 text-center transition hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#E8196B]">10K+</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#888888]">Happy Customers</p>
              </div>

              <div className="rounded-md border border-white/10 bg-[#0D0D0D] py-6 text-center transition hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#E8196B]">14y</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#888888]">In Business</p>
              </div>

              <div className="rounded-md border border-white/10 bg-[#0D0D0D] py-6 text-center transition hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#E8196B]">48h</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#888888]">Average Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
