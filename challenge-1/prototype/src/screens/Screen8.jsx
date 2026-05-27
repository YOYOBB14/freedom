import BottomCTA from "../components/BottomCTA";
import { APPS } from "../constants/apps";

export default function Screen8({ onReturn, onEnd, selectedApps }) {
  const firstApp = APPS.find((a) => selectedApps.includes(a.name));
  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-12 pb-8 items-center justify-between animate-slide-in">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 rounded-full bg-[#8CC63F]/20 flex items-center justify-center mb-4">
          <span className="text-base">🛡️</span>
        </div>
        <span className="text-7xl mb-6 animate-butterfly-float inline-block">🦋</span>
        <h1 className="text-3xl font-bold text-white mb-1">Nice catch.</h1>
        <p className="text-lg font-medium text-[#F4A429] mb-4">{firstApp?.name} can wait.</p>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          You asked Freedom to protect you from{" "}
          <span className="text-[#F4A429] font-semibold">{firstApp?.name}</span>{" "}
          during focus time. Take one breath and return to what matters.
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <BottomCTA label="Return to focus" onClick={onReturn} />
        <BottomCTA label="End session" onClick={onEnd} variant="ghost" />
        <button className="text-gray-500 text-xs text-center py-1">Adjust shield later</button>
      </div>
    </div>
  );
}
