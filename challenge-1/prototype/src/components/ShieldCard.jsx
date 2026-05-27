export default function ShieldCard({ level, selected, onSelect }) {
  const config = {
    light: {
      emoji: "🟡",
      title: "Light Shield",
      desc: "Soft nudges and reminders. No special permissions needed. Best for trying Freedom first.",
      tag: "No setup required",
      border: "border-amber-400",
      tagColor: "text-amber-600 bg-amber-50",
    },
    real: {
      emoji: "🟢",
      title: "Real Shield",
      desc: "Blocks the apps you selected during focus sessions. Freedom uses Android Accessibility only for your selected distractions.",
      tag: "Requires one Android approval",
      badge: "RECOMMENDED",
      border: "border-[#8CC63F]",
      tagColor: "text-green-600 bg-green-50",
    },
    locked: {
      emoji: "🔴",
      title: "Locked Shield",
      desc: "Stronger blocking, harder to bypass. For deep work, study, sleep, or serious digital detox.",
      tag: "For serious commitment",
      border: "border-red-400",
      tagColor: "text-red-600 bg-red-50",
    },
  };
  const c = config[level];
  return (
    <button
      onClick={() => onSelect(level)}
      className={`w-full text-left p-4 rounded-xl bg-white shadow-sm border-2 transition-all duration-200 relative
        ${selected ? `${c.border} shadow-md` : "border-gray-100 hover:border-gray-200"}
      `}
    >
      {c.badge && (
        <span className="absolute top-3 right-3 text-xs font-bold text-[#F4A429] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
          {c.badge}
        </span>
      )}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{c.emoji}</span>
        <span className="font-semibold text-gray-900">{c.title}</span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-2">{c.desc}</p>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
    </button>
  );
}
