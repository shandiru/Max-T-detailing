"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#111] py-20" id="about">
      <div className="relative max-w-7xl mx-auto">

        {/* IMAGE */}
        <img
          src="/newheros.jpeg"
          alt="UK Plate Lab"
          className="
            w-full
            max-w-[900px]
            h-[400px]
            md:h-[500px]
            lg:h-[600px]
            object-cover
            object-top
          "
        />

        {/* TEXT BOX */}
        <div
          className="
            bg-black
            text-white
            shadow-xl
            w-full

            lg:absolute
            lg:top-1/2
            lg:right-0
            lg:-translate-y-1/2
            lg:w-[50%]

            p-10 
            md:p-12 
            lg:p-16
            mt-6
            lg:mt-0
          "
        >
          {/* LEFT ACCENT */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-[6px] bg-yellow-400"></div>

          <div className="lg:ml-6">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">
              ABOUT UK PLATE LAB
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a dedicated number plate manufacturer based in Leicestershire,
              crafting high-quality road-legal and custom plates for everyday drivers,
              car enthusiasts, and show vehicles. Our team brings years of experience
              in vehicle detailing and care, giving us a sharp eye for precision,
              durability, and flawless finishes; applied to every plate we produce.
            </p>

            <p className="text-gray-300 mb-10 leading-relaxed">
              If you want a straightforward service, genuinely great plates, and
              results you can see on your vehicle, you're in the right place.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-[#0d0d0d] py-6 rounded-lg border border-gray-800 text-center hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-yellow-400">10K+</h3>
                <p className="text-gray-400 text-sm mt-1">Happy Customers</p>
              </div>

              <div className="bg-[#0d0d0d] py-6 rounded-lg border border-gray-800 text-center hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-yellow-400">14y</h3>
                <p className="text-gray-400 text-sm mt-1">In Business</p>
              </div>

              <div className="bg-[#0d0d0d] py-6 rounded-lg border border-gray-800 text-center hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-yellow-400">48h</h3>
                <p className="text-gray-400 text-sm mt-1">Average Delivery</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}