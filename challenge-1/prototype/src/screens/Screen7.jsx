import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import { APPS } from "../constants/apps";

export default function Screen7({ onNext, onSkip, selectedApps, setBlockAttempted }) {
  const [seconds, setSeconds] = useState(600);
  const firstApp = APPS.find((a) => selectedApps.includes(a.name));
  const selected = APPS.filter((a) => selectedApps.includes(a.name));

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-4 pb-8 animate-slide-in">
      <Logo dark />
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Focus session active</p>
        <div className="text-[#F4A429] font-bold mb-6" style={{ fontSize: 72, lineHeight: 1.1 }}>
          {fmt(seconds)}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {selected.map((app) => (
            <div key={app.name} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
              <span className="text-sm">{app.emoji}</span>
              <span className="text-white/80 text-xs">{app.name}</span>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-xs text-center mb-8">
          You&apos;re protected from your top distractions.
        </p>
        {firstApp && (
          <button
            onClick={() => { setBlockAttempted(true); onNext(); }}
            className="flex flex-col items-center gap-2 border border-white/20 rounded-2xl p-5 hover:border-white/40 active:scale-95 transition-all w-full"
          >
            <span className="text-3xl">{firstApp.emoji}</span>
            <span className="text-white/70 text-xs text-center">Tap to simulate opening {firstApp.name}</span>
          </button>
        )}
      </div>
      <button onClick={onSkip} className="text-white/40 text-xs text-center mt-4">
        Skip simulation →
      </button>
    </div>
  );
}
