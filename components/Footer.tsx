"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-12 flex flex-col md:flex-row justify-between items-center px-12 gap-6 bg-transparent">
      <div className="font-body text-[10px] tracking-[0.2em] uppercase opacity-50 text-neutral-500">
        © 2024 DIGITAL_ASTRAL. ARCHIVED IN THE NEBULA.
      </div>
      <div className="flex items-center gap-8 font-body text-[10px] tracking-[0.2em] uppercase">
        <Link href="#" className="text-neutral-500 hover:text-cyan-300 hover:opacity-100 transition-all">
          Github
        </Link>
        <Link href="#" className="text-neutral-500 hover:text-cyan-300 hover:opacity-100 transition-all">
          Mirror
        </Link>
        <Link href="#" className="text-neutral-500 hover:text-cyan-300 hover:opacity-100 transition-all">
          Farcaster
        </Link>
        <Link href="#" className="text-neutral-500 hover:text-cyan-300 hover:opacity-100 transition-all">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
