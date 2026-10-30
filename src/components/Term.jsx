
const sections = [
  {
    title: "1. Use Of Our Website",
    body: [
      "The content on this website is provided for general information about UK Plate Lab, our products, and our ordering process. You must not use this website for unlawful purposes or in a way that harms the website or our reputation.",
    ],
  },
  {
    title: "2. Accuracy Of Information",
    body: [
      "We make reasonable efforts to keep information current, but we do not guarantee that every page, image, or product detail is complete or error-free at all times. If you need confirmation, contact us directly before placing an order.",
    ],
  },
  {
    title: "3. Intellectual Property",
    body: [
      "All content on this website, including text, graphics, images, branding, and layouts, is owned by or licensed to UK Plate Lab unless stated otherwise. You may not reproduce or distribute website content without prior written consent.",
    ],
  },
  {
    title: "4. Orders And Compliance",
    body: [
      "Customers are responsible for ensuring any road-legal order is supported by valid documents and entitlement information where required. We reserve the right to refuse or delay fulfilment where compliance requirements are not met.",
    ],
  },
  {
    title: "5. External Links",
    body: [
      "This site may include links to third-party services or social platforms for convenience. We are not responsible for the content or privacy practices of those sites.",
    ],
  },
  {
    title: "6. Liability",
    body: [
      "We are not liable for indirect or consequential loss arising from use of the website, except where liability cannot be excluded by law. Nothing in these terms limits liability for fraud, death, or personal injury caused by negligence.",
    ],
  },
  {
    title: "7. Privacy",
    body: [
      "Our use of personal data is described in the Privacy Policy, which forms part of these terms.",
    ],
  },
  {
    title: "8. Changes To These Terms",
    body: [
      "We may update these terms from time to time. Continued use of the website after changes are published means you accept the updated terms.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms are governed by the laws of England and Wales. Any dispute relating to the website or these terms is subject to the jurisdiction of the courts of England and Wales.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <div className="border-b border-brand-gold/10 px-6 pb-16 pt-32 text-center md:px-16">
        <span className="font-label mb-6 block text-[11px] tracking-[0.4em] text-brand-gold uppercase">Legal</span>
        <h1 className="font-display mb-4 text-4xl text-brand-cream md:text-6xl">
          Terms Of <span className="text-brand-gold">Use</span>
        </h1>
        <p className="font-body text-sm tracking-wide text-muted-gold italic">Last updated: 03/05/2026</p>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:px-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-label mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-brand-gold">
              <span className="inline-block h-[1px] w-6 bg-brand-gold" /> {section.title}
            </h2>
            <div className="space-y-4 border-l border-brand-gold/20 pl-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="font-body text-base leading-relaxed text-brand-cream/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-soft-black space-y-3 border border-brand-gold/15 p-8">
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-brand-gold">UK Plate Lab</p>
          <p className="font-body text-brand-cream/80">Leicestershire, United Kingdom</p>
          <p className="font-body text-brand-cream/80">
            Email:{" "}
            <a
              href="mailto:ukplatelab@gmail.com"
              className="text-brand-gold underline underline-offset-4 transition-colors hover:text-light-gold"
            >
              ukplatelab@gmail.com
            </a>
          </p>
          <p className="font-body text-brand-cream/80">Phone: +44 7580 392806</p>
        </div>
      </div>
    </div>
  );
}
