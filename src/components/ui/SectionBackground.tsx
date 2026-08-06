export default function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ================================= */}
      {/* Top Left Dots */}
      {/* ================================= */}

      <div className="absolute left-6 top-6 opacity-20">

        <div className="grid grid-cols-7 gap-3">

          {Array.from({ length: 49 }).map((_, i) => (

            <div
              key={i}
              className="h-1 w-1 rounded-full bg-[#C8DBFF]"
            />

          ))}

        </div>

      </div>

      {/* ================================= */}
      {/* Top Right Glow */}
      {/* ================================= */}

      <div
        className="
          absolute

          -right-20
          -top-20

          h-[300px]
          w-[300px]

          rounded-full

          bg-[#EAF3FF]

          opacity-60

          blur-[110px]
        "
      />

      {/* ================================= */}
      {/* Bottom Left Glow */}
      {/* ================================= */}

      <div
        className="
          absolute

          -bottom-20
          -left-20

          h-[260px]
          w-[260px]

          rounded-full

          bg-[#F3F8FF]

          opacity-70

          blur-[110px]
        "
      />
            {/* ================================= */}
      {/* Noise Texture */}
      {/* ================================= */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          bg-[url('/images/noise.png')]
        "
      />

    </div>
  );
}