import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";

const TIME_OPTIONS = [
  { emoji: "☀️", label: "Morning deep work", time: "9:00 AM", desc: "Block distractions before the day takes over." },
  { emoji: "📚", label: "Study time", time: "2:00 PM", desc: "Protect your afternoon focus window." },
  { emoji: "🌙", label: "Evening wind-down", time: "9:00 PM", desc: "Disconnect and prepare for rest." },
  { emoji: "⏰", label: "Custom time", time: "Choose your own", desc: "Set a time that fits your schedule." },
];

export default function Screen11({ onNext, onBack, tomorrowTime, setTomorrowTime }) {
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in">
      <div className="px-6 pt-4 pb-2">
        <Logo />
      </div>
      <BackButton onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
          When do you want Freedom to protect you tomorrow?
        </h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Pick a time. Freedom will start automatically — you won't need to remember.
        </p>
        <div className="flex flex-col gap-3">
          {TIME_OPTIONS.map((opt) => {
            const sel = tomorrowTime?.label === opt.label;
            return (
              <button
                key={opt.label}
                onClick={() => setTomorrowTime(opt)}
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
                  <span className="text-2xl">{opt.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-gray-900">{opt.label}</p>
                      <span className="text-xs font-medium text-[#8CC63F] bg-green-50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        {opt.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{opt.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-6 pb-8 pt-4">
        <BottomCTA label="Schedule my shield" onClick={onNext} disabled={!tomorrowTime} />
      </div>
    </div>
  );
}
