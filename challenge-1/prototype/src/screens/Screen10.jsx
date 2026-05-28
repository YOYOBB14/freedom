import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";

const INTENTS = [
  { emoji: "💼", name: "Finish a task", desc: "Get one thing done without interruptions." },
  { emoji: "📚", name: "Study", desc: "Protect uninterrupted study time." },
  { emoji: "🧠", name: "Deep work", desc: "Go deep on something that matters." },
  { emoji: "🌙", name: "Sleep wind-down", desc: "Disconnect before bed." },
  { emoji: "🙏", name: "Stop scrolling", desc: "Break the loop right now." },
];

export default function Screen10({ onNext, onBack, intent, setIntent }) {
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in">
      <div className="px-6 pt-4 pb-2">
        <Logo />
      </div>
      <BackButton onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
        <h1 className="font-bold text-gray-900 leading-tight mb-1" style={{ fontSize: 26 }}>
          What are you protecting right now?
        </h1>
        <p className="text-sm text-gray-500 italic mb-6">
          Freedom will shape your first mission around your goal.
        </p>
        <div className="flex flex-col gap-3">
          {INTENTS.map((item) => {
            const sel = intent?.name === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setIntent(item)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${
                  sel ? "bg-green-50" : "border border-[#E5E5E5] bg-white"
                }`}
                style={sel ? {
                  borderStyle: "solid",
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 4,
                  borderLeftColor: "#8CC63F",
                } : {}}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-6 pb-8 pt-4">
        <BottomCTA label="Set my mission" onClick={onNext} disabled={!intent} />
      </div>
    </div>
  );
}
