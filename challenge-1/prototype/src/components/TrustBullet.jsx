export default function TrustBullet({ text, highlight }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-base">✅</span>
      <p className="text-sm text-white/90 leading-relaxed">
        {text}
        {highlight && <span className="text-[#F4A429] font-bold"> {highlight}</span>}
      </p>
    </div>
  );
}
