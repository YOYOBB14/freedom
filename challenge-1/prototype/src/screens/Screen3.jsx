import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import ProgressDots from "../components/ProgressDots";
import ShieldCard from "../components/ShieldCard";
import BottomCTA from "../components/BottomCTA";

export default function Screen3({ onNext, onBack, shieldLevel, setShieldLevel }) {
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <Logo />
        <ProgressDots total={7} current={2} />
      </div>
      <BackButton onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
          How strong should your Focus Shield be?
        </h1>
        <div className="flex flex-col gap-3">
          {["light", "real", "locked"].map((level) => (
            <ShieldCard
              key={level}
              level={level}
              selected={shieldLevel === level}
              onSelect={setShieldLevel}
            />
          ))}
        </div>
      </div>
      <div className="px-6 pb-8 pt-4">
        <BottomCTA label="Confirm my shield" onClick={onNext} />
      </div>
    </div>
  );
}
