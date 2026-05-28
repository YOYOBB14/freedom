import { useState } from "react";
import Logo from "../components/Logo";
import BottomCTA from "../components/BottomCTA";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const NAV_TABS = [
  { icon: "🌅", label: "Today", active: true },
  { icon: "📋", label: "Sessions", active: false },
  { icon: "🛡️", label: "Blocklists", active: false },
  { icon: "🎵", label: "Sounds", active: false },
  { icon: "⚙️", label: "Settings", active: false },
];

export default function Screen13({ onStartMission, tomorrowTime }) {
  const [toast, setToast] = useState("");
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const timeDisplay = tomorrowTime?.time || "tomorrow";

  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in relative">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0">
        <Logo />
        <button className="text-gray-400 text-lg font-medium w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm">
          ?
        </button>
      </div>

      {/* Scrollable content — pb-20 clears the bottom nav */}
      <div className="flex-1 overflow-y-auto px-6 pb-20">
        <div className="mt-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{getGreeting()}</h1>
          <p className="text-sm text-gray-400 mt-0.5">Welcome to a new day</p>
        </div>

        {/* Today's Win card */}
        <div className="bg-[#F0FAF0] border border-[#C6E8C6] rounded-2xl p-4 mb-3">
          <p className="text-xs font-medium text-green-700 uppercase tracking-wider mb-2">TODAY</p>
          <div className="flex items-center gap-2 mb-1.5">
            <span>⏱</span>
            <span className="text-sm text-gray-800">10 min protected today</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>🚧</span>
              <span className="text-sm text-gray-800">1 distraction blocked</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              🔥 Day 1 streak
            </span>
          </div>
        </div>

        {/* Tomorrow's Shield card */}
        <div className="bg-[#FFFBF0] border border-[#F4D9A0] rounded-2xl p-4 mb-6">
          <p className="text-xs font-medium text-amber-700 uppercase tracking-wider mb-2">TOMORROW</p>
          <div className="flex items-center gap-2 mb-1">
            <span>🛡️</span>
            <span className="text-sm font-medium text-gray-800">Shield scheduled: {timeDisplay}</span>
          </div>
          <p className="text-xs text-gray-400 italic ml-6">
            Starts automatically — no need to remember.
          </p>
        </div>

        {/* Quick actions */}
        <BottomCTA label="Start another mission" onClick={onStartMission} />
        <button
          onClick={() => showToast("Coming soon")}
          className="w-full text-center text-sm text-[#F4A429] font-medium mt-3 py-1"
        >
          Customize my shield
        </button>
      </div>

      {/* Bottom nav — fixed to bottom of phone frame */}
      <div className="absolute bottom-0 left-0 right-0 bg-white flex-shrink-0" style={{ borderTop: "0.5px solid #E5E5E5" }}>
        <div className="flex justify-around items-center px-2 py-2">
          {NAV_TABS.map((tab) => (
            <button key={tab.label} className="flex flex-col items-center gap-0.5 px-2 py-1">
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className={`text-[10px] font-medium ${tab.active ? "text-[#8CC63F]" : "text-gray-400"}`}>
                {tab.label}
              </span>
              {tab.active && <div className="w-1 h-1 rounded-full bg-[#8CC63F]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-lg z-50 whitespace-nowrap">
          {toast}
        </div>
      )}
    </div>
  );
}
