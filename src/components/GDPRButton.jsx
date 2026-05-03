import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setShowIcon(true);
    } else {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (isAccepted) => {
    localStorage.setItem("gdprConsent", isAccepted ? "true" : "false");
    setVisible(false);
    setShowIcon(true);
  };

  return (
    <>
      {visible && (
        <div
          className="fixed bottom-4 left-4 right-4 z-[9999] max-w-full border border-white/10 bg-[#111111] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:bottom-8 md:left-auto md:right-8 md:w-[380px]"
          style={{ animation: "slideUp 0.6s ease-out forwards" }}
        >
          <h4 className="font-label mb-4 text-xs text-[#E8196B]">Cookie Preferences</h4>
          <p className="font-body mb-6 text-[15px] leading-relaxed text-white/80">
            We use cookies to improve your browsing experience and keep key site features running. By clicking "Accept
            All", you agree to our{" "}
            <a href="/privacy" className="text-[#E8196B] underline underline-offset-4 hover:text-[#FF5FA0]">
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleAction(true)}
              className="rounded-md bg-[#E8196B] py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#FF5FA0]"
            >
              Accept All
            </button>
            <button
              onClick={() => handleAction(false)}
              className="rounded-md border border-white/10 py-2.5 text-[10px] uppercase tracking-[0.15em] text-white/80 transition-all hover:border-[#E8196B] hover:bg-[#E8196B]/10"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>
      )}

      {showIcon && !visible && (
        <button
          onClick={() => {
            setVisible(true);
            setShowIcon(false);
          }}
          className="group fixed bottom-4 right-4 z-[9998] flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-[#090909] shadow-xl transition-all duration-500 hover:border-[#E8196B] md:bottom-8 md:right-8"
        >
          <svg
            className="h-6 w-6 text-[#E8196B] transition-transform duration-500 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <circle cx="9" cy="16" r="1" fill="currentColor" />
          </svg>
        </button>
      )}
    </>
  );
}
