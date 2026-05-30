import BottomCTA from "../components/BottomCTA";

const BODY_BY_PERSONA = {
  friend: "When they join, you'll focus together tomorrow. Neither of you goes it alone.",
  child:  "Their shield is ready. You're helping them build the habit.",
  team:   "Your team has everything they need to protect their deep work time.",
  study:  "When they join, you'll both have someone keeping you accountable.",
};

function ShieldSVG({ glow }) {
  return (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26 2L4 12V28C4 41.25 13.5 53.5 26 57C38.5 53.5 48 41.25 48 28V12L26 2Z"
        fill={glow ? "#8CC63F" : "#2D5A27"}
        fillOpacity={glow ? 0.9 : 0.6}
        stroke={glow ? "#8CC63F" : "#4A8A35"}
        strokeWidth="2"
        style={glow ? { filter: "drop-shadow(0 0 12px #8CC63F)" } : {}}
      />
      <path
        d="M18 30L23 35L34 24"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Screen16({ onNext, onPreview, sharingPersona }) {
  const bodyText = BODY_BY_PERSONA[sharingPersona] || BODY_BY_PERSONA.friend;

  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col items-center px-6 pt-10 pb-8 animate-slide-in">
      {/* Two shields with dashed connector */}
      <div className="flex items-center justify-center gap-4 mb-8 mt-4">
        <div className="flex flex-col items-center gap-1">
          <ShieldSVG glow />
          <p className="text-white/50 text-xs mt-1">You</p>
        </div>

        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-2 h-0.5 bg-[#8CC63F] opacity-50 rounded-full" />
          ))}
          <span className="text-[#8CC63F] text-lg">✈</span>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-2 h-0.5 bg-[#8CC63F] opacity-50 rounded-full" />
          ))}
        </div>

        <div className="flex flex-col items-center gap-1">
          <ShieldSVG glow={false} />
          <p className="text-white/50 text-xs mt-1">Them</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-white text-center leading-tight mb-3">
        Your accountability partner is on their way.
      </h1>
      <p className="text-white/70 text-sm text-center leading-relaxed mb-4 px-2">
        {bodyText}
      </p>
      <p className="text-white/40 text-xs text-center italic mb-8">
        Focusing with a partner makes it easier to show up tomorrow.
      </p>

      <div className="w-full border-t border-white/10 mb-6" />

      <p className="text-white/40 text-xs uppercase tracking-wider mb-4 text-center">
        Want to see what your friend receives?
      </p>

      <button
        onClick={onPreview}
        className="w-full border border-white/25 rounded-full py-3.5 text-white/80 text-sm font-medium mb-4 active:bg-white/5 transition-all"
      >
        Preview their experience →
      </button>

      <BottomCTA label="Go to my dashboard" onClick={onNext} />
    </div>
  );
}
