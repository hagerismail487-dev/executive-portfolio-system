export default function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Top Left Dots */}
      <div className="absolute left-8 top-8 opacity-30">
        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: 49 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#C8DBFF]"
            />
          ))}
        </div>
      </div>

      {/* Top Right Glow */}
      <div className="absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#EAF3FF] blur-[120px] opacity-70" />

      {/* Bottom Left Glow */}
      <div className="absolute -left-32 -bottom-32 h-[320px] w-[320px] rounded-full bg-[#F3F8FF] blur-[120px] opacity-80" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.025] bg-[url('/images/noise.png')]" />

    </div>
  );
}