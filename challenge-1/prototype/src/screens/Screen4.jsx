import { useState } from "react";
import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";
import ShieldIcon from "../components/ShieldIcon";

function Tooltip({ text }) {
  return (
    <div className="absolute bottom-full right-0 mb-2 z-50" style={{ maxWidth: 220, minWidth: 180 }}>
      <div className="bg-[#1C1C1C] text-white text-xs rounded-xl p-3 leading-relaxed shadow-xl">
        {text}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -6,
          right: 8,
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid #1C1C1C",
        }}
      />
    </div>
  );
}

export default function Screen4({ onNext, onBack }) {
  const [tooltip1Shown, setTooltip1Shown] = useState(false);
  const [tooltip2Shown, setTooltip2Shown] = useState(false);

  const handleTooltip1 = (e) => {
    e.stopPropagation();
    if (!tooltip1Shown) console.log("Permission tooltip 1 tapped");
    setTooltip1Shown((v) => !v);
    setTooltip2Shown(false);
  };

  const handleTooltip2 = (e) => {
    e.stopPropagation();
    if (!tooltip2Shown) console.log("Permission tooltip 2 tapped");
    setTooltip2Shown((v) => !v);
    setTooltip1Shown(false);
  };

  const dismissAll = () => {
    setTooltip1Shown(false);
    setTooltip2Shown(false);
  };

  return (
    <div
      className="h-full flex flex-col px-6 pt-4 pb-8 animate-slide-in overflow-y-auto"
      style={{ background: "#0F1F0F" }}
      onClick={dismissAll}
    >
      <Logo dark />
      <BackButton onBack={onBack} dark />

      <div className="flex flex-col items-center pt-10">
        <ShieldIcon size={80} glowing>
          <span className="text-2xl">🔒</span>
        </ShieldIcon>

        <h1 className="text-xl font-bold text-white text-center mt-4 mb-2">
          Android will ask for Accessibility access next.
        </h1>
        <p className="text-white/70 text-sm text-center leading-relaxed mb-6">
          This is how Freedom detects when one of your selected distraction apps opens and blocks it during a focus session.
        </p>

        {/* Permissions card */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 20,
            margin: "20px 20px 28px",
            padding: "20px 16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
          }}
        >

          {/* Row 1 */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#F4A429" }}
            >
              <span className="text-base">👁</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900">View and control screen</p>
              <p className="text-xs text-gray-500 mt-0.5">Lets Freedom know when a distraction app appears.</p>
            </div>
            <div className="relative flex-shrink-0">
              <button
                onClick={handleTooltip1}
                className="w-[22px] h-[22px] rounded-full border border-gray-300 flex items-center justify-center text-gray-400 text-xs font-medium"
              >
                ?
              </button>
              {tooltip1Shown && (
                <Tooltip text="Reads screen content to detect blocked apps." />
              )}
            </div>
          </div>

          <div className="border-t border-gray-100 my-3" />

          {/* Row 2 */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#6B8FA3" }}
            >
              <span className="text-base">✋</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900">View and perform actions</p>
              <p className="text-xs text-gray-500 mt-0.5">Acts on your behalf during a focus session.</p>
            </div>
            <div className="relative flex-shrink-0">
              <button
                onClick={handleTooltip2}
                className="w-[22px] h-[22px] rounded-full border border-gray-300 flex items-center justify-center text-gray-400 text-xs font-medium"
              >
                ?
              </button>
              {tooltip2Shown && (
                <Tooltip text="Interacts with apps to enforce your block." />
              )}
            </div>
          </div>

        </div>

        <BottomCTA label="Continue to Android settings" onClick={onNext} />
      </div>
    </div>
  );
}
