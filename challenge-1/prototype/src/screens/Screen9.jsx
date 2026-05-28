import { useState } from "react";
import Logo from "../components/Logo";
import BottomCTA from "../components/BottomCTA";

export default function Screen9({ selectedApps, onNext }) {
  const [toast, setToast] = useState("");
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };
  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col px-6 pt-4 pb-8 animate-slide-in">
      <Logo />
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">First focus win complete. 🎯</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          You protected 10 minutes from your biggest distractions.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: "⏱", value: "10 min", label: "focused" },
            { icon: "🚧", value: "1", label: "blocked" },
            { icon: "🛡️", value: selectedApps.length, label: "protected" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-bold text-gray-900 text-lg">{s.value}</div>
              <div className="text-gray-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 italic mb-4">
          Freedom works best when it shows up for you every day.
        </p>
        <div className="flex flex-col gap-3">
          <BottomCTA label="Set up tomorrow's shield →" onClick={onNext} />
          <button
            onClick={() => showToast("Share link copied!")}
            className="w-full text-center text-sm text-[#F4A429] font-medium mt-1 py-1"
          >
            Invite a friend to focus with me →
          </button>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-4">Freedom.to — Take back your time</p>
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
