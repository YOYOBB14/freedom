import Logo from "../components/Logo";
import BottomCTA from "../components/BottomCTA";

export default function Screen0({ onNext }) {
  const orbitIcons = ["⏱", "📚", "😴", "👨‍👩‍👧", "💼"];
  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-4 pb-8 animate-slide-in">
      <Logo dark />
      {/* Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative" style={{ width: 240, height: 240 }}>
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-[#8CC63F]/40" />
          {/* Inner circle */}
          <div className="absolute inset-8 rounded-full border-2 border-[#8CC63F]/70" />
          {/* Hands */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
              {/* Left hand */}
              <ellipse cx="30" cy="60" rx="18" ry="14" fill="#2d4a2d" />
              <rect x="20" y="35" width="6" height="28" rx="3" fill="#2d4a2d" />
              <rect x="27" y="30" width="6" height="28" rx="3" fill="#2d4a2d" />
              <rect x="34" y="33" width="6" height="26" rx="3" fill="#2d4a2d" />
              <rect x="41" y="38" width="5" height="22" rx="2.5" fill="#2d4a2d" />
              {/* Right hand */}
              <ellipse cx="70" cy="60" rx="18" ry="14" fill="#2d4a2d" />
              <rect x="74" y="35" width="6" height="28" rx="3" fill="#2d4a2d" />
              <rect x="67" y="30" width="6" height="28" rx="3" fill="#2d4a2d" />
              <rect x="60" y="33" width="6" height="26" rx="3" fill="#2d4a2d" />
              <rect x="54" y="38" width="5" height="22" rx="2.5" fill="#2d4a2d" />
              {/* Halftone dots */}
              {[35,42,49,42,35].map((cx, i) =>
                [40,47,54,61,68].map((cy, j) => (
                  <circle key={`${i}-${j}`} cx={cx} cy={cy} r="1.5" fill="#8CC63F" opacity="0.3" />
                ))
              )}
            </svg>
          </div>
          {/* Orbit icons */}
          {orbitIcons.map((icon, i) => {
            const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
            const r = 108;
            const x = 120 + r * Math.cos(angle) - 16;
            const y = 120 + r * Math.sin(angle) - 16;
            return (
              <div
                key={i}
                className="absolute w-8 h-8 rounded-full bg-[#F4A429]/20 border border-[#F4A429]/50 flex items-center justify-center text-sm"
                style={{ left: x, top: y }}
              >
                {icon}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <p className="text-white text-3xl font-light leading-tight">Take back your</p>
          <p className="text-[#F4A429] text-3xl font-bold leading-tight">&ldquo;time and attention.&rdquo;</p>
          <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
            Freedom helps you create space for the things that matter most. So you can feel more focused, rested, and calm.
          </p>
        </div>
      </div>
      <BottomCTA label="I'M READY TO FOCUS" onClick={onNext} />
    </div>
  );
}
