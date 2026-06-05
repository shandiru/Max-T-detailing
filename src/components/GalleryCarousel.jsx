import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImageFiles = [
  "MT-2.webp",
  "MT-3.webp",
  "MT-5.webp",
  "MT-6.webp",
  "MT-7.webp",
  "MT-8.webp",
  "MT-9.webp",
  "MT-10.webp",
  "MT-11.webp",
  "MT-12.webp",
  "MT-13.webp",
  "MT-14.webp",
  "MT-15.webp",
  "MT-16.webp",
  "MT-17.webp",
  "MT-18.webp",
  "MT-19.webp",
  "MT-20.webp",
  "MT-21.webp",
  "MT-22.webp",
  "MT-23.webp",
  "MT-24.webp",
  "MT-25.webp",
  "MT-26.webp",
  "MT-27.webp",
  "MT-28.webp",
  "MT-29.webp",
  "MT-30.webp",
];

const galleryImages = galleryImageFiles.map((fileName, index) => ({
  src: `/${fileName}`,
  alt: `Max T Detailing gallery image ${index + 1}`,
}));

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="bg-[#0D0D0D] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Gallery</p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">Our Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#888888] sm:text-base">
            A classic carousel view of recent plate builds and finishes.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-2xl"
              style={{ backgroundImage: `url(${galleryImages[activeIndex].src})` }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden="true" />
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              loading="lazy"
              decoding="async"
              className="relative z-10 h-[280px] w-full object-contain sm:h-[420px] lg:h-[560px]"
            />

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition hover:border-[#E8196B] hover:bg-[#E8196B]"
              aria-label="Previous gallery image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition hover:border-[#E8196B] hover:bg-[#E8196B]"
              aria-label="Next gallery image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="border-t border-white/10 px-4 py-5 sm:px-6">
            <div className="mb-5 flex items-center justify-center gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-[#E8196B]" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Go to gallery image ${index + 1}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-xl border transition ${
                    index === activeIndex
                      ? "border-[#E8196B] ring-1 ring-[#E8196B]/40"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  aria-label={`Show gallery image ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square h-full w-full bg-[#0D0D0D] object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
