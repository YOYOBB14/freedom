import { useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import StatusBar from "./components/StatusBar";
import Screen0 from "./screens/Screen0";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
import Screen8 from "./screens/Screen8";
import Screen9 from "./screens/Screen9";
import Screen10 from "./screens/Screen10";
import Screen11 from "./screens/Screen11";
import Screen12 from "./screens/Screen12";
import Screen13 from "./screens/Screen13";
import Screen14 from "./screens/Screen14";
import Screen15 from "./screens/Screen15";
import Screen16 from "./screens/Screen16";
import Screen17 from "./screens/Screen17";

export default function App() {
  const [screen, setScreen] = useState(0);
  const [selectedApps, setSelectedApps] = useState([]);
  const [shieldLevel, setShieldLevel] = useState("real");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [blockAttempted, setBlockAttempted] = useState(false);
  const [intent, setIntent] = useState(null);
  const [tomorrowTime, setTomorrowTime] = useState(null);
  const [sharingPersona, setSharingPersona] = useState(null);

  const go = (n) => setScreen(n);

  const darkScreens = [0, 2, 4, 5, 6, 7, 8, 12, 15, 16];
  const isDark = darkScreens.includes(screen);

  const screens = [
    <Screen0 onNext={() => go(1)} />,
    <Screen1 onNext={() => go(2)} onBack={() => go(0)} selectedApps={selectedApps} setSelectedApps={setSelectedApps} />,
    <Screen2 onNext={() => go(3)} onBack={() => go(1)} selectedApps={selectedApps} />,
    <Screen3 onNext={() => shieldLevel === "light" ? go(6) : go(4)} onBack={() => go(2)} shieldLevel={shieldLevel} setShieldLevel={setShieldLevel} />,
    <Screen4 onNext={() => go(5)} onBack={() => go(3)} />,
    <Screen5 onNext={() => go(6)} setPermissionGranted={setPermissionGranted} />,
    <Screen6 onNext={() => go(10)} onBack={() => go(3)} selectedApps={selectedApps} shieldLevel={shieldLevel} />,
    <Screen7 onNext={() => go(8)} onSkip={() => go(9)} selectedApps={selectedApps} setBlockAttempted={setBlockAttempted} intent={intent} />,
    <Screen8 onReturn={() => go(7)} onEnd={() => go(9)} selectedApps={selectedApps} />,
    <Screen9 selectedApps={selectedApps} onNext={() => go(11)} />,
    <Screen10 onNext={() => go(7)} onBack={() => go(6)} intent={intent} setIntent={setIntent} />,
    <Screen11 onNext={() => go(12)} onBack={() => go(9)} tomorrowTime={tomorrowTime} setTomorrowTime={setTomorrowTime} />,
    <Screen12 onNext={() => go(13)} onChallenge={() => go(14)} tomorrowTime={tomorrowTime} />,
    <Screen13 onStartMission={() => go(10)} tomorrowTime={tomorrowTime} intent={intent} onChallengeNav={() => go(14)} />,
    <Screen14 onNext={() => go(15)} onBack={() => go(12)} onSkip={() => go(13)} sharingPersona={sharingPersona} setSharingPersona={setSharingPersona} />,
    <Screen15 onNext={() => go(16)} onBack={() => go(14)} onSkip={() => go(13)} sharingPersona={sharingPersona} selectedApps={selectedApps} />,
    <Screen16 onNext={() => go(13)} onPreview={() => go(17)} sharingPersona={sharingPersona} />,
    <Screen17 onDone={() => go(13)} onBackToSender={() => go(16)} sharingPersona={sharingPersona} selectedApps={selectedApps} />,
  ];

  return (
    <PhoneFrame>
      <StatusBar dark={isDark} />
      <div className="absolute inset-0 top-[44px] overflow-hidden">
        {screens[screen]}
      </div>
    </PhoneFrame>
  );
}
