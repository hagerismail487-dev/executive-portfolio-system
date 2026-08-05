interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  hoverColor?: string;
}

export default function SocialIcon({
  href,
  children,
  hoverColor = "hover:border-[#3B82F6] hover:bg-[#3B82F6]/15",
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 ${hoverColor}`}
    >
      {children}
    </a>
  );
}
