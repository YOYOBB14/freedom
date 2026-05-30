import { useState, useEffect } from "react";
import BottomCTA from "../components/BottomCTA";
import { APPS } from "../constants/apps";

const LANDING_BY_PERSONA = {
  friend: {
    emoji: "👥",
    headline: "Shahar wants to focus with you.",
    sub: "They've scheduled tomorrow's focus session. Join them and keep each other accountable.",
    cta: "Join the session",
  },
  child: {
    emoji: "👨‍👩‍👧",
    headline: "Your family set up a focus session for you.",
    sub: "They want to protect your focus too. Join them for 10 minutes.",
    cta: "Start my session",
  },
  team: {
    emoji: "💼",
    headline: "Your team invited you to a focus block.",
    sub: "Everyone goes distraction-free together. Join the block.",
    cta: "Join the team session",
  },
  study: {
    emoji: "📚",
    headline: "Your partner wants an accountability partner.",
    sub: "Study together for 10 minutes. Keep each other on track.",
    cta: "Study together",
  },
};

export default function Screen17({ onDone, onBackToSender, sharingPersona, selectedApps }) {
  const [step, setStep] = useState(0);
  const [confirmedApps, setConfirmedApps] = useState([...selectedApps]);
  const [seconds, setSeconds] = useState(600);

  const landing = LANDING_BY_PERSONA[sharingPersona] || LANDING_BY_PERSONA.friend;
  const allApps = APPS.filter((a) => a.name !== "Other");

  useEffect(() => {
    if (step !== 2) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [step]);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const toggleApp = (name) => {
    setConfirmedApps((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="h-full flex flex-col animate-slide-in relative overflow-hidden"
      style={{ background: step === 3 ? "#1A2E1A" : "#F5F2EC" }}
    >
      {/* Demo banner */}
      <div className="bg-[#1C1C1C] px-4 py-2 flex items-center gap-2 flex-shrink-0 z-30">
        <span className="text-xs">👁</span>
        <p className="text-white/70 text-xs">Recipient view — this is what your friend sees</p>
      </div>

      {/* Step 0: Landing */}
      {step === 0 && (
        <div className="flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <span className="text-6xl mb-6">{landing.emoji}</span>
            <div className="flex items-center gap-2 bg-green-50 border border-[#8CC63F] rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-medium text-[#2D5A27]">✨ Focus challenge received</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
              {landing.headline}
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 px-2">
              {landing.sub}
            </p>
            <div className="bg-white border border-[#E5E5E5] rounded-2xl px-5 py-4 w-full mb-8 text-left">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Your challenge</p>
              <p className="text-sm font-medium text-gray-900">10 minutes. No distractions.</p>
              <p className="text-xs text-gray-400 mt-1">Apps blocked · Freedom protects you both</p>
            </div>
          </div>
          <BottomCTA label={landing.cta} onClick={() => setStep(1)} />
          <button
            onClick={onBackToSender}
            className="w-full text-center text-xs text-gray-400 mt-3 py-1"
          >
            ← Back to sender view
          </button>
        </div>
      )}

      {/* Step 1: Confirm apps */}
      {step === 1 && (
        <div className="flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
            Confirm your apps
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            These will be blocked during your 10-minute session.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {allApps.map((app) => {
              const on = confirmedApps.includes(app.name);
              return (
                <button
                  key={app.name}
                  onClick={() => toggleApp(app.name)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm transition-all ${
                    on
                      ? "bg-[#1A2E1A] text-white"
                      : "bg-white border border-gray-200 text-gray-500"
                  }`}
                >
                  <span>{app.emoji}</span>
                  <span>{app.name}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-auto">
            <BottomCTA
              label="Start the challenge"
              onClick={() => setStep(2)}
              disabled={confirmedApps.length === 0}
            />
          </div>
        </div>
      )}

      {/* Step 2: Session timer */}
      {step === 2 && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8 bg-[#1A2E1A]">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Challenge active</p>
          <div className="text-[#F4A429] font-bold mb-6" style={{ fontSize: 72, lineHeight: 1.1 }}>
            {fmt(seconds)}
          </div>
          <p className="text-white/70 text-sm italic text-center mb-5">
            Freedom is protecting this moment.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {confirmedApps.map((name) => {
              const app = APPS.find((a) => a.name === name);
              if (!app) return null;
              return (
                <div key={name} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <span className="text-sm">{app.emoji}</span>
                  <span className="text-white text-sm">{app.name}</span>
                </div>
              );
            })}
          </div>
          <BottomCTA label="Complete session" onClick={() => setStep(3)} />
          <button
            onClick={() => setStep(3)}
            className="text-white/40 text-xs text-center mt-4"
          >
            Skip →
          </button>
        </div>
      )}

      {/* Step 3: Success */}
      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "#8CC63F22", border: "2px solid #8CC63F" }}
          >
            <span className="text-4xl text-[#8CC63F]">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">You're in.</h1>
          <p className="text-white/70 text-sm leading-relaxed mb-2 px-2">
            You and Shahar are focusing together tomorrow. You'll both be there to keep each other on track.
          </p>
          <p className="text-white/40 text-xs italic mb-10">
            Accountability starts now.
          </p>
          <BottomCTA label="Set up my focus session →" onClick={onDone} />
        </div>
      )}
    </div>
  );
}
