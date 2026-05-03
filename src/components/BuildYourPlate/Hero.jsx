export default function PlateBuilderHero() {
  return (
    <section className="bg-[#0a0a0a] text-white sm:pt-40 sm:pb-0 px-6 pt-30 pb-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-white">
          Build Your Number Plate
        </h1>

        <p className="mt-6 text-sm md:text-lg text-[#C0C0C0] leading-relaxed max-w-3xl mx-auto">
          Use our step-by-step plate builder to create your perfect number
          plate. We offer a range of styles including standard, 3D gel, 4D, and
          4D gel plates — with options for badges, borders, and finishes. All
          road-legal plates are fully compliant with DVLA regulations and
          British Standard BS AU 145e.
        </p>

        <p className="mt-4 text-sm md:text-lg text-[#C0C0C0] leading-relaxed max-w-3xl mx-auto">
          If you need any help configuring your plate, get in touch with us on{" "}
          <a href="tel:07580392806" className="text-red-600 hover:text-red-500">
            07580392806
          </a>{" "}
          or drop us a message at{" "}
          <a
            href="mailto:ukplatelab@gmail.com"
            className="text-red-600 hover:text-red-500"
          >
            ukplatelab@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}