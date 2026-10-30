import { useState } from "react";

const products = [
  {
    title: "Standard Number Plates Pair",
    desc: "Front and rear oblong plates with ceramic coating. Fully compliant and built for daily use.",
    price: "£25.00",
    category: ["All Plates", "Road Plates"],
    image: "/Standard_Number_Plates_Pair.webp",
  },
  {
    title: "Replacement Standard Single Plate",
    desc: "Single road-legal replacement plate with a durable ceramic coated finish.",
    price: "£15.00",
    category: ["All Plates", "Road Plates", "Single Plates"],
    image: "/Standard_Number_Plates_Pair.webp",
  },
  {
    title: "3D Gel Number Plates Pair",
    desc: "Raised domed gel resin characters for a premium 3D finish that stays road legal.",
    price: "£40.00",
    category: ["All Plates", "Road Plates"],
    image: "/3D_Gel_Number_Plates_Pair.webp",
  },
  {
    title: "4D Number Plate Pair",
    desc: "Laser-cut acrylic raised characters for a bold, crisp 4D look.",
    price: "£40.00",
    category: ["All Plates", "Road Plates"],
    image: "/4D_Number_Plate_Pair.webp",
  },
  {
    title: "4D Gel Number Plate Pair",
    desc: "4D acrylic lettering combined with gel resin for the ultimate premium plate finish.",
    price: "£55.00",
    category: ["All Plates", "Road Plates"],
    image: "/4D_Gel_Number_Plate_Pair.webp",
  },
  {
    title: "Show Plates Set",
    desc: "Pair of custom show plates for exhibitions, display builds, and off-road vehicles.",
    price: "£30.00",
    category: ["All Plates", "Show Plates"],
    image: "/Show_Plates_Set.jpeg",
  },
  {
    title: "Show Plate - Single",
    desc: "Single custom show plate for display, photo shoots, or events.",
    price: "£15.00",
    category: ["All Plates", "Show Plates", "Single Plates"],
    image: "/Show_Plates_Set.jpeg",
  },
];

const tabs = ["All Plates", "Road Plates", "Show Plates", "Single Plates"];

export default function PlateTypes() {
  const [activeTab, setActiveTab] = useState("All Plates");

  const filteredProducts = products.filter((product) => product.category.includes(activeTab));

  return (
    <section className="bg-[#0D0D0D] px-4 py-16 text-white sm:px-6 lg:px-8" id="products">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Product range</p>
          <h2 className="mb-3 text-4xl font-bold uppercase sm:text-5xl">Our Plate Types</h2>
          <p className="mx-auto max-w-2xl text-sm text-[#888888] sm:text-base">
            Choose from our range of premium number plate options. All DVLA approved and road legal where stated.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="80">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:text-base ${
                activeTab === tab
                  ? "border-[#E8196B] bg-[#E8196B] text-white"
                  : "border-[#E8196B] bg-transparent text-[#E8196B] hover:bg-[#E8196B] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProducts.map((product, index) => (
            <div
              key={product.title}
              data-aos="zoom-in-up"
              data-aos-delay={100 + index * 60}
              className="overflow-hidden rounded-md border border-white/10 bg-[#1F1F1F] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-[#E8196B]/40"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-white">{product.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#888888]">{product.desc}</p>
                <p className="text-lg font-bold text-[#E8196B]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
