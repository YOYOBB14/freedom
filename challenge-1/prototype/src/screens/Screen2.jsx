import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";
import ShieldIcon from "../components/ShieldIcon";
import { APPS } from "../constants/apps";

export default function Screen2({ onNext, onBack, selectedApps }) {
  const selected = APPS.filter((a) => selectedApps.includes(a.name));
  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-4 pb-8 animate-slide-in">
      <Logo dark />
      <BackButton onBack={onBack} dark />
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Amber wavy decoration */}
        <svg className="absolute opacity-20" width="300" height="200" viewBox="0 0 300 200">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M0 ${80 + i * 20} Q75 ${60 + i * 20} 150 ${80 + i * 20} T300 ${80 + i * 20}`}
              stroke="#F4A429"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
        <ShieldIcon size={140} glowing>
          <div className="flex flex-wrap gap-1 justify-center max-w-[80px]">
            {selected.slice(0, 6).map((app) => (
              <div
                key={app.name}
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: app.color + "44" }}
              >
                {app.emoji}
              </div>
            ))}
          </div>
        </ShieldIcon>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-white leading-tight mb-4">
            These apps are designed to pull you back in.
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Freedom helps you create a short pause between impulse and action, so your focus choice becomes easier.
          </p>
        </div>
      </div>
      <BottomCTA label="Build my Focus Shield" onClick={onNext} />
    </div>
  );
}
