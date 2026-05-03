export default function PlateBuilderHero() {
  return (
    <section className="bg-[#0D0D0D] px-6 pb-10 pt-30 text-white sm:pb-0 sm:pt-40">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Interactive builder</p>
        <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
          Build Your Number Plate
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#888888] md:text-lg">
          Use our step-by-step plate builder to create your perfect number plate. We offer a range of styles including
          standard, 3D gel, 4D, and 4D gel plates with options for badges, borders, and finishes. All road-legal
          plates are fully compliant with DVLA regulations and British Standard BS AU 145e.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#888888] md:text-lg">
          If you need any help configuring your plate, get in touch with us on{" "}
          <a href="tel:+447580392806" className="text-[#E8196B] hover:text-[#FF5FA0]">
            +44 7580 392806
          </a>{" "}
          or drop us a message at{" "}
          <a href="mailto:ukplatelab@gmail.com" className="text-[#E8196B] hover:text-[#FF5FA0]">
            ukplatelab@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
