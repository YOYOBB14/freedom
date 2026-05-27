export default function AppChip({ app, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(app.name)}
      className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 w-full
        ${selected
          ? "border-l-4 border-[#8CC63F] bg-green-50 border-t-transparent border-r-transparent border-b-transparent"
          : "border border-gray-200 bg-white hover:border-gray-300"
        }
      `}
      style={selected ? { borderLeftColor: "#8CC63F", borderTopColor: "transparent", borderRightColor: "transparent", borderBottomColor: "transparent", borderLeftWidth: 4 } : {}}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
        style={{ backgroundColor: app.color + "22" }}
      >
        {app.emoji}
      </div>
      <span className={`text-xs font-medium ${selected ? "text-[#8CC63F]" : "text-gray-700"}`}>{app.name}</span>
    </button>
  );
}
