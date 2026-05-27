export default function Logo({ dark = false }) {
  return (
    <div className={`flex items-center gap-1.5 ${dark ? "text-white" : "text-gray-900"}`}>
      <span className="text-xl">🦋</span>
      <span className="font-light text-lg tracking-wide">freedom</span>
    </div>
  );
}
