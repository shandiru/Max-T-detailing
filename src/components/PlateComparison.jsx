
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

export default function PlateComparison() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div data-aos="fade-up">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">
            Choose the right fit
          </p>
          <h2 className="mb-16 text-center text-4xl font-bold uppercase md:text-5xl">Road Legal vs Show Plates</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div data-aos="fade-right" className="rounded-md border border-[#E8196B] bg-[#1F1F1F] p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaCheck className="text-xl text-[#E8196B]" />
              <h3 className="text-xl font-semibold uppercase tracking-[0.1em] text-[#E8196B]">Road Legal Plates</h3>
            </div>

            <p className="mb-6 text-[#888888]">DVLA compliant and safe for daily driving on UK roads.</p>

            <ul className="space-y-3 text-[#888888]">
              <li className="flex items-start gap-2">
                <span className="text-[#E8196B]">•</span>
                DVLA compliant
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E8196B]">•</span>
                Daily driving approved
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E8196B]">•</span>
                Standard and custom formats
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E8196B]">•</span>
                Ceramic coated protection
              </li>
            </ul>
          </div>

          <div data-aos="fade-left" data-aos-delay="120" className="rounded-md border border-white/10 bg-[#1F1F1F] p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="text-xl text-[#FF5FA0]" />
              <h3 className="text-xl font-semibold uppercase tracking-[0.1em]">Show Plates</h3>
            </div>

            <p className="mb-6 text-[#888888]">Custom designs for off-road vehicles, displays, and show builds.</p>

            <ul className="space-y-3 text-[#888888]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF5FA0]">•</span>
                Off-road use only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5FA0]">•</span>
                Custom designs available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5FA0]">•</span>
                Ideal for events and displays
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5FA0]">•</span>
                Premium finish options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
