"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] flex justify-between items-center px-8 py-3 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-neutral-900/80" : "py-3"
      }`}
    >
      <div className="text-xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(143,245,255,0.5)] font-headline uppercase">
        ASTRAL_PORTFOLIO
      </div>
      <div className="hidden md:flex items-center gap-8 font-headline tracking-tighter uppercase text-sm">
        <Link href="#identity" className="text-cyan-400 border-b-2 border-cyan-400/50 pb-1 transition-all">
          Identity
        </Link>
        <Link href="#journey" className="text-neutral-400 hover:text-white transition-colors">
          Journey
        </Link>
        <Link href="#stack" className="text-neutral-400 hover:text-white transition-colors">
          Stack
        </Link>
        <Link href="#works" className="text-neutral-400 hover:text-white transition-colors">
          Works
        </Link>
        <Link href="#connect" className="text-neutral-400 hover:text-white transition-colors">
          Connect
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-neutral-400 hover:text-primary transition-all cursor-pointer">
          terminal
        </button>
        <button className="bg-primary text-on-primary-container px-5 py-2 rounded-full font-headline text-xs font-bold uppercase hover:scale-105 hover:shadow-[0_0_15px_rgba(143,245,255,0.3)] transition-all">
          Connect Wallet
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
