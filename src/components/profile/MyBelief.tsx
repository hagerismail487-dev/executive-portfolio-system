import Image from "next/image";

export default function MyBelief() {
  return (
    <section
      aria-labelledby="my-belief-title"
      className="
  relative
  mt-0
  w-full
  overflow-hidden
  rounded-[6px]
  bg-[#f5f8fc]
  px-6
  py-8
  sm:px-10
  lg:mt-6
  lg:px-[72px]
  lg:py-[38px]
"
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(rgba(25,93,170,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(25,93,170,0.045)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1120px]
          text-center
        "
      >
        {/* Section label */}
        <div
          className="
            mb-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-[28px]
              bg-[#0867e8]
            "
          />

          <h2
            id="my-belief-title"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#075bd8]
            "
          >
            My Belief
          </h2>

          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-[28px]
              bg-[#0867e8]
            "
          />
        </div>

        {/* Quote */}
        <blockquote
          className="
            mx-auto
            max-w-[1080px]
            text-[25px]
            font-bold
            leading-[1.22]
            tracking-[-0.035em]
            text-[#102653]
            sm:text-[30px]
            lg:text-[36px]
          "
        >
          <span>
            “The true value of data is not in the numbers it contains,
          </span>

          <br />

          <span>
            but in the{" "}
            <span className="text-[#075bd8]">
              decisions it enables.
            </span>
            ”
          </span>
        </blockquote>

        {/* Signature */}
        <div
          className="
            mx-auto
            mt-3
            flex
            max-w-[1080px]
            justify-end
            pr-[12%]
            sm:pr-[15%]
            lg:pr-[17%]
          "
        >
         <Image
  src="/identity/signature.png"
  alt="Hager Ismail"
  width={180}
  height={65}
  priority
  className="
    h-auto
    w-[145px]
    object-contain
    sm:w-[185px]
    lg:w-[200px]
  "
/>
        </div>

        {/* Minimal divider */}
        <div
          aria-hidden="true"
          className="
            mx-auto
            mt-1
            h-[2px]
            w-[42px]
            bg-[#0867e8]
          "
        />
      </div>
    </section>
  );
}




