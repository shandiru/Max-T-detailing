import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plate",
      desc: "Select plate type and customization options",
    },
    {
      number: "02",
      title: "Enter Registration",
      desc: "Input your registration number and preferences",
    },
    {
      number: "03",
      title: "Upload Documents",
      desc: "Submit proof of vehicle ownership and identity",
    },
    {
      number: "04",
      title: "We Produce & Deliver",
      desc: "We manufacture and ship your plates quickly",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-gray-400 mb-16">
          Get your custom number plates in just 4 simple steps
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-yellow-500/40"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              
              {/* Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-yellow-500 text-yellow-400 font-bold text-lg bg-black z-10">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 font-semibold text-lg">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-[220px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}