export default function BottomCTA({ label, onClick, disabled = false, variant = "primary" }) {
  if (variant === "ghost") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-40"
      >
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-full text-white font-bold uppercase tracking-wide text-sm transition-all duration-200
        ${variant === "amber"
          ? "bg-[#F4A429] hover:bg-[#e09420] active:scale-95"
          : "bg-[#8CC63F] hover:bg-[#7ab535] active:scale-95"
        }
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
      `}
    >
      {label}
    </button>
  );
}
