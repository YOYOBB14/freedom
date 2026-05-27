import Logo from "../components/Logo";
import BottomCTA from "../components/BottomCTA";
import ShieldIcon from "../components/ShieldIcon";
import { APPS } from "../constants/apps";

export default function Screen6({ onNext, onBack, selectedApps, shieldLevel }) {
  const selected = APPS.filter((a) => selectedApps.includes(a.name));
  const isLight = shieldLevel === "light";

  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-4 pb-8 animate-slide-in">
      <Logo dark />
      <div className="flex-1 flex flex-col items-center justify-center">
        <ShieldIcon size={160} glowing>
          <div className="flex flex-wrap gap-1.5 justify-center" style={{ maxWidth: 100 }}>
            {selected.slice(0, 8).map((app) => (
              <div
                key={app.name}
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ backgroundColor: app.color + "55" }}
              >
                {app.emoji}
              </div>
            ))}
          </div>
        </ShieldIcon>
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold text-white mb-3">
            {isLight ? "Your Light Shield is ready." : "Your Focus Shield is active."}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            {isLight
              ? "Freedom will send you gentle reminders when you open your selected apps. Want stronger protection?"
              : <>Freedom can now protect you from{" "}
                  <span className="text-[#F4A429] font-semibold">
                    {selected.map((a) => a.name).join(", ")}
                  </span>{" "}
                  during focus sessions.</>
            }
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {isLight ? (
          <>
            <BottomCTA label="Upgrade to Real Shield" onClick={onBack} />
            <BottomCTA label="Start with reminders" onClick={onNext} variant="ghost" />
          </>
        ) : (
          <>
            <BottomCTA label="Start a 10-minute focus session" onClick={onNext} />
            <BottomCTA label="Customize my shield" onClick={() => {}} variant="ghost" />
          </>
        )}
      </div>
    </div>
  );
}
