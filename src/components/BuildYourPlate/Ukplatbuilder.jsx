import { useEffect, useRef, useState } from "react";

const SIZE_OPTIONS = [
  { id: "standard", label: "4x2 inches", width: 520, height: 111, note: "Standard UK size" },
  { id: "compact", label: "3.5x1.77 inches", width: 445, height: 95, note: "Compact fitment option" },
];

const STYLE_OPTIONS = [
  { id: "standard", label: "Standard", note: "Classic flat design" },
  { id: "3d", label: "3D", note: "Embossed effect" },
  { id: "4d", label: "4D", note: "Ultra-gloss gel dome" },
];

const BORDER_OPTIONS = [
  { id: "black", label: "Black", color: "#111111" },
  { id: "gold", label: "Gold", color: "#d4af37" },
  { id: "silver", label: "Silver", color: "#b8bcc2" },
  { id: "none", label: "None", color: "transparent" },
];

const REFLECTIVE_OPTIONS = [
  { id: "standard", label: "Standard" },
  { id: "enhanced", label: "Enhanced" },
];

const INITIAL_CONFIG = {
  registration: "AB21XYZ",
  size: "standard",
  style: "standard",
  border: "black",
  includeBadge: true,
  badgeText: "UK",
  evStrip: false,
  reflective: "enhanced",
};

function sanitizeRegistration(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);
}

function formatRegistration(value) {
  if (!value) return "AB21 XYZ";
  if (value.length <= 4) return value;
  return `${value.slice(0, 4)} ${value.slice(4)}`;
}

function getSizeConfig(sizeId) {
  return SIZE_OPTIONS.find((option) => option.id === sizeId) || SIZE_OPTIONS[0];
}

function getBorderConfig(borderId) {
  return BORDER_OPTIONS.find((option) => option.id === borderId) || BORDER_OPTIONS[0];
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawBadge(ctx, plateHeight, badgeText) {
  const badgeX = 14;
  const badgeY = 10;
  const badgeWidth = 48;
  const badgeHeight = plateHeight - 20;

  ctx.fillStyle = "#1746a2";
  drawRoundedRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, 5);
  ctx.fill();

  ctx.fillStyle = "#ffd447";
  const centerX = badgeX + badgeWidth / 2;
  const centerY = badgeY + badgeHeight * 0.3;

  for (let i = 0; i < 12; i += 1) {
    const angle = (Math.PI * 2 * i) / 12;
    const x = centerX + Math.cos(angle) * 10;
    const y = centerY + Math.sin(angle) * 10;
    ctx.beginPath();
    ctx.arc(x, y, 1.4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 14px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText((badgeText || "UK").slice(0, 2).toUpperCase(), centerX, badgeY + badgeHeight - 16);
}

function renderPlate(canvas, config, isRear) {
  if (!canvas) return;

  const size = getSizeConfig(config.size);
  const border = getBorderConfig(config.border);
  const scale = 2;
  const displayWidth = 384;
  const displayHeight = Math.round((displayWidth / size.width) * size.height);

  canvas.width = size.width * scale;
  canvas.height = size.height * scale;
  canvas.style.width = `${displayWidth}px`;
  canvas.style.height = `${displayHeight}px`;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(scale, scale);

  const plateColor = isRear ? "#f7cf2d" : "#ffffff";
  const regText = formatRegistration(config.registration);
  const reflectiveGlow =
    config.reflective === "enhanced"
      ? isRear
        ? "rgba(255, 245, 185, 0.75)"
        : "rgba(255, 255, 255, 0.92)"
      : isRear
        ? "rgba(255, 243, 189, 0.4)"
        : "rgba(255, 255, 255, 0.55)";

  ctx.shadowColor = reflectiveGlow;
  ctx.shadowBlur = config.reflective === "enhanced" ? 18 : 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  drawRoundedRect(ctx, 0, 0, size.width, size.height, 10);
  ctx.fillStyle = plateColor;
  ctx.fill();

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;

  if (config.border !== "none") {
    drawRoundedRect(ctx, 2.5, 2.5, size.width - 5, size.height - 5, 9);
    ctx.strokeStyle = border.color;
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  if (config.evStrip) {
    ctx.fillStyle = "#27c24c";
    ctx.fillRect(size.width - 16, 5, 11, size.height - 10);
  }

  let textStart = 24;
  if (config.includeBadge) {
    drawBadge(ctx, size.height, config.badgeText);
    textStart = 74;
  }

  const textAreaWidth = size.width - textStart - (config.evStrip ? 30 : 20);
  const fontSize = size.height * 0.58;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `900 ${fontSize}px "Arial Black", Arial, sans-serif`;
  ctx.fillStyle = "#111111";

  if (config.style === "3d") {
    ctx.fillStyle = "#222222";
    ctx.fillText(regText, textStart + textAreaWidth / 2 + 2.5, size.height / 2 + 2.5);
    ctx.fillStyle = "#000000";
  }

  if (config.style === "4d") {
    ctx.fillStyle = "#1c1c1c";
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
  }

  ctx.fillText(regText, textStart + textAreaWidth / 2, size.height / 2);
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.font = "8px Arial";
  ctx.fillStyle = "#555555";
  ctx.textAlign = "center";
  ctx.fillText("UK PLATE LAB | BS AU 145e", size.width / 2, size.height - 9);
}

function OptionButton({ active, onClick, children, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-4 py-3 text-sm font-medium transition ${
        active
          ? "border-[#E8196B] bg-[#E8196B] text-white"
          : "border-white/10 bg-[#111111] text-zinc-200 hover:border-[#E8196B]/60"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function PreviewCard({ title, subtitle, canvasRef }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
      <div className="flex min-h-72 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-[#1F1F1F] via-[#101010] to-black p-6">
        <div className="max-w-full overflow-x-auto">
          <canvas ref={canvasRef} className="mx-auto h-auto max-w-full" />
        </div>
      </div>
      <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
    </div>
  );
}

export default function UKPlateBuilder() {
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const frontCanvasRef = useRef(null);
  const rearCanvasRef = useRef(null);

  useEffect(() => {
    renderPlate(frontCanvasRef.current, config, false);
    renderPlate(rearCanvasRef.current, config, true);
  }, [config]);

  const updateConfig = (key, value) => {
    setConfig((current) => ({ ...current, [key]: value }));
  };

  const downloadCanvas = (canvas, filename) => {
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = filename;
    link.click();
  };

  const downloadBoth = () => {
    const size = getSizeConfig(config.size);
    const merged = document.createElement("canvas");
    const gap = 48;
    const padding = 30;
    const width = size.width + padding * 2;
    const height = size.height * 2 + gap + padding * 2;

    merged.width = width * 2;
    merged.height = height * 2;

    const ctx = merged.getContext("2d");
    ctx.scale(2, 2);
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px Arial";
    ctx.fillText(`Plate Preview - ${formatRegistration(config.registration)}`, 30, 22);

    if (frontCanvasRef.current) {
      ctx.drawImage(frontCanvasRef.current, padding, 42, size.width, size.height);
    }

    if (rearCanvasRef.current) {
      ctx.drawImage(rearCanvasRef.current, padding, 42 + size.height + gap, size.width, size.height);
    }

    downloadCanvas(merged, `${sanitizeRegistration(config.registration) || "plate"}_preview.png`);
  };

  const selectedSize = getSizeConfig(config.size);
  const selectedStyle = STYLE_OPTIONS.find((option) => option.id === config.style);

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 pb-20 pt-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Build Your <span className="text-[#E8196B]">Perfect Plate</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Customize your number plate with our interactive designer. See your design update in real time and
            download the finished preview when you are happy with it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="rounded-md border border-white/10 bg-[#1F1F1F] p-8">
              <h2 className="mb-8 text-2xl font-bold text-white">Customize Your Plate</h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-bold text-white">
                    Registration Number <span className="text-[#E8196B]">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={7}
                    value={config.registration}
                    onChange={(event) => updateConfig("registration", sanitizeRegistration(event.target.value))}
                    placeholder="AB21XYZ"
                    className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-center font-mono text-lg font-bold uppercase text-white placeholder:text-zinc-500 focus:border-[#E8196B] focus:outline-none focus:ring-2 focus:ring-[#E8196B]/30"
                  />
                  <p className="mt-2 text-xs text-zinc-500">Enter your 7-character registration number</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-white">
                    Plate Size <span className="text-[#E8196B]">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {SIZE_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.id}
                        active={config.size === option.id}
                        onClick={() => updateConfig("size", option.id)}
                      >
                        {option.label}
                      </OptionButton>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">{selectedSize.note}</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-white">
                    Plate Style <span className="text-[#E8196B]">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {STYLE_OPTIONS.map((option) => (
                      <div key={option.id}>
                        <OptionButton
                          active={config.style === option.id}
                          onClick={() => updateConfig("style", option.id)}
                          className="w-full capitalize"
                        >
                          {option.label}
                        </OptionButton>
                        <p className="mt-1 text-center text-xs text-zinc-500">{option.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-white">Border Color</label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {BORDER_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.id}
                        active={config.border === option.id}
                        onClick={() => updateConfig("border", option.id)}
                        className="flex items-center justify-center gap-2 capitalize"
                      >
                        <span
                          className="h-4 w-4 rounded-full border border-current"
                          style={{ backgroundColor: option.color === "transparent" ? "#ffffff" : option.color }}
                        />
                        {option.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 flex items-center gap-3 text-sm font-bold text-white">
                    <input
                      type="checkbox"
                      checked={config.includeBadge}
                      onChange={(event) => updateConfig("includeBadge", event.target.checked)}
                      className="h-5 w-5 rounded accent-[#E8196B]"
                    />
                    Include UK Badge
                  </label>
                  <input
                    type="text"
                    maxLength={2}
                    value={config.badgeText}
                    onChange={(event) => updateConfig("badgeText", event.target.value.toUpperCase().slice(0, 2))}
                    disabled={!config.includeBadge}
                    placeholder="UK"
                    className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-center font-bold uppercase text-white placeholder:text-zinc-500 focus:border-[#E8196B] focus:outline-none focus:ring-2 focus:ring-[#E8196B]/30 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="mt-2 text-xs text-zinc-500">Blue badge with white text for road-legal styling</p>
                </div>

                <div>
                  <label className="mb-3 flex items-center gap-3 text-sm font-bold text-white">
                    <input
                      type="checkbox"
                      checked={config.evStrip}
                      onChange={(event) => updateConfig("evStrip", event.target.checked)}
                      className="h-5 w-5 rounded accent-[#E8196B]"
                    />
                    Add EV Green Strip
                  </label>
                  <p className="text-xs text-zinc-500">For electric vehicles - adds a green bar on the right edge</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-white">Reflective Level</label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {REFLECTIVE_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.id}
                        active={config.reflective === option.id}
                        onClick={() => updateConfig("reflective", option.id)}
                        className="capitalize"
                      >
                        {option.label}
                      </OptionButton>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">Enhanced reflectivity gives the preview a brighter finish</p>
                </div>

                <div className="rounded-md border border-[#E8196B]/30 bg-[#E8196B]/10 p-4">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    <span className="font-bold text-white">DVLA Compliant:</span> Designed with UK-style layout and
                    compliant footer details.
                    <br />
                    <span className="font-bold text-white">Road Legal Look:</span> Front and rear plate previews update
                    instantly.
                    <br />
                    <span className="font-bold text-white">Ceramic Coated Finish:</span> Styled to reflect a premium,
                    weather-resistant product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-6 lg:sticky lg:top-24">
              <PreviewCard title="Front View" subtitle="White front plate preview" canvasRef={frontCanvasRef} />
              <PreviewCard title="Rear View" subtitle="Yellow rear plate preview" canvasRef={rearCanvasRef} />

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    downloadCanvas(
                      frontCanvasRef.current,
                      `${sanitizeRegistration(config.registration) || "plate"}_front.png`,
                    )
                  }
                  className="rounded-md bg-white px-5 py-4 font-bold text-black transition hover:bg-zinc-200"
                >
                  Download Front
                </button>

                <button
                  type="button"
                  onClick={() =>
                    downloadCanvas(
                      rearCanvasRef.current,
                      `${sanitizeRegistration(config.registration) || "plate"}_rear.png`,
                    )
                  }
                  className="rounded-md bg-[#E8196B] px-5 py-4 font-bold text-white transition hover:bg-[#FF5FA0]"
                >
                  Download Rear
                </button>
              </div>

              <button
                type="button"
                onClick={downloadBoth}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-[#E8196B] to-[#FF5FA0] px-5 py-4 font-bold text-white transition hover:opacity-90"
              >
                Download Plate Preview
              </button>

              <div className="rounded-md border border-white/10 bg-[#1F1F1F] p-6">
                <h3 className="mb-3 text-lg font-bold text-white">Preview Details</h3>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>
                    <span className="font-medium text-white">Registration:</span> {formatRegistration(config.registration)}
                  </p>
                  <p>
                    <span className="font-medium text-white">Format:</span> {selectedSize.label}, {selectedStyle?.label}
                  </p>
                  <p>
                    <span className="font-medium text-white">Finish:</span> Ceramic coated, {config.reflective} reflective
                  </p>
                  <p>
                    <span className="font-medium text-white">Extras:</span>{" "}
                    {config.includeBadge ? `${config.badgeText || "UK"} badge` : "No badge"}
                    {config.evStrip ? ", EV strip" : ""}
                  </p>
                </div>
              </div>

              <div className="rounded-md border border-white/10 bg-[#1F1F1F] p-6">
                <h3 className="mb-3 text-lg font-bold text-white">What You Get</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="text-[#E8196B]">✓</span> DVLA Approved Style
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E8196B]">✓</span> High Quality Print Preview
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E8196B]">✓</span> UV Resistant Premium Finish
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E8196B]">✓</span> Fast Turnaround Ready Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E8196B]">✓</span> Downloadable Front and Rear Outputs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
