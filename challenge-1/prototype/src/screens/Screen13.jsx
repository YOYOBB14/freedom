import { useState, useEffect } from "react";
import Logo from "../components/Logo";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const DURATIONS = ["15 MIN", "25 MIN", "1 HR", "2 HRS", "5 HRS", "24 HRS", "✏ CUSTOM"];

const CITIES = [
  "Athens", "Berlin", "Brussels", "Denver", "London",
  "Los Angeles", "New York", "Reykjavik", "San Francisco", "Santiago", "Stockholm",
];

const SETTINGS_ROWS = [
  { icon: "👤", label: "Account & Preferences", msg: "Opening account..." },
  { icon: "🛡️", label: "Blocking Settings",     msg: "Opening blocking settings..." },
  { icon: "🔔", label: "Notifications",           msg: "Opening notification settings..." },
  { icon: "ℹ️",  label: "More Info",               msg: "Opening help..." },
];

const NAV_TABS = [
  { id: "today",      icon: "🌅", label: "Today" },
  { id: "sessions",   icon: "📋", label: "Sessions" },
  { id: "blocklists", icon: "🛡️", label: "Blocklists" },
  { id: "sounds",     icon: "🎵", label: "Sounds" },
  { id: "settings",   icon: "⚙️", label: "Settings" },
];

// ─── Today ────────────────────────────────────────────────────────────────────

function TodayTab({ onStartMission, showToast, timeDisplay, sessionActivating, intent }) {
  return (
    <div className="px-6 pb-6">
      <div className="mt-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{getGreeting()}</h1>
        <p className="text-sm text-[#6B6B6B] mt-0.5">You've started building a focus routine.</p>
      </div>

      <button
        onClick={onStartMission}
        className="w-full py-4 rounded-full bg-[#8CC63F] text-white font-bold uppercase tracking-wide text-sm mb-4 active:scale-95 transition-all"
      >
        Start a new mission
      </button>

      <div className="bg-[#F0FAF0] border border-[#C6E8C6] rounded-2xl p-4 mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F]" />
          <p className="text-xs font-medium text-green-700 uppercase tracking-wider">TODAY</p>
        </div>
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
            1 protected day
          </span>
        </div>
      </div>

      <div className="bg-[#FFFBF0] border border-[#F4D9A0] rounded-2xl p-4 mb-6">
        <p className="text-xs font-medium text-amber-700 uppercase tracking-wider mb-2">TOMORROW</p>
        {sessionActivating ? (
          <>
            <div className="flex items-center gap-2 mb-1">
              <span>🛡️</span>
              <span className="text-sm font-medium text-green-700">🟢 Session starting soon...</span>
            </div>
            <p className="text-xs text-gray-400 italic ml-6">Your focus shield is activating.</p>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <span>🛡️</span>
              <span className="text-sm font-medium text-gray-800">Shield scheduled: {timeDisplay}</span>
            </div>
            <p className="text-sm text-[#92661A] italic ml-6">Starts automatically — no need to remember.</p>
          </>
        )}
      </div>

      {/* Quick resume card */}
      {intent && (
        <button
          onClick={onStartMission}
          className="w-full bg-white border border-[#E5E5E5] rounded-2xl p-3 flex items-center gap-3 mb-3 active:bg-gray-50 transition-all"
        >
          <span className="text-2xl">{intent.emoji}</span>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-gray-900">Resume: {intent.name}</p>
            <p className="text-xs text-gray-400">Your last mission: {intent.name} · 10 min</p>
          </div>
          <span className="text-[#8CC63F] text-lg">▶</span>
        </button>
      )}

      <button
        onClick={onStartMission}
        className="w-full py-4 rounded-full bg-[#8CC63F] text-white font-bold uppercase tracking-wide text-sm active:scale-95 transition-all"
      >
        Start another mission
      </button>
      <button
        onClick={() => showToast("Coming soon")}
        className="w-full text-center text-sm text-[#F4A429] font-medium mt-3 py-1"
      >
        Customize my shield
      </button>
    </div>
  );
}

// ─── Sessions ─────────────────────────────────────────────────────────────────

function SessionsTab({ showToast }) {
  const [subTab, setSubTab] = useState("now");
  const [duration, setDuration] = useState("25 MIN");
  const [durationSub, setDurationSub] = useState("length");

  const Pill = ({ id, label }) => (
    <button
      onClick={() => setSubTab(id)}
      className={`flex-1 py-1.5 rounded-full text-sm font-medium transition-all ${
        subTab === id ? "bg-[#2D5A27] text-white" : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="px-4 pb-6">
      <h2 className="text-lg font-medium text-gray-900 text-center pt-4 pb-3">Sessions</h2>

      <div className="flex gap-1 mb-4 bg-gray-100 rounded-full p-1">
        <Pill id="now" label="NOW" />
        <Pill id="later" label="LATER" />
        <Pill id="recurring" label="RECURRING" />
      </div>

      {subTab === "now" && (
        <>
          <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
            <div className="flex justify-between items-center py-1 mb-2">
              <span className="text-sm text-gray-400">Name</span>
              <span className="text-sm text-gray-500">Thursday 25m Session</span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span className="text-sm text-gray-800">Blocklists</span>
              </div>
              <span className="text-sm text-[#8CC63F]">Choose ›</span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span className="text-sm text-gray-800">Devices</span>
              </div>
              <span className="text-sm text-[#8CC63F]">This Device ›</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
            <div className="flex gap-2 mb-3">
              {[["length", "LENGTH"], ["end-time", "END TIME"]].map(([id, lbl]) => (
                <button
                  key={id}
                  onClick={() => setDurationSub(id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    durationSub === id ? "bg-[#2D5A27] text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {DURATIONS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    duration === d ? "bg-[#2D5A27] text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => showToast("Session started!")}
            className="w-full py-4 rounded-full bg-[#8CC63F] text-white font-bold uppercase tracking-wide text-sm active:scale-95 transition-all"
          >
            Start the Session
          </button>
        </>
      )}

      {subTab === "later" && (
        <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
          <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
            <div className="flex justify-between items-center py-1 mb-2">
              <span className="text-sm text-gray-400">Name</span>
              <span className="text-sm text-gray-500">Thursday 25m Session</span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span className="text-sm text-gray-800">Start Time</span>
              </div>
              <span className="text-sm text-[#8CC63F]">6:00 PM ›</span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span className="text-sm text-gray-800">Blocklists</span>
              </div>
              <span className="text-sm text-[#8CC63F]">Choose ›</span>
            </div>
          </div>
          {/* Premium overlay */}
          <div
            className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-4 pt-16"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(245,242,236,0.98) 28%)" }}
          >
            <span className="text-3xl mb-2">🦋</span>
            <p className="font-medium text-gray-900 text-base mb-1">Upgrade to Premium</p>
            <p className="text-xs text-gray-500 text-center mb-4 px-6 leading-relaxed">
              Starting sessions later allows you to create the right schedule for your day.
            </p>
            <button
              onClick={() => showToast("Premium feature — coming soon")}
              className="px-6 py-3 rounded-full bg-[#F4A429] text-white font-bold text-sm uppercase tracking-wide active:scale-95 transition-all"
            >
              View Upgrade Options
            </button>
          </div>
        </div>
      )}

      {subTab === "recurring" && (
        <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
          <p className="font-medium text-gray-800 mb-3">Recommended Sessions</p>
          {[
            { icon: "💻", name: "Focused Work",        schedule: "9:00 AM - 5:00 PM / Weekdays" },
            { icon: "🌅", name: "Deep Work Mornings",  schedule: "6:00 AM - 10:00 AM / Weekdays" },
            { icon: "🛏", name: "Better Sleep",        schedule: "9:00 PM - 7:00 AM / Every day" },
          ].map((s) => (
            <button
              key={s.name}
              onClick={() => showToast("Requires Premium")}
              className="w-full bg-white rounded-xl p-4 mb-2 flex items-center justify-between shadow-sm active:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{s.icon}</span>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.schedule}</p>
                </div>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </button>
          ))}
          {/* Premium overlay */}
          <div
            className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-4 pt-16"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(245,242,236,0.98) 28%)" }}
          >
            <span className="text-3xl mb-2">🦋</span>
            <p className="font-medium text-gray-900 text-base mb-1">Upgrade to Premium</p>
            <p className="text-xs text-gray-500 text-center mb-4 px-6 leading-relaxed">
              Recurring sessions help you build lasting focus habits automatically.
            </p>
            <button
              onClick={() => showToast("Premium feature — coming soon")}
              className="px-6 py-3 rounded-full bg-[#F4A429] text-white font-bold text-sm uppercase tracking-wide active:scale-95 transition-all"
            >
              View Upgrade Options
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Blocklists ───────────────────────────────────────────────────────────────

function BlocklistsTab({ showToast }) {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="px-4 pb-6">
      <h2 className="text-lg font-medium text-gray-900 text-center pt-4 pb-3">Blocklists</h2>
      <div className="flex flex-col items-center mt-16">
        <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <span className="text-2xl text-gray-300">🛡</span>
        </div>
        <p className="font-medium text-lg text-gray-900 mt-4">No blocklists yet</p>
        <p className="text-sm text-gray-500 text-center mt-2 px-8 leading-relaxed">
          Blocklists allow you to tailor which apps and websites your sessions will block.
        </p>

        {showInput ? (
          <div className="mt-4 w-full px-4">
            <input
              type="text"
              placeholder="Name your blocklist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-2 outline-none bg-white"
              style={{ caretColor: "#8CC63F" }}
            />
            <button
              onClick={() => { showToast("Blocklist created!"); setShowInput(false); setName(""); }}
              className="w-full py-3 rounded-full bg-[#8CC63F] text-white font-bold text-sm uppercase tracking-wide active:scale-95 transition-all"
            >
              Create
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="mt-6 px-8 py-3 rounded-full bg-[#8CC63F] text-white font-bold text-sm uppercase tracking-wide active:scale-95 transition-all"
          >
            Create a Blocklist
          </button>
        )}

        <button
          onClick={() => showToast("Opening help...")}
          className="mt-4 text-sm text-[#8CC63F] font-medium uppercase tracking-wide"
        >
          Learn about Blocklists
        </button>
      </div>
    </div>
  );
}

// ─── Sounds ───────────────────────────────────────────────────────────────────

function SoundsTab() {
  const [nowPlaying, setNowPlaying] = useState(null);

  return (
    <div className="px-4 pb-28 relative">
      <h2 className="text-lg font-medium text-gray-900 text-center pt-4 pb-3">Focus Sounds</h2>
      <p className="font-medium text-gray-800 mb-2">☕ Coffee Shops</p>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        {CITIES.map((city, i) => (
          <button
            key={city}
            onClick={() => setNowPlaying(nowPlaying === city ? null : city)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
              i < CITIES.length - 1 ? "border-b border-gray-100" : ""
            } ${nowPlaying === city ? "bg-green-50" : "active:bg-gray-50"}`}
          >
            <span className={`text-base ${nowPlaying === city ? "text-[#8CC63F] font-medium" : "text-[#1C1C1C]"}`}>
              {city}
            </span>
            {nowPlaying === city && <span className="text-[#8CC63F] text-sm">▶</span>}
          </button>
        ))}
      </div>

      {nowPlaying && (
        <div className="absolute bottom-16 left-4 right-4 bg-[#1A2E1A] rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <span className="text-[#8CC63F] text-sm font-medium">▶ Now playing: {nowPlaying}</span>
          <button onClick={() => setNowPlaying(null)} className="text-gray-400 text-xs">
            ■ Stop
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function SettingsTab({ showToast }) {
  return (
    <div className="px-4 pb-6">
      <h2 className="text-lg font-medium text-gray-900 text-center pt-4 pb-3">Settings</h2>
      <p className="font-medium text-gray-800 mb-2">Configure Freedom</p>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
        {SETTINGS_ROWS.map((row, i) => (
          <button
            key={row.label}
            onClick={() => showToast(row.msg)}
            className={`w-full flex items-center justify-between px-4 py-3 active:bg-gray-50 ${
              i < SETTINGS_ROWS.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span>{row.icon}</span>
              <span className="text-sm text-gray-800">{row.label}</span>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </button>
        ))}
      </div>

      {/* Premium upsell card */}
      <div className="bg-amber-50 rounded-2xl p-4 mb-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex flex-col gap-1 flex-shrink-0">
            {["#E1306C", "#1DA1F2", "#8CC63F"].map((c) => (
              <div key={c} className="w-8 h-8 rounded-lg" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm text-gray-900 leading-snug">
              Unlock Your Potential with Premium
            </p>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Deepen your focus and make productivity a habit with powerful Premium features.
            </p>
          </div>
        </div>
        <button
          onClick={() => showToast("Opening premium options...")}
          className="w-full py-3 rounded-full bg-[#F4A429] text-white font-bold text-sm uppercase tracking-wide active:scale-95 transition-all"
        >
          👑 Unlock Premium
        </button>
      </div>

      <p className="font-medium text-gray-800 mb-2">Share Freedom</p>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() => showToast("Gift feature coming soon")}
          className="w-full text-left px-4 py-3 text-sm text-gray-400 active:bg-gray-50"
        >
          Gift Freedom
        </button>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Screen13({ onStartMission, tomorrowTime, intent, onChallengeNav }) {
  const [activeTab, setActiveTab] = useState("today");
  const [toast, setToast] = useState("");
  const [timeBannerVisible, setTimeBannerVisible] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [sessionActivating, setSessionActivating] = useState(false);

  const timeDisplay = tomorrowTime?.time || "9:00 AM";

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setTimeBannerVisible(true), 5000);
    const t2 = setTimeout(() => setNotifVisible(true), 6500);
    const t3 = setTimeout(() => setNotifVisible(false), 11500);
    const t4 = setTimeout(() => setSessionActivating(true), 11800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="h-full bg-[#F5F2EC] flex flex-col animate-slide-in relative overflow-hidden">

      {/* Time-skip banner — slides in from top after 5s, stays visible */}
      <div
        className="flex-shrink-0 text-center text-xs text-gray-500 py-2 z-30 bg-[#F5F2EC]"
        style={{
          borderBottom: "0.5px solid #E5E5E5",
          maxHeight: timeBannerVisible ? 40 : 0,
          overflow: "hidden",
          opacity: timeBannerVisible ? 1 : 0,
          transition: "max-height 300ms ease-out, opacity 300ms ease-out",
        }}
      >
        ⏩ A few minutes before your scheduled session...
      </div>

      {/* Proactive push notification — slides in from top at 6.5s, out at 11.5s */}
      <div
        className="absolute left-3 right-3 z-50 cursor-pointer"
        style={{
          top: 56,
          transform: notifVisible ? "translateY(0)" : "translateY(-160px)",
          transition: notifVisible
            ? "transform 350ms ease-out"
            : "transform 300ms ease-in",
        }}
        onClick={onChallengeNav}
      >
        <div className="bg-[#1C1C1C] rounded-2xl shadow-lg px-4 py-3 flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-[#8CC63F] flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-sm">🦋</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/50 text-xs mb-0.5">Freedom</p>
            <p className="text-white text-sm font-medium">Your focus session starts in 5 minutes.</p>
            <p className="text-white/60 text-xs mt-0.5">
              Study time shield activates at {timeDisplay}. Get ready to focus.
            </p>
            <p className="text-white/50 text-xs mt-1">
              Want extra motivation? Invite a friend to join today's challenge.
            </p>
          </div>
          <span className="text-white/40 text-xs flex-shrink-0">5m</span>
        </div>
      </div>

      {/* Top bar — only on Today tab */}
      {activeTab === "today" && (
        <div className="flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0">
          <Logo />
          <button className="text-gray-400 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium">
            ?
          </button>
        </div>
      )}

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto pb-16">
        {activeTab === "today" && (
          <TodayTab
            onStartMission={onStartMission}
            showToast={showToast}
            timeDisplay={timeDisplay}
            sessionActivating={sessionActivating}
            intent={intent}
          />
        )}
        {activeTab === "sessions"   && <SessionsTab   showToast={showToast} />}
        {activeTab === "blocklists" && <BlocklistsTab showToast={showToast} />}
        {activeTab === "sounds"     && <SoundsTab />}
        {activeTab === "settings"   && <SettingsTab   showToast={showToast} />}
      </div>

      {/* Bottom nav */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white z-20"
        style={{ borderTop: "0.5px solid #E5E5E5" }}
      >
        <div className="flex justify-around items-center px-2 py-2">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-0.5 px-2 py-1"
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className={`text-[10px] font-medium ${activeTab === tab.id ? "text-[#8CC63F]" : "text-gray-400"}`}>
                {tab.label}
              </span>
              {activeTab === tab.id && <div className="w-1 h-1 rounded-full bg-[#8CC63F]" />}
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
