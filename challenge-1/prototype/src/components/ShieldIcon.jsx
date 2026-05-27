export default function ShieldIcon({ size = 120, glowing = false, children }) {
  return (
    <div className={`relative flex items-center justify-center ${glowing ? "animate-shield-glow" : ""}`} style={{ width: size, height: size * 1.2 }}>
      <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="none">
        <path
          d="M50 5 L90 20 L90 60 C90 85 70 105 50 115 C30 105 10 85 10 60 L10 20 Z"
          stroke="#8CC63F"
          strokeWidth="3"
          fill="rgba(140,198,63,0.08)"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
