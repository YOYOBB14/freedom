import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import BottomCTA from "../components/BottomCTA";
import TrustBullet from "../components/TrustBullet";
import ShieldIcon from "../components/ShieldIcon";

const bullets = [
  { text: "We do not read your messages" },
  { text: "We do not collect passwords" },
  { text: "We do not sell your personal activity" },
  { text: "You can turn this off anytime in Android settings" },
  { text: "Freedom will use this", highlight: "only for the apps you selected" },
];

export default function Screen4({ onNext, onBack }) {
  return (
    <div className="h-full bg-[#1A2E1A] flex flex-col px-6 pt-4 pb-8 animate-slide-in overflow-y-auto">
      <Logo dark />
      <BackButton onBack={onBack} dark />
      <div className="flex flex-col items-center pt-10">
        <ShieldIcon size={80} glowing>
          <span className="text-2xl">🔒</span>
        </ShieldIcon>
        <h1 className="text-xl font-bold text-white text-center mt-4 mb-2">
          Android will ask for Accessibility access next.
        </h1>
        <p className="text-white/70 text-sm text-center leading-relaxed mb-6">
          This is how Freedom detects when one of your selected distraction apps opens and blocks it during a focus session.
        </p>
        <div className="w-full flex flex-col gap-3 mb-6">
          {bullets.map((b, i) => (
            <TrustBullet key={i} text={b.text} highlight={b.highlight} />
          ))}
        </div>
        <p className="text-white/40 text-xs text-center leading-relaxed mb-8">
          Android shows a broad system warning for every app using this access type. Freedom uses it for one narrow purpose: blocking your selected distractions.
        </p>
        <BottomCTA label="Continue to Android settings" onClick={onNext} />
      </div>
    </div>
  );
}
