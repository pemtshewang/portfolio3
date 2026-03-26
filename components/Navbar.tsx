"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Identity", href: "#identity" },
    { label: "Journey", href: "#journey" },
    { label: "Stack", href: "#stack" },
    { label: "Works", href: "#works" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] flex justify-between items-center px-6 md:px-10 z-50 transition-all duration-300",
        scrolled ? "py-2 bg-neutral-900/80" : "py-3 md:py-4",
      )}
    >
      <div className="text-lg md:text-xl font-bold tracking-widest text-[#8ff5ff] drop-shadow-[0_0_8px_rgba(143,245,255,0.5)] font-headline uppercase whitespace-nowrap">
        MY PERSONAL PORTFOLIO
      </div>
      <div className="hidden lg:flex items-center gap-6 xl:gap-10 font-headline tracking-tighter uppercase text-xs md:text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-neutral-400 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <button className="material-symbols-outlined text-neutral-400 hover:text-[#8ff5ff] transition-all cursor-pointer hidden sm:block">
          terminal
        </button>
        {/*<button className="bg-[#8ff5ff] text-[#003f43] px-4 md:px-6 py-1.5 md:py-2.5 rounded-full font-headline text-[10px] md:text-xs font-bold uppercase hover:scale-105 hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all active:scale-95">
          Connect Wallet
        </button>*/}
      </div>
    </motion.nav>
  );
};

export default Navbar;
