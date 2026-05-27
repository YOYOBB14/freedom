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

export default function App() {
  const [screen, setScreen] = useState(0);
  const [selectedApps, setSelectedApps] = useState([]);
  const [shieldLevel, setShieldLevel] = useState("real");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [blockAttempted, setBlockAttempted] = useState(false);

  const go = (n) => setScreen(n);

  const darkScreens = [0, 2, 4, 5, 6, 7, 8];
  const isDark = darkScreens.includes(screen);

  const screens = [
    <Screen0 onNext={() => go(1)} />,
    <Screen1 onNext={() => go(2)} onBack={() => go(0)} selectedApps={selectedApps} setSelectedApps={setSelectedApps} />,
    <Screen2 onNext={() => go(3)} onBack={() => go(1)} selectedApps={selectedApps} />,
    <Screen3 onNext={() => shieldLevel === "light" ? go(6) : go(4)} onBack={() => go(2)} shieldLevel={shieldLevel} setShieldLevel={setShieldLevel} />,
    <Screen4 onNext={() => go(5)} onBack={() => go(3)} />,
    <Screen5 onNext={() => go(6)} setPermissionGranted={setPermissionGranted} />,
    <Screen6 onNext={() => go(7)} onBack={() => go(3)} selectedApps={selectedApps} shieldLevel={shieldLevel} />,
    <Screen7 onNext={() => go(8)} onSkip={() => go(9)} selectedApps={selectedApps} setBlockAttempted={setBlockAttempted} />,
    <Screen8 onReturn={() => go(7)} onEnd={() => go(9)} selectedApps={selectedApps} />,
    <Screen9 selectedApps={selectedApps} />,
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
