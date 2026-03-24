import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16 flex flex-col md:flex-row justify-between items-center px-12 gap-8 bg-transparent border-t border-white/5 mt-32">
      <div className="font-body text-[10px] tracking-[0.2em] uppercase opacity-40 text-neutral-400 text-center md:text-left">
        © 2024 DIGITAL_ASTRAL. ARCHIVED IN THE NEBULA.
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 font-body text-[10px] tracking-[0.2em] uppercase">
        {[
          { label: "Github", href: "#" },
          { label: "Mirror", href: "#" },
          { label: "Farcaster", href: "#" },
          { label: "LinkedIn", href: "#" }
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-neutral-500 hover:text-cyan-300 hover:opacity-100 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
