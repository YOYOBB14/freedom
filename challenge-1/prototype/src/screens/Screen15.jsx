import { useState } from "react";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";
import { APPS } from "../constants/apps";

const VARIANTS = {
  friend: {
    headline: "Your accountability partner is one tap away.",
    tagline: "Focus together. Stay accountable.",
    body: "When they join, you'll both have someone keeping you on track.",
    cta: "Invite to focus together",
  },
  child: {
    headline: "Set up a blocker for your child's phone.",
    tagline: "They'll only see what you allow during focus time.",
    body: "Send this link to set up Freedom on your child's device.",
    cta: "Send to my child's device",
  },
  team: {
    headline: "Build a focus culture with your team.",
    tagline: "Shared focus. Better output.",
    body: "Invite your team to a shared block. Everyone wins when no one drifts.",
    cta: "Invite your team",
  },
  study: {
    headline: "Study with an accountability partner.",
    tagline: "You'll both stay on track together.",
    body: "Send a partner a 10-minute challenge and study in sync.",
    cta: "Invite study partner",
  },
};

const TEAM_BLOCKS = ["☀️ 9:00 AM – 11:00 AM", "🌙 2:00 PM – 4:00 PM", "⏰ Custom"];

const PERSONAS = {
  friend: { emoji: "👥", name: "Friend Challenge" },
  child:  { emoji: "👨‍👩‍👧", name: "Family Session" },
  team:   { emoji: "💼", name: "Team Focus Block" },
  study:  { emoji: "📚", name: "Study Session" },
};

export default function Screen15({ onNext, onBack, onSkip, sharingPersona, selectedApps }) {
  const [showSheet, setShowSheet] = useState(false);
  const [teamBlock, setTeamBlock] = useState(null);

  const variant = VARIANTS[sharingPersona] || VARIANTS.friend;
  const persona = PERSONAS[sharingPersona] || PERSONAS.friend;
  const displayApps = APPS.filter((a) => selectedApps.includes(a.name)).slice(0, 4);
  const isTeam = sharingPersona === "team";

  const handleSend = () => {
    setShowSheet(false);
    setTimeout(() => onNext(), 400);
  };

  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col animate-slide-in relative overflow-hidden">
      <div className="px-6 pt-4 pb-2 flex-shrink-0">
        <BackButton onBack={onBack} dark />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-4">
        <h1 className="text-2xl font-bold text-white leading-tight mb-5">
          {variant.headline}
        </h1>

        {/* Challenge card */}
        <div className="bg-white rounded-2xl p-5 mx-0 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{persona.emoji}</span>
            <div>
              <p className="font-semibold text-gray-900">{persona.name}</p>
              <p className="text-xs text-gray-400">via Freedom</p>
            </div>
          </div>
          <div className="border-t border-gray-100 mb-3" />

          {isTeam ? (
            <>
              <p className="text-sm font-medium text-gray-700 mb-2">Choose a focus block:</p>
              <div className="flex flex-col gap-2">
                {TEAM_BLOCKS.map((block) => {
                  const sel = teamBlock === block;
                  return (
                    <button
                      key={block}
                      onClick={() => setTeamBlock(block)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all ${
                        sel ? "bg-green-50 font-medium text-[#2D5A27]" : "bg-gray-50 text-gray-700"
                      }`}
                      style={sel ? { borderLeft: "3px solid #8CC63F" } : {}}
                    >
                      {block}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-700 mb-2">10 minutes. No distractions.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {displayApps.length > 0 ? displayApps.map((app) => (
                  <span
                    key={app.name}
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {app.emoji} {app.name}
                  </span>
                )) : (
                  <span className="text-xs text-gray-400 italic">All distracting apps</span>
                )}
              </div>
            </>
          )}

          <p className="text-xs text-gray-400 italic mt-2">{variant.tagline}</p>
        </div>

        <p className="text-white/70 text-sm leading-relaxed mb-6">{variant.body}</p>
      </div>

      <div className="px-6 pb-8 pt-4 flex-shrink-0">
        <BottomCTA
          label={variant.cta}
          onClick={() => setShowSheet(true)}
          disabled={isTeam && !teamBlock}
        />
        <button
          onClick={onSkip}
          className="w-full text-center text-xs text-white/40 mt-3 py-1"
        >
          Maybe later
        </button>
      </div>

      {/* Share sheet overlay */}
      {showSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSheet(false)}
          />
          <div className="relative bg-white rounded-t-2xl px-6 pt-5 pb-10 z-10">
            <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-5" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-center">
              Send via
            </p>
            {[
              { icon: "💬", label: "WhatsApp" },
              { icon: "✉️", label: "Send as message" },
              { icon: "🔗", label: "Copy link" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={handleSend}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl active:bg-gray-50 transition-colors"
              >
                <span className="text-2xl w-8 text-center">{opt.icon}</span>
                <span className="text-base text-gray-900">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
