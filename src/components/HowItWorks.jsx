import React from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Plate",
    desc: "Select your plate type, style, and preferred finish.",
  },
  {
    number: "02",
    title: "Enter Registration",
    desc: "Add your registration and refine the setup in our builder.",
  },
  {
    number: "03",
    title: "Upload Documents",
    desc: "Send proof of identity and entitlement for road-legal orders.",
  },
  {
    number: "04",
    title: "We Produce & Deliver",
    desc: "We manufacture, finish, and dispatch your plates quickly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-20 text-white" id="how-it-works">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">
          Simple, direct ordering
        </p>
        <h2 className="mb-4 text-4xl font-bold uppercase md:text-5xl">How It Works</h2>
        <p className="mb-16 text-[#888888]">Get your custom number plates in just 4 simple steps.</p>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="absolute left-0 top-6 hidden h-[1px] w-full bg-[#E8196B]/30 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center rounded-md border border-white/10 bg-[#1F1F1F] p-6 text-center">
              <div className="z-10 flex h-14 w-14 items-center justify-center rounded-md border border-[#E8196B] bg-[#0D0D0D] text-lg font-bold text-[#E8196B]">
                {step.number}
              </div>

              <h3 className="mt-6 text-lg font-semibold uppercase tracking-[0.08em]">{step.title}</h3>
              <p className="mt-2 max-w-[220px] text-sm text-[#888888]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
