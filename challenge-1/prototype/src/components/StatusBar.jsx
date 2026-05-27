export default function StatusBar({ dark = false }) {
  const textColor = dark ? "text-white" : "text-gray-800";
  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold ${textColor}`} style={{ height: 44 }}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span>▪▪▪</span>
        <span>WiFi</span>
        <span>🔋</span>
      </div>
    </div>
  );
}
