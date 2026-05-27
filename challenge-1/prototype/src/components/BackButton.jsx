export default function BackButton({ onBack, dark = false }) {
  if (!onBack) return null;
  return (
    <button
      onClick={onBack}
      className={`absolute top-14 left-4 z-10 p-2 rounded-full ${dark ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-black/10"}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}
