import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import ProgressDots from "../components/ProgressDots";
import AppChip from "../components/AppChip";
import BottomCTA from "../components/BottomCTA";
import { APPS } from "../constants/apps";

export default function Screen1({ onNext, onBack, selectedApps, setSelectedApps }) {
  const toggle = (name) => {
    setSelectedApps((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <Logo />
        <ProgressDots total={7} current={1} />
      </div>
      <BackButton onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 pt-8">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
          What pulls you out of focus most often?
        </h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Choose the apps you want Freedom to help you control first. You can change this later.
        </p>
        <div className="grid grid-cols-3 gap-3 pb-4">
          {APPS.map((app) => (
            <AppChip
              key={app.name}
              app={app}
              selected={selectedApps.includes(app.name)}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
      <div className="px-6 pb-8 pt-4 bg-[#F5F2EC]">
        <BottomCTA
          label="Continue"
          onClick={onNext}
          disabled={selectedApps.length === 0}
        />
      </div>
    </div>
  );
}
