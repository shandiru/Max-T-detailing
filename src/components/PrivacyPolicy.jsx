import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you contact us, place an order, or upload documents, we may collect your name, email address, phone number, delivery details, registration details, and the content of your enquiry.",
      "We may also collect limited technical data such as IP address, browser type, and cookie preferences when you use the website.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, process orders, verify road-legal plate requirements, manage fulfilment, and provide customer support.",
      "We may also use limited data to improve website performance, maintain records, and meet our legal obligations.",
    ],
  },
  {
    title: "3. Lawful Basis For Processing",
    body: [
      "We process data where necessary for a contract with you, where we have your consent, where we have a legitimate interest in operating our business, or where we must comply with a legal obligation.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    body: [
      "We do not sell your personal information. We may share data with trusted service providers involved in hosting, payments, fulfilment, or professional support where necessary to run the business.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We keep personal data only for as long as needed to fulfil the purpose it was collected for, including customer support, legal compliance, accounting, and fraud prevention.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "Under UK GDPR you may request access to your data, correction of inaccurate data, deletion where applicable, restriction of processing, objection to processing, or withdrawal of consent where consent applies.",
    ],
  },
  {
    title: "7. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how your information is handled, contact UK Plate Lab using the details below.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <div className="border-b border-brand-gold/10 px-6 pb-16 pt-32 text-center md:px-16">
        <span className="font-label mb-6 block text-[11px] tracking-[0.4em] text-brand-gold uppercase">Legal</span>
        <h1 className="font-display mb-4 text-4xl text-brand-cream md:text-6xl">
          Privacy <span className="text-brand-gold">Policy</span>
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
