import { useState } from "react";

const products = [
  {
    title: "Standard Number Plates Pair",
    desc: "Front and rear oblong plates (520×111mm) with ceramic coating. Fully compliant.",
    price: "£25.00",
    category: ["All Plates", "Road Plates"],
    image: "/images/standard-plates.jpg",
  },
  {
    title: "Replacement Standard Single Plate",
    desc: "Single road-legal replacement plate. Ceramic coated for lasting protection.",
    price: "£15.00",
    category: ["All Plates", "Road Plates", "Single Plates"],
    image: "/images/single-plate.jpg",
  },
  {
    title: "3D Gel Number Plates Pair",
    desc: "Raised domed gel resin characters for a premium 3D finish. Fully road legal.",
    price: "£40.00",
    category: ["All Plates", "Road Plates"],
    image: "/images/3d-gel-plates.jpg",
  },
  {
    title: "4D Number Plate Pair",
    desc: "Laser-cut acrylic raised characters for a bold, standout 4D look. Road legal.",
    price: "£40.00",
    category: ["All Plates", "Road Plates"],
    image: "/images/4d-plates.jpg",
  },
  {
    title: "4D Gel Number Plate Pair",
    desc: "Combines 4D acrylic lettering with gel resin for the ultimate premium plate.",
    price: "£55.00",
    category: ["All Plates", "Road Plates"],
    image: "/images/4d-gel-plates.jpg",
  },
  {
    title: "Show Plates Set",
    desc: "Pair of custom show plates for exhibitions, car shows, or display. Off-road use only.",
    price: "£30.00",
    category: ["All Plates", "Show Plates"],
    image: "/images/show-plates-set.jpg",
  },
  {
    title: "Show Plate — Single",
    desc: "Single custom show plate for display, photo shoots, or events. Off-road use only.",
    price: "£15.00",
    category: ["All Plates", "Show Plates", "Single Plates"],
    image: "/images/show-plate-single.jpg",
  },
];

const tabs = ["All Plates", "Road Plates", "Show Plates", "Single Plates"];

export default function PlateTypes() {
  const [activeTab, setActiveTab] = useState("All Plates");

  const filteredProducts = products.filter((product) =>
    product.category.includes(activeTab)
  );

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Our Plate Types
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-base">
            Choose from our range of premium number plate options. All DVLA
            approved and road legal.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl border-2 border-pink-500 px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base ${
                activeTab === tab
                  ? "bg-pink-500 text-black"
                  : "bg-transparent text-pink-500 hover:bg-pink-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-xl bg-[#0d0d0d] shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-white">
                  {product.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-300">
                  {product.desc}
                </p>

                <p className="text-lg font-bold text-pink-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}