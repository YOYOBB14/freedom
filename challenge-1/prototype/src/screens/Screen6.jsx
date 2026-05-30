import { useState } from "react";
import Logo from "../components/Logo";
import BottomCTA from "../components/BottomCTA";
import ShieldIcon from "../components/ShieldIcon";
import { APPS } from "../constants/apps";

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

export default function Screen6({ onNext, onBack, selectedApps, shieldLevel }) {
  const [shieldInfoTooltipShown, setShieldInfoTooltipShown] = useState(false);

  const selected = APPS.filter((a) => selectedApps.includes(a.name));
  const isLight = shieldLevel === "light";

  const handleShieldTooltip = (e) => {
    e.stopPropagation();
    if (!shieldInfoTooltipShown) console.log("Shield info tooltip tapped");
    setShieldInfoTooltipShown((v) => !v);
  };

  return (
    <div
      className="h-full flex flex-col px-6 pt-4 pb-8 animate-slide-in"
      style={{ background: "#0F1F0F" }}
      onClick={() => setShieldInfoTooltipShown(false)}
    >
      <Logo dark />
      <div className="flex-1 flex flex-col items-center justify-center">
        <ShieldIcon size={160} glowing>
          <div className="flex flex-wrap gap-1.5 justify-center" style={{ maxWidth: 100 }}>
            {selected.slice(0, 8).map((app) => (
              <div
                key={app.name}
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ backgroundColor: app.color + "55" }}
              >
                {app.emoji}
              </div>
            ))}
          </div>
        </ShieldIcon>

        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold text-white mb-3">
            {isLight ? "Your Light Shield is ready." : "Your Focus Shield is active."}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            {isLight
              ? "Freedom will send you gentle reminders when you open your selected apps. Want stronger protection?"
              : <>Freedom can now protect you from{" "}
                  <span className="text-[#F4A429] font-semibold">
                    {selected.map((a) => a.name).join(", ")}
                  </span>{" "}
                  during focus sessions.</>
            }
          </p>

          {!isLight && (
            <>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "20px 32px" }} />
              <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: "8px 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                    Only active during focus sessions.
                  </span>
                  <div className="relative flex-shrink-0">
                    <button
                      onClick={handleShieldTooltip}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: 11,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      ?
                    </button>
                    {shieldInfoTooltipShown && (
                      <Tooltip text="Activates only when a blocked app opens during a session. Turn off anytime in Settings." />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {isLight ? (
          <>
            <BottomCTA label="Upgrade to Real Shield" onClick={onBack} />
            <BottomCTA label="Start with reminders" onClick={onNext} variant="ghost" />
          </>
        ) : (
          <>
            <BottomCTA label="Start my first focus mission →" onClick={onNext} />
            <BottomCTA label="Customize my shield" onClick={() => {}} variant="ghost" />
          </>
        )}
      </div>
    </div>
  );
}
