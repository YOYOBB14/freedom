import { useState } from "react";

export default function Screen5({ onNext, setPermissionGranted }) {
  const [androidStep, setAndroidStep] = useState(0);
  const [denied, setDenied] = useState(false);

  const handleAllow = () => {
    setPermissionGranted(true);
    setTimeout(() => onNext(), 400);
  };

  return (
    <div className="h-full bg-[#121212] flex flex-col relative overflow-hidden" style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Android status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#121212]">
        <span className="text-white text-xs font-medium">11:54</span>
        <div className="flex gap-1 text-white text-xs">
          <span>▪▪▪</span><span>WiFi</span><span>🔋</span>
        </div>
      </div>

      {androidStep === 0 && (
        <div className="flex-1 flex flex-col">
          <div className="flex items-center px-4 py-3 border-b border-white/10">
            <span className="text-white text-sm">← Accessibility</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-3 text-xs text-white/40 uppercase tracking-wide">Downloaded Apps</div>
            <button
              onClick={() => setAndroidStep(1)}
              className="w-full flex items-center justify-between px-4 py-4 hover:bg-white/5 active:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🦋</span>
                <span className="text-white text-sm">Freedom</span>
              </div>
              <span className="text-white/50 text-sm">Off</span>
            </button>
          </div>
        </div>
      )}

      {androidStep === 1 && (
        <div className="flex-1 flex flex-col">
          <div className="flex items-center px-4 py-3 border-b border-white/10">
            <span className="text-white text-sm">← Freedom</span>
          </div>
          <div className="flex-1 px-4">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-sm">Use Freedom</span>
              <button
                onClick={() => setAndroidStep(2)}
                className="w-12 h-6 rounded-full bg-gray-600 flex items-center px-1 transition-all"
              >
                <div className="w-4 h-4 rounded-full bg-white shadow" />
              </button>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Enabling this permission will allow Freedom to block websites and apps during your active sessions.
            </p>
          </div>
        </div>
      )}

      {androidStep === 2 && (
        <div className="flex-1 flex flex-col relative">
          <div className="flex items-center px-4 py-3 border-b border-white/10">
            <span className="text-white text-sm">← Freedom</span>
          </div>
          {/* System overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-6 z-10">
            {/* System dialog */}
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-base">🦋</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">
                    Allow Freedom to have full control of your device?
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Full control is appropriate for apps that help you with accessibility needs, but not for most apps.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-base">👁</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">View and control screen</p>
                      <p className="text-xs text-gray-500">It can read all content on the screen and display content over other apps.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-base">✋</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">View and perform actions</p>
                      <p className="text-xs text-gray-500">It can track your interactions with an app or a hardware sensor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100">
                {denied ? (
                  <div className="p-4">
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      No problem — you can enable this later in Settings → Accessibility → Freedom
                    </p>
                    <button
                      onClick={() => { setDenied(false); setAndroidStep(0); }}
                      className="w-full py-2 text-[#1565C0] text-sm font-medium"
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <>
                    <button onClick={handleAllow} className="w-full py-3 text-[#1565C0] text-sm font-semibold border-b border-gray-100">Allow</button>
                    <button onClick={() => setDenied(true)} className="w-full py-3 text-[#1565C0] text-sm font-medium border-b border-gray-100">Deny</button>
                    <button className="w-full py-3 text-[#1565C0] text-sm font-medium">Uninstall</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
