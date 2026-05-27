import BottomCTA from "../components/BottomCTA";
import { APPS } from "../constants/apps";

export default function Screen8({ onReturn, onEnd, selectedApps }) {
  const firstApp = APPS.find((a) => selectedApps.includes(a.name));
  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-12 pb-8 items-center justify-between animate-slide-in">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span className="text-7xl mb-6 animate-butterfly-float inline-block">🦋</span>
        <h1 className="text-2xl font-bold text-white mb-4">Protected by Freedom</h1>
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
