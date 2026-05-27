export default function ProgressDots({ total, current }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current ? "w-4 bg-[#8CC63F]" : i < current ? "w-1.5 bg-[#8CC63F]/40" : "w-1.5 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
