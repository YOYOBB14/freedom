import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";

const PERSONAS = [
  { id: "friend", emoji: "👥",       name: "Challenge a friend",   desc: "Focus together tomorrow. Stay accountable to each other." },
  { id: "child",  emoji: "👨‍👩‍👧",     name: "Block my child's phone",  desc: "Set up screen blocking on your child's device." },
  { id: "team",   emoji: "💼",       name: "Share with my team",    desc: "Protect your team's deep work time together." },
  { id: "study",  emoji: "📚",       name: "Study with a partner",  desc: "Study side by side. Keep each other on track." },
];

export default function Screen14({ onNext, onBack, onSkip, sharingPersona, setSharingPersona }) {
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in">
      <div className="px-6 pt-4 pb-2">
        <Logo />
      </div>
      <BackButton onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
        {/* New-feature badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-green-50 border border-[#8CC63F] text-[#2D5A27] text-xs font-medium rounded-full px-3 py-1">
            ✨ Focus with others
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
          Who do you want to stay accountable with?
        </h1>
        <p className="text-sm text-gray-500 italic mb-6">
          Focusing with someone makes it easier to follow through.
        </p>

        <div className="flex flex-col gap-3">
          {PERSONAS.map((p) => {
            const sel = sharingPersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSharingPersona(p.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${
                  sel ? "bg-green-50" : "border border-[#E5E5E5] bg-white"
                }`}
                style={sel ? {
                  borderStyle: "solid",
                  borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0,
                  borderLeftWidth: 4, borderLeftColor: "#8CC63F",
                } : {}}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="font-medium text-gray-900">{p.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 pb-8 pt-4">
        <BottomCTA label="Continue →" onClick={onNext} disabled={!sharingPersona} />
        <button
          onClick={onSkip}
          className="w-full text-center text-xs text-gray-500 mt-3 py-1"
        >
          Not now — go to my dashboard
        </button>
      </div>
    </div>
  );
}
