import { useState, useRef, useCallback } from "react";

const PALETTE = [
  { hex: "#FFB7D5", name: "Hồng nhạt" },
  { hex: "#FF69B4", name: "Hồng đậm" },
  { hex: "#DDB7FF", name: "Tím nhạt" },
  { hex: "#A855F7", name: "Tím" },
  { hex: "#B7FFE4", name: "Xanh bạc hà" },
  { hex: "#34D399", name: "Xanh ngọc" },
  { hex: "#FFD9A8", name: "Cam đào" },
  { hex: "#FB923C", name: "Cam" },
  { hex: "#FEF08A", name: "Vàng nhạt" },
  { hex: "#FACC15", name: "Vàng" },
  { hex: "#BAE6FD", name: "Xanh da trời" },
  { hex: "#38BDF8", name: "Xanh biển" },
  { hex: "#FFFFFF", name: "Trắng" },
  { hex: "#CBD5E1", name: "Xám" },
  { hex: "#FCA5A5", name: "Đỏ nhạt" },
  { hex: "#86EFAC", name: "Xanh lá" },
];

const CHARS = [
  { id: "bunny", label: "🐰", name: "Thỏ" },
  { id: "cat", label: "🐱", name: "Mèo" },
  { id: "fairy", label: "⭐", name: "Tiên" },
];

const COLOR_NAMES = {
  "#FFB7D5": "hồng nhạt", "#FF69B4": "hồng đậm", "#DDB7FF": "tím nhạt",
  "#A855F7": "tím", "#B7FFE4": "xanh bạc hà", "#34D399": "xanh ngọc",
  "#FFD9A8": "cam đào", "#FB923C": "cam", "#FEF08A": "vàng nhạt",
  "#FACC15": "vàng", "#BAE6FD": "xanh da trời", "#38BDF8": "xanh biển",
  "#FFFFFF": "trắng", "#CBD5E1": "xám", "#FCA5A5": "đỏ nhạt", "#86EFAC": "xanh lá",
};

// ── BUNNY ────────────────────────────────────────────────────────────────────
function BunnySVG({ colors, onFill }) {
  const c = (id, def) => colors[id] || def;
  const f = (id) => () => onFill(id);

  return (
    <svg viewBox="0 0 300 380" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer", display: "block" }}>
      {/* Sky background */}
      <rect x="0" y="0" width="300" height="380" fill={c("bg", "#E8F5FD")} onClick={f("bg")} />
      {/* Clouds */}
      <ellipse cx="60" cy="55" rx="35" ry="18" fill={c("cloud1", "#FFFFFF")} onClick={f("cloud1")} />
      <ellipse cx="85" cy="48" rx="25" ry="16" fill={c("cloud1", "#FFFFFF")} onClick={f("cloud1")} />
      <ellipse cx="220" cy="65" rx="30" ry="16" fill={c("cloud2", "#FFFFFF")} onClick={f("cloud2")} />
      <ellipse cx="244" cy="58" rx="22" ry="14" fill={c("cloud2", "#FFFFFF")} onClick={f("cloud2")} />
      {/* Ground */}
      <ellipse cx="150" cy="368" rx="145" ry="22" fill={c("ground", "#A8E6CF")} onClick={f("ground")} />
      {/* Flowers */}
      <circle cx="38" cy="350" r="9" fill={c("fl1", "#FFB7D5")} onClick={f("fl1")} />
      <circle cx="56" cy="357" r="7" fill={c("fl2", "#FEF08A")} onClick={f("fl2")} />
      <circle cx="252" cy="348" r="9" fill={c("fl3", "#DDB7FF")} onClick={f("fl3")} />
      <circle cx="270" cy="356" r="7" fill={c("fl4", "#FB923C")} onClick={f("fl4")} />

      {/* Left ear outer */}
      <ellipse cx="108" cy="76" rx="22" ry="52" transform="rotate(-12 108 76)"
        fill={c("ear-l", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("ear-l")} />
      {/* Right ear outer */}
      <ellipse cx="192" cy="76" rx="22" ry="52" transform="rotate(12 192 76)"
        fill={c("ear-r", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("ear-r")} />
      {/* Left ear inner */}
      <ellipse cx="108" cy="78" rx="11" ry="36" transform="rotate(-12 108 78)"
        fill={c("ear-li", "#FFB7D5")} onClick={f("ear-li")} />
      {/* Right ear inner */}
      <ellipse cx="192" cy="78" rx="11" ry="36" transform="rotate(12 192 78)"
        fill={c("ear-ri", "#FFB7D5")} onClick={f("ear-ri")} />

      {/* Body */}
      <ellipse cx="150" cy="258" rx="72" ry="78"
        fill={c("body", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("body")} />
      {/* Tummy */}
      <ellipse cx="150" cy="268" rx="38" ry="50"
        fill={c("tummy", "#FFF0F5")} onClick={f("tummy")} />
      {/* Tail */}
      <ellipse cx="218" cy="255" rx="20" ry="18"
        fill={c("tail", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("tail")} />
      {/* Left paw */}
      <ellipse cx="88" cy="308" rx="26" ry="17"
        fill={c("paw-l", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("paw-l")} />
      {/* Right paw */}
      <ellipse cx="212" cy="308" rx="26" ry="17"
        fill={c("paw-r", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("paw-r")} />

      {/* Head */}
      <circle cx="150" cy="152" r="68"
        fill={c("head", "#FFFFFF")} stroke="#F0A0C0" strokeWidth="2" onClick={f("head")} />
      {/* Cheeks */}
      <circle cx="108" cy="163" r="17" fill={c("ck-l", "#FFB7D5")} opacity="0.7" onClick={f("ck-l")} />
      <circle cx="192" cy="163" r="17" fill={c("ck-r", "#FFB7D5")} opacity="0.7" onClick={f("ck-r")} />

      {/* Eyes */}
      <ellipse cx="132" cy="143" rx="8" ry="9" fill="#333" />
      <ellipse cx="168" cy="143" rx="8" ry="9" fill="#333" />
      <circle cx="134" cy="140" r="3" fill="white" />
      <circle cx="170" cy="140" r="3" fill="white" />
      {/* Nose */}
      <ellipse cx="150" cy="159" rx="5" ry="4" fill="#FF9FC8" />
      {/* Mouth */}
      <path d="M143 164 Q150 171 157 164" fill="none" stroke="#FF9FC8" strokeWidth="2" strokeLinecap="round" />

      {/* Bow */}
      <g onClick={f("bow")} style={{ cursor: "pointer" }}>
        <polygon points="128,208 147,218 128,228" fill={c("bow", "#FF69B4")} />
        <polygon points="172,208 153,218 172,228" fill={c("bow", "#FF69B4")} />
      </g>
      <circle cx="150" cy="218" r="8" fill={c("bow-c", "#FFB7D5")} onClick={f("bow-c")} />
    </svg>
  );
}

// ── CAT ──────────────────────────────────────────────────────────────────────
function CatSVG({ colors, onFill }) {
  const c = (id, def) => colors[id] || def;
  const f = (id) => () => onFill(id);

  return (
    <svg viewBox="0 0 300 380" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer", display: "block" }}>
      {/* Background */}
      <rect x="0" y="0" width="300" height="380" fill={c("bg", "#FFF5E6")} onClick={f("bg")} />
      {/* Stars */}
      <text x="22" y="55" fontSize="22" style={{ userSelect: "none" }} onClick={f("st1")}>⭐</text>
      <text x="250" y="48" fontSize="18" style={{ userSelect: "none" }} onClick={f("st2")}>🌙</text>
      <text x="35" y="340" fontSize="16" style={{ userSelect: "none" }} onClick={f("st3")}>✨</text>
      {/* Ground */}
      <ellipse cx="150" cy="368" rx="145" ry="22" fill={c("ground", "#FED7AA")} onClick={f("ground")} />
      {/* Cushion */}
      <ellipse cx="150" cy="355" rx="90" ry="20" fill={c("cushion", "#FB923C")} onClick={f("cushion")} />

      {/* Tail */}
      <path d="M210,295 C265,278 278,208 243,183 C238,180 231,183 232,190 C258,210 244,272 208,310 Z"
        fill={c("tail", "#FDB97D")} onClick={f("tail")} />

      {/* Body */}
      <ellipse cx="150" cy="258" rx="72" ry="76"
        fill={c("body", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("body")} />
      {/* Tummy */}
      <ellipse cx="150" cy="268" rx="40" ry="50"
        fill={c("tummy", "#FFF0E0")} onClick={f("tummy")} />
      {/* Left paw */}
      <ellipse cx="88" cy="310" rx="26" ry="17"
        fill={c("paw-l", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("paw-l")} />
      {/* Right paw */}
      <ellipse cx="212" cy="310" rx="26" ry="17"
        fill={c("paw-r", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("paw-r")} />

      {/* Left ear outer */}
      <polygon points="90,122 110,62 138,120"
        fill={c("ear-l", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("ear-l")} />
      {/* Right ear outer */}
      <polygon points="162,120 190,62 210,122"
        fill={c("ear-r", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("ear-r")} />
      {/* Left ear inner */}
      <polygon points="99,117 111,76 130,116"
        fill={c("ear-li", "#FFB7D5")} onClick={f("ear-li")} />
      {/* Right ear inner */}
      <polygon points="170,116 189,76 201,117"
        fill={c("ear-ri", "#FFB7D5")} onClick={f("ear-ri")} />

      {/* Head */}
      <circle cx="150" cy="152" r="68"
        fill={c("head", "#FDB97D")} stroke="#F97316" strokeWidth="1.5" onClick={f("head")} />
      {/* Cheeks */}
      <circle cx="108" cy="165" r="17" fill={c("ck-l", "#FFB7D5")} opacity="0.7" onClick={f("ck-l")} />
      <circle cx="192" cy="165" r="17" fill={c("ck-r", "#FFB7D5")} opacity="0.7" onClick={f("ck-r")} />

      {/* Eyes */}
      <ellipse cx="130" cy="148" rx="9" ry="10" fill="#333" />
      <ellipse cx="170" cy="148" rx="9" ry="10" fill="#333" />
      <circle cx="132" cy="145" r="3.5" fill="white" />
      <circle cx="172" cy="145" r="3.5" fill="white" />
      {/* Nose */}
      <polygon points="150,162 145,169 155,169" fill="#FF9FC8" />
      {/* Whiskers */}
      <line x1="92" y1="162" x2="136" y2="168" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="92" y1="172" x2="136" y2="174" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="164" y1="168" x2="208" y2="162" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="164" y1="174" x2="208" y2="172" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M144 171 Q150 178 156 171" fill="none" stroke="#FF9FC8" strokeWidth="2" strokeLinecap="round" />

      {/* Bow */}
      <g onClick={f("bow")} style={{ cursor: "pointer" }}>
        <polygon points="128,208 147,218 128,228" fill={c("bow", "#FF69B4")} />
        <polygon points="172,208 153,218 172,228" fill={c("bow", "#FF69B4")} />
      </g>
      <circle cx="150" cy="218" r="8" fill={c("bow-c", "#FEF08A")} onClick={f("bow-c")} />

      {/* Collar */}
      <rect x="118" y="218" width="64" height="14" rx="7"
        fill={c("collar", "#38BDF8")} onClick={f("collar")} />
      <circle cx="150" cy="226" r="5" fill={c("bell", "#FACC15")} onClick={f("bell")} />
    </svg>
  );
}

// ── FAIRY ─────────────────────────────────────────────────────────────────────
function FairySVG({ colors, onFill }) {
  const c = (id, def) => colors[id] || def;
  const f = (id) => () => onFill(id);

  return (
    <svg viewBox="0 0 300 380" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer", display: "block" }}>
      {/* Background */}
      <rect x="0" y="0" width="300" height="380" fill={c("bg", "#EDE9FE")} onClick={f("bg")} />
      {/* BG Stars */}
      <polygon points="35,50 38,61 50,61 40,68 44,79 35,72 26,79 30,68 20,61 32,61"
        fill={c("st1", "#FACC15")} opacity="0.7" onClick={f("st1")} />
      <polygon points="265,38 268,48 278,48 270,55 273,65 265,59 257,65 260,55 252,48 262,48"
        fill={c("st2", "#FFB7D5")} opacity="0.7" onClick={f("st2")} />
      <polygon points="50,308 52,316 61,316 54,322 56,330 50,325 44,330 46,322 39,316 48,316"
        fill={c("st3", "#DDB7FF")} opacity="0.7" onClick={f("st3")} />
      <polygon points="255,315 257,323 266,323 259,329 261,337 255,332 249,337 251,329 244,323 253,323"
        fill={c("st4", "#B7FFE4")} opacity="0.7" onClick={f("st4")} />
      {/* Ground */}
      <ellipse cx="150" cy="368" rx="145" ry="22" fill={c("ground", "#C4B5FD")} onClick={f("ground")} />

      {/* Wings */}
      <path d="M150,188 C128,172 68,158 58,194 C53,215 78,238 122,220 C137,214 148,205 150,196 Z"
        fill={c("wing-l", "#DDB7FF")} opacity="0.85" stroke="#A855F7" strokeWidth="1.5" onClick={f("wing-l")} />
      <path d="M150,188 C172,172 232,158 242,194 C247,215 222,238 178,220 C163,214 152,205 150,196 Z"
        fill={c("wing-r", "#BAE6FD")} opacity="0.85" stroke="#38BDF8" strokeWidth="1.5" onClick={f("wing-r")} />

      {/* Dress skirt */}
      <path d="M108,242 C88,272 78,322 98,352 L202,352 C222,322 212,272 192,242 Z"
        fill={c("skirt", "#DDB7FF")} onClick={f("skirt")} />
      {/* Skirt trim */}
      <path d="M100,352 Q150,342 200,352" fill="none" stroke={c("trim", "#A855F7")} strokeWidth="4" strokeLinecap="round" onClick={f("trim")} />
      {/* Bodice */}
      <rect x="118" y="198" width="64" height="52" rx="10"
        fill={c("bodice", "#A855F7")} onClick={f("bodice")} />
      {/* Collar */}
      <ellipse cx="150" cy="204" rx="36" ry="13"
        fill={c("collar", "#FFB7D5")} onClick={f("collar")} />

      {/* Head */}
      <circle cx="150" cy="155" r="55"
        fill={c("head", "#FFD9A8")} stroke="#FB923C" strokeWidth="1.5" onClick={f("head")} />
      {/* Hair */}
      <path d="M96,142 C94,112 104,82 150,76 C196,82 206,112 204,142 C195,127 185,117 175,120 C165,102 135,102 125,120 C115,117 105,127 96,142 Z"
        fill={c("hair", "#FACC15")} onClick={f("hair")} />

      {/* Crown */}
      <path d="M118,103 L113,82 L134,93 L150,74 L166,93 L187,82 L182,103 Z"
        fill={c("crown", "#FACC15")} stroke="#FB923C" strokeWidth="1.5" onClick={f("crown")} />
      <circle cx="150" cy="82" r="5" fill={c("gem-m", "#FF69B4")} onClick={f("gem-m")} />
      <circle cx="127" cy="91" r="4" fill={c("gem-l", "#38BDF8")} onClick={f("gem-l")} />
      <circle cx="173" cy="91" r="4" fill={c("gem-r", "#86EFAC")} onClick={f("gem-r")} />

      {/* Cheeks */}
      <circle cx="116" cy="165" r="14" fill={c("ck-l", "#FFB7D5")} opacity="0.7" onClick={f("ck-l")} />
      <circle cx="184" cy="165" r="14" fill={c("ck-r", "#FFB7D5")} opacity="0.7" onClick={f("ck-r")} />

      {/* Eyes */}
      <ellipse cx="133" cy="156" rx="8" ry="9" fill="#333" />
      <ellipse cx="167" cy="156" rx="8" ry="9" fill="#333" />
      <circle cx="135" cy="153" r="3" fill="white" />
      <circle cx="169" cy="153" r="3" fill="white" />
      {/* Lashes */}
      <line x1="126" y1="150" x2="121" y2="145" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="133" y1="148" x2="132" y2="143" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="174" y1="150" x2="179" y2="145" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="167" y1="148" x2="168" y2="143" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nose & mouth */}
      <circle cx="150" cy="169" r="3" fill="#FB923C" opacity="0.6" />
      <path d="M143 174 Q150 181 157 174" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />

      {/* Wand */}
      <path d="M206,228 L211,222 L238,165 L233,171 Z"
        fill={c("wand", "#FACC15")} onClick={f("wand")} />
      {/* Wand star */}
      <polygon points="236,148 239,158 250,158 242,165 245,175 236,169 227,175 230,165 222,158 233,158"
        fill={c("wand-st", "#FFD700")} stroke="#FB923C" strokeWidth="1" onClick={f("wand-st")} />
      {/* Sparkles */}
      <circle cx="252" cy="145" r="4" fill="#FACC15" opacity="0.7" />
      <circle cx="258" cy="158" r="3" fill="#FFB7D5" opacity="0.7" />
      <circle cx="246" cy="170" r="2.5" fill="#DDB7FF" opacity="0.7" />
    </svg>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function NanaColors() {
  const [selectedColor, setSelectedColor] = useState("#FFB7D5");
  const [selectedChar, setSelectedChar] = useState("bunny");
  const [colorsByChar, setColorsByChar] = useState({ bunny: {}, cat: {}, fairy: {} });
  const envKey = typeof import.meta !== "undefined" ? (import.meta.env?.VITE_ANTHROPIC_API_KEY || "") : "";
  const [apiKey, setApiKey] = useState(envKey);
  const [showApiKey, setShowApiKey] = useState(!envKey);
  const [isLoading, setIsLoading] = useState(false);
  const [praise, setPraise] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);

  const regions = colorsByChar[selectedChar];

  const fillRegion = useCallback((regionId) => {
    setColorsByChar((prev) => ({
      ...prev,
      [selectedChar]: { ...prev[selectedChar], [regionId]: selectedColor },
    }));
  }, [selectedColor, selectedChar]);

  const clearCanvas = () => {
    setColorsByChar((prev) => ({ ...prev, [selectedChar]: {} }));
    setPraise(null);
    setShowCelebration(false);
    setError(null);
  };

  const captureSVGAsBase64 = () =>
    new Promise((resolve, reject) => {
      const container = canvasRef.current;
      if (!container) return reject("No container");
      const svgEl = container.querySelector("svg");
      if (!svgEl) return reject("No SVG");

      const svgData = new XMLSerializer().serializeToString(svgEl);
      const encoded = btoa(unescape(encodeURIComponent(svgData)));
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 380;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 300, 380);
        ctx.drawImage(img, 0, 0, 300, 380);
        resolve(canvas.toDataURL("image/png").split(",")[1]);
      };
      img.onerror = () => reject("Image load failed");
      img.src = `data:image/svg+xml;base64,${encoded}`;
    });

  const getColorsSummary = () => {
    const used = [...new Set(Object.values(regions))];
    return used.map((h) => COLOR_NAMES[h] || h).join(", ") || "nhiều màu";
  };

  const handleDone = async () => {
    if (!apiKey) {
      setShowApiKey(true);
      setError("Vui lòng nhập API Key để nhận lời khen từ Nana AI! 🌟");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const base64 = await captureSVGAsBase64();
      const colorsSummary = getColorsSummary();
      const charNames = { bunny: "thỏ", cat: "mèo", fairy: "tiên" };
      const charName = charNames[selectedChar];

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-calls": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 180,
          system: `Bạn là người bạn vui vẻ, dễ thương đang khen bé gái 6 tuổi tên Nana vừa tô màu xong bức tranh ${charName}. Khen 2-3 câu ngắn bằng tiếng Việt, thật vui vẻ, đề cập màu sắc Nana dùng. Dùng emoji dễ thương.`,
          messages: [
            {
              role: "user",
              content: [
                { type: "image", source: { type: "base64", media_type: "image/png", data: base64 } },
                { type: "text", text: `Nana vừa tô xong bức tranh ${charName}! Nana dùng màu: ${colorsSummary}. Khen Nana đi!` },
              ],
            },
          ],
        }),
      });

      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.error?.message || `Lỗi ${res.status}`);
      }
      const data = await res.json();
      setPraise(data.content[0].text);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    } catch (err) {
      setError("Ôi có lỗi rồi: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const CharSVG = { bunny: BunnySVG, cat: CatSVG, fairy: FairySVG }[selectedChar];

  return (
    <>
      <style>{`
        @keyframes fall {
          from { transform: translateY(0) rotate(0deg); opacity: 1; }
          to   { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes bounceIn {
          0%   { transform: scale(0) rotate(-6deg); opacity: 0; }
          60%  { transform: scale(1.12) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .praise-box { animation: bounceIn 0.5s ease-out both; }
        .float { animation: floatY 2.5s ease-in-out infinite; }
        .color-btn { transition: transform 0.12s; }
        .color-btn:active { transform: scale(0.88) !important; }
        .char-btn { transition: all 0.15s; }
        .char-btn:active { transform: scale(0.93); }
        .done-btn { transition: all 0.15s; }
        .done-btn:active { transform: scale(0.96); }
      `}</style>

      {/* Confetti */}
      {showCelebration && Array.from({ length: 55 }, (_, i) => (
        <div key={i} style={{
          position: "fixed",
          left: `${(i * 7.13) % 100}%`,
          top: "-20px",
          width: `${6 + (i % 5) * 2}px`,
          height: `${6 + (i % 5) * 2}px`,
          backgroundColor: PALETTE[i % PALETTE.length].hex,
          borderRadius: i % 3 === 0 ? "50%" : "2px",
          animation: `fall ${1.4 + (i * 0.04) % 1.1}s ${(i * 0.065) % 2}s ease-in both`,
          zIndex: 200,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fce4ec 0%, #f3e5f5 40%, #e3f2fd 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "24px",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        {/* Header */}
        <div style={{ width: "100%", maxWidth: 380, padding: "16px 16px 0" }}>
          <h1 className="float" style={{ textAlign: "center", fontSize: 22, fontWeight: 800, color: "#E91E96", margin: "0 0 4px" }}>
            🎨 Tô Màu Cùng Nana! 🌟
          </h1>
          <p style={{ textAlign: "center", color: "#9C27B0", fontSize: 13, margin: "0 0 12px" }}>
            Chọn màu rồi chạm vào tranh để tô nhé! 🖌️
          </p>

          {/* Character selector */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {CHARS.map((ch) => (
              <button
                key={ch.id}
                className="char-btn"
                onClick={() => { setSelectedChar(ch.id); setPraise(null); setError(null); }}
                style={{
                  flex: 1, padding: "8px 4px", borderRadius: 18,
                  border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13,
                  background: selectedChar === ch.id
                    ? "linear-gradient(135deg, #F06292, #BA68C8)"
                    : "#fff",
                  color: selectedChar === ch.id ? "#fff" : "#E91E96",
                  boxShadow: selectedChar === ch.id ? "0 4px 14px #E91E9660" : "0 2px 8px #0001",
                  transform: selectedChar === ch.id ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div style={{ fontSize: 22 }}>{ch.label}</div>
                <div>{ch.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* SVG Canvas */}
        <div style={{ width: "100%", maxWidth: 340, padding: "0 16px", marginBottom: 12 }}>
          <div ref={canvasRef} style={{
            background: "#fff", borderRadius: 24,
            boxShadow: "0 6px 24px #BA68C830",
            overflow: "hidden", lineHeight: 0,
          }}>
            <CharSVG colors={regions} onFill={fillRegion} />
          </div>
        </div>

        {/* Color Palette */}
        <div style={{ width: "100%", maxWidth: 340, padding: "0 16px", marginBottom: 10 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 12, boxShadow: "0 2px 12px #0001" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8 }}>
              {PALETTE.map(({ hex, name }) => (
                <button
                  key={hex}
                  className="color-btn"
                  onClick={() => setSelectedColor(hex)}
                  title={name}
                  style={{
                    aspectRatio: "1", borderRadius: "50%", border: "none", cursor: "pointer",
                    backgroundColor: hex,
                    outline: selectedColor === hex ? "3px solid #7C3AED" : "2px solid #E5E7EB",
                    outlineOffset: selectedColor === hex ? "2px" : "0",
                    transform: selectedColor === hex ? "scale(1.2)" : "scale(1)",
                    boxShadow: hex === "#FFFFFF" ? "inset 0 0 0 1px #ddd" : "none",
                    transition: "transform 0.12s, outline 0.12s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected color indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: selectedColor, border: "2px solid #D1D5DB" }} />
          <span style={{ fontSize: 13, color: "#7C3AED", fontWeight: 600 }}>Màu đang chọn</span>
        </div>

        {/* Action Buttons */}
        <div style={{ width: "100%", maxWidth: 340, padding: "0 16px", display: "flex", gap: 10, marginBottom: 10 }}>
          <button
            onClick={clearCanvas}
            style={{
              flex: 1, padding: "12px 0", borderRadius: 18, border: "none",
              background: "#F3F4F6", color: "#6B7280", fontWeight: 700, fontSize: 14,
              cursor: "pointer", boxShadow: "0 2px 8px #0001",
            }}
          >
            🗑️ Tô lại
          </button>
          <button
            className="done-btn"
            onClick={handleDone}
            disabled={isLoading}
            style={{
              flex: 2, padding: "12px 0", borderRadius: 18, border: "none",
              background: isLoading ? "#ccc" : "linear-gradient(135deg, #F06292, #7C3AED)",
              color: "#fff", fontWeight: 800, fontSize: 15, cursor: isLoading ? "default" : "pointer",
              boxShadow: isLoading ? "none" : "0 4px 16px #F0629260",
            }}
          >
            {isLoading ? "⏳ Đang gửi..." : "✨ Nana xong rồi!"}
          </button>
        </div>

        {/* API Key */}
        <div style={{ width: "100%", maxWidth: 340, padding: "0 16px", marginBottom: 8 }}>
          <button
            onClick={() => setShowApiKey((v) => !v)}
            style={{ background: "none", border: "none", color: "#9CA3AF", fontSize: 12, textDecoration: "underline", cursor: "pointer", width: "100%", textAlign: "center" }}
          >
            {showApiKey ? "Ẩn cài đặt" : "⚙️ Cài đặt API Key"}
          </button>
          {showApiKey && (
            <div style={{ marginTop: 8, background: "#fff", borderRadius: 16, padding: 12, boxShadow: "0 2px 8px #0001" }}>
              <p style={{ fontSize: 12, color: "#6B7280", margin: "0 0 6px" }}>
                Nhập Anthropic API Key để bật tính năng khen ngợi AI:
              </p>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                style={{
                  width: "100%", boxSizing: "border-box",
                  border: "1.5px solid #E5E7EB", borderRadius: 12,
                  padding: "8px 12px", fontSize: 14, outline: "none",
                  fontFamily: "monospace",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div style={{
            width: "100%", maxWidth: 340, padding: "0 16px", marginBottom: 8,
          }}>
            <div style={{
              background: "#FEF2F2", border: "1px solid #FECACA",
              borderRadius: 16, padding: "10px 14px",
              color: "#DC2626", fontSize: 13, textAlign: "center",
            }}>
              {error}
            </div>
          </div>
        )}

        {/* Praise */}
        {praise && (
          <div style={{ width: "100%", maxWidth: 340, padding: "0 16px" }}>
            <div className="praise-box" style={{
              background: "linear-gradient(135deg, #FCE4EC, #F3E5F5)",
              border: "2px solid #F48FB1", borderRadius: 24,
              padding: "20px 18px", textAlign: "center",
              boxShadow: "0 8px 32px #F0629240",
            }}>
              <div className="float" style={{ fontSize: 40, marginBottom: 8 }}>🌟</div>
              <p style={{ color: "#6B21A8", fontWeight: 600, fontSize: 15, lineHeight: 1.6, margin: "0 0 10px" }}>
                {praise}
              </p>
              <div style={{ fontSize: 28 }}>🎉🌸🎀</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
