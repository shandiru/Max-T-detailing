

const testimonials = [
  {
    name: "Daniel Webster",
    text: "You couldn't get better service. The plates are proper quality, the communication throughout was amazing! Will be using these again and would fully recommend to anyone.",
  },
  {
    name: "Katie Wood",
    text: "Came across the website by chance also found out its local great service highly recommend 5 🌟 They look great on my car thank you! Quick turn around!",
  },
  {
    name: "Mark",
    text: "Purchased these a few days ago, reliable and fast service! Superb quality! They give my X3 that extra wow factor! 100% recommend",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-24 text-white" id="reviews">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8196B]">Social proof</p>
          <h2 className="mb-4 text-4xl font-bold uppercase md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-3xl text-lg text-[#888888]">
            Trusted by drivers for reliable service, sharp finish quality, and clear communication.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div data-aos="fade-right" className="overflow-hidden rounded-md border border-white/10 shadow-lg">
            <img src="/after.png" alt="After service" className="h-[260px] w-full object-cover" />
          </div>
          <div data-aos="fade-left" data-aos-delay="120" className="overflow-hidden rounded-md border border-white/10 shadow-lg">
            <img src="/before.png" alt="Before service" className="h-[260px] w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={100 + index * 60}
              className="flex flex-col rounded-md border border-white/10 bg-[#1F1F1F] p-6 shadow-lg transition-transform hover:-translate-y-2 hover:border-[#E8196B]/40"
            >
              <div className="mb-3 flex text-[#E8196B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <p className="mb-6 flex-grow leading-relaxed text-[#888888]">{item.text}</p>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em]">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
