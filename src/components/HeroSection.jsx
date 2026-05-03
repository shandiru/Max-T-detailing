
import { FaCheckCircle, FaGem, FaLayerGroup, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

const stats = [
  { title: "Road Legal Plates", icon: <FaCheckCircle className="h-6 w-6 text-[#E8196B]" /> },
  { title: "3D & 4D Specialists", icon: <FaLayerGroup className="h-6 w-6 text-[#E8196B]" /> },
  { title: "1000+ Plates Supplied", icon: <FaShieldAlt className="h-6 w-6 text-[#E8196B]" /> },
  { title: "Ceramic Coated Finish", icon: <FaGem className="h-6 w-6 text-[#E8196B]" /> },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D]" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,25,107,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,95,160,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-44 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-left" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-[#1F1F1F] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
              <span>DVLA Registered</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8196B]" />
              <span>BSAU145e Standard</span>
            </div>

            <h1 className="mt-10 text-5xl font-extrabold uppercase leading-[0.92] text-white md:mt-0 md:text-6xl xl:text-7xl">
              UK Plate Lab
            </h1>

            <p className="text-xl uppercase tracking-[0.16em] text-[#E8196B]">
              Premium Road-Legal & Custom Number Plates
            </p>

            <p className="max-w-xl text-lg leading-relaxed text-[#888888]">
              Built for durability, designed for presence, and finished to feel bold, technical, and road-ready.
              Premium UK plates with ceramic-coated protection and a sharp dark-first identity.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row" data-aos="fade-up">
              <a
                href="/build-your-plate"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#E8196B] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(232,25,107,0.28)] transition-all duration-300 hover:bg-[#FF5FA0]"
              >
                Build Your Plate
              </a>

              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-[#1F1F1F] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#E8196B] hover:text-[#FF5FA0]"
              >
                View Styles
              </a>
            </div>

            <div className="grid grid-cols-1 items-start gap-4 pt-6 sm:grid-cols-2" data-aos="zoom-in">
              <div className="flex items-start gap-3 rounded-md border border-white/10 bg-[#1F1F1F]/80 p-4 transition hover:border-[#E8196B]/40 hover:shadow-[0_10px_25px_rgba(232,25,107,0.18)]">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 flex-shrink-0 text-[#E8196B]" />
                <div>
                  <p className="font-semibold uppercase tracking-[0.12em] text-white">Location</p>
                  <p className="text-sm text-[#888888]">Snibston Dr, Leicestershire LE67 3NQ, UK</p>
                  <p className="mt-1 text-sm text-[#FF5FA0]">DVLA Compliant (BS AU 145e)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full" data-aos="fade-left">
            <div className="absolute -inset-4 rounded-md bg-[linear-gradient(135deg,rgba(232,25,107,0.22),transparent_55%)] blur-2xl" />
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(232,25,107,0.3)] sm:aspect-[4/3]">
              <img
                src="/hero.png"
                alt="Custom UK number plates"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="grid max-w-4xl grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-md border border-white/10 bg-[#1F1F1F]/90 p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#E8196B]/40 hover:shadow-[0_8px_20px_rgba(232,25,107,0.28)]"
              >
                <div className="mb-2 flex items-center justify-center">{stat.icon}</div>
                <p className="text-lg font-bold uppercase tracking-[0.08em] text-white">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
