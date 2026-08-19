import {
  BarChart3,
  Building2,
  Database,
  Settings2,
  UsersRound,
} from "lucide-react";

type SystemNodeProps = {
  label: string;
  icon: React.ElementType;
  position: string;
};

const systemNodes: SystemNodeProps[] = [
  {
    label: "BUSINESS\nUNDERSTANDING",
    icon: UsersRound,
    position:
      "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "PROCESSES &\nSTRUCTURE",
    icon: Settings2,
    position:
      "left-0 top-1/2 -translate-x-1/8 -translate-y-1/3",
  },
  {
    label: "DATA &\nREPORTING",
    icon: Database,
    position:
      "right-0 top-1/2 translate-x-1/8 -translate-y-1/3",
  },
  {
    label: "EXECUTIVE\nDECISIONS",
    icon: BarChart3,
    position:
      "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  },
];

function SystemNode({
  label,
  icon: Icon,
  position,
}: SystemNodeProps) {
  return (
    <div
      className={`absolute ${position} z-20 flex w-[100px] flex-col items-center`}
    >
      <div
        className="
          flex h-[48px] w-[48px] items-center justify-center
          rounded-full
          border border-white
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.18)]
        "
      >
        <Icon
          className="h-[23px] w-[23px] !text-[#0864e8]"
          strokeWidth={2.2}
        />
      </div>

      <span
        className="
          mt-2.5
          whitespace-pre-line
          text-center
          text-[9px]
          font-bold
          uppercase
          leading-[1.2]
          tracking-[-0.01em]
          !text-white
        "
      >
        {label}
      </span>
    </div>
  );
}

function BusinessSystemsDiagram() {
  return (
    <div
      className="
        relative
        h-[250px]
        w-[470px]
        max-w-full
        shrink-0
      "
      aria-label="Business Systems framework"
    >
      {/* Outer orbit */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[215px]
          w-[215px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#3f94ff]/40
        "
      />

      {/* Inner orbit */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[170px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#3f94ff]/30
        "
      />

      {/* Dashed orbit */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[215px]
          w-[215px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-[#3f94ff]/35
        "
      />

      {/* Top connection */}
      <div
        className="
          absolute
          left-1/2
          top-[27px]
          h-[73px]
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-[#3f94ff]/20
          via-[#3f94ff]
          to-[#3f94ff]/60
        "
      />

      {/* Left connection */}
      <div
        className="
          absolute
          left-[104px]
          top-1/2
          h-px
          w-[86px]
          -translate-y-1/2
          bg-gradient-to-r
          from-[#3f94ff]/20
          via-[#3f94ff]
          to-[#3f94ff]/60
        "
      />

      {/* Right connection */}
      <div
        className="
          absolute
          right-[104px]
          top-1/2
          h-px
          w-[86px]
          -translate-y-1/2
          bg-gradient-to-l
          from-[#3f94ff]/20
          via-[#3f94ff]
          to-[#3f94ff]/60
        "
      />

      {/* Bottom connection */}
      <div
        className="
          absolute
          bottom-[27px]
          left-1/2
          h-[73px]
          w-px
          -translate-x-1/2
          bg-gradient-to-t
          from-[#3f94ff]/20
          via-[#3f94ff]
          to-[#3f94ff]/60
        "
      />

      {/* Connection points */}
      <span
        className="
          absolute
          left-1/2
          top-[97px]
          z-20
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          bg-[#2585ff]
          shadow-[0_0_10px_rgba(37,133,255,0.8)]
        "
      />

      <span
        className="
          absolute
          left-[184px]
          top-1/2
          z-20
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-[#2585ff]
          shadow-[0_0_10px_rgba(37,133,255,0.8)]
        "
      />

      <span
        className="
          absolute
          right-[184px]
          top-1/2
          z-20
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-[#2585ff]
          shadow-[0_0_10px_rgba(37,133,255,0.8)]
        "
      />

      <span
        className="
          absolute
          bottom-[97px]
          left-1/2
          z-20
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          bg-[#2585ff]
          shadow-[0_0_10px_rgba(37,133,255,0.8)]
        "
      />

      {/* Central node */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-30
          flex
          h-[116px]
          w-[116px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#64a8ff]/70
          bg-[radial-gradient(circle_at_35%_28%,#2879ed_0%,#155bc4_50%,#0a4296_100%)]
          shadow-[0_0_0_12px_rgba(50,126,235,0.12),0_0_0_24px_rgba(50,126,235,0.07),0_20px_45px_rgba(0,0,0,0.28)]
        "
      >
        <div className="flex flex-col items-center text-center">
          <Building2
            className="mb-2 h-[27px] w-[27px] !text-white"
            strokeWidth={1.8}
          />

          <span className="text-[12px] font-bold leading-[1.15] !text-white">
            BUSINESS
          </span>

          <span className="text-[12px] font-bold leading-[1.15] !text-white">
            SYSTEMS
          </span>
        </div>
      </div>

      {/* Surrounding nodes */}
      {systemNodes.map((node) => (
        <SystemNode
          key={node.label}
          label={node.label}
          icon={node.icon}
          position={node.position}
        />
      ))}
    </div>
  );
}

export default function ProfileHero() {
  return (
    <section
      aria-labelledby="profile-hero-title"
      className="
        relative
        isolate
        mx-4
        mt-10
        w-auto
        overflow-hidden
        rounded-[7px]
        bg-[#0a2345]
        shadow-[0_12px_40px_rgba(5,35,75,0.12)]
        sm:mx-6
        lg:mx-8
        lg:mt-12
      "
    >
      {/* Main blueprint background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_72%_45%,rgba(36,116,235,0.25),transparent_30%),linear-gradient(110deg,#0b2b55_0%,#0a2345_48%,#081d3a_100%)]
        "
      />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-30
          [background-image:linear-gradient(rgba(115,174,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(115,174,255,0.12)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Right dotted field */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-[-50px]
          -z-10
          h-[350px]
          w-[350px]
          opacity-40
          [background-image:radial-gradient(circle,rgba(56,143,255,0.65)_1px,transparent_1px)]
          [background-size:8px_8px]
          [mask-image:radial-gradient(circle,black,transparent_72%)]
        "
      />

      {/* Bottom blueprint wave */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-130px]
          left-[-5%]
          -z-10
          h-[220px]
          w-[65%]
          rounded-[50%]
          border-t
          border-[#2585ff]/20
          opacity-70
          blur-[0.2px]
        "
      />

      <div
        className="
          mx-auto
          flex
          min-h-[300px]
          max-w-[1440px]
          items-center
          justify-between
          gap-12
          px-8
          py-12
          sm:px-10
          lg:px-[72px]
          lg:py-[48px]
        "
      >
        {/* Left side */}
        <div className="relative z-10 max-w-[620px]">
          <p
            className="
              mb-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              !text-[#4ea0ff]
            "
          >
            Professional Profile
          </p>

          <h1
            id="profile-hero-title"
            className="
              max-w-[620px]
              text-[32px]
              font-bold
              leading-[1.02]
              tracking-[-0.035em]
              !text-white
              sm:text-[40px]
              lg:text-[44px]
            "
          >
            Beyond Reporting.
            <br />

            Building{" "}
            <span className="!text-[#4ea0ff]">
              Business Systems
            </span>

            <br />

            That Drive Real Impact.
          </h1>

          <p
            className="
              mt-6
              max-w-[570px]
              text-[14px]
              font-medium
              leading-[1.7]
              !text-[#edf4ff]
              sm:text-[15px]
            "
          >
            I transform complex business data into structured
            reporting systems that empower leaders to understand
            performance, make confident decisions, and create
            measurable impact.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <BusinessSystemsDiagram />
        </div>
      </div>

      {/* Mobile diagram */}
      <div className="flex h-[270px] justify-center overflow-visible px-6 pb-6 lg:hidden [&>div]:origin-center [&>div]:scale-[0.72]">
        <BusinessSystemsDiagram />
      </div>
    </section>
  );
}




