import { useState, useEffect } from "react";
import ShieldIcon from "../components/ShieldIcon";
import BottomCTA from "../components/BottomCTA";

export default function Screen12({ onNext, tomorrowTime }) {
  const [notifVisible, setNotifVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const timeLabel = tomorrowTime?.time || "tomorrow";

  useEffect(() => {
    const t1 = setTimeout(() => setNotifVisible(true), 2500);
    const t2 = setTimeout(() => setNotifVisible(false), 6500);
    const t3 = setTimeout(() => setCtaVisible(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col items-center justify-center px-6 pb-8 pt-4 animate-slide-in relative overflow-hidden">

      {/* Push notification */}
      <div
        className="absolute top-4 left-4 right-4 z-50"
        style={{
          transform: notifVisible ? "translateY(0)" : "translateY(-140%)",
          transition: notifVisible
            ? "transform 400ms ease-out"
            : "transform 300ms ease-in",
        }}
      >
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg px-4 py-3 flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#8CC63F] flex items-center justify-center flex-shrink-0 mt-0.5">
            <span style={{ fontSize: 10 }}>🦋</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/60 text-xs mb-0.5">Freedom</p>
            <p className="text-white text-sm font-medium">Tomorrow's shield is set.</p>
            <p className="text-white/60 text-xs mt-0.5">Focus starts at {timeLabel}. We'll remind you.</p>
          </div>
          <span className="text-white/40 text-xs flex-shrink-0">now</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center">
        <ShieldIcon size={100} glowing />
        <h1 className="text-3xl font-bold text-white mt-6">Done.</h1>
        <p className="text-white/80 text-base text-center mt-3 leading-relaxed">
          Tomorrow's Focus Shield will start automatically<br />at {timeLabel}.
        </p>
        <p className="text-white/50 text-sm text-center mt-2">
          You'll get a gentle reminder 5 minutes before it starts.
        </p>
      </div>

      {/* CTA fades in after delay */}
      <div
        className="absolute bottom-8 left-6 right-6"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transition: "opacity 500ms ease-in",
        }}
      >
        <BottomCTA label="Go to my dashboard" onClick={onNext} />
      </div>
    </div>
  );
}
