"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0e0e0e]"
      id="identity"
    >
      <BackgroundBeams className="opacity-30" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-[#8ff5ff]/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-[#ac89ff]/15 rounded-full blur-[140px]"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neutral-900/60 border border-white/10 text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#8ff5ff] font-bold backdrop-blur-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#8ff5ff] animate-pulse"></span>
          System Online: v4.2.0
        </motion.div>

        <div className="mb-6 max-w-5xl">
          <TextGenerateEffect
            words="ALEX RIVERS"
            className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter text-white leading-none uppercase"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-body text-xl md:text-2xl lg:text-3xl text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed"
        >
          Architecting the <span className="text-white font-medium italic underline decoration-[#8ff5ff]/30 underline-offset-8">Digital Astral</span> through high-integrity
          code and immersive design engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 md:gap-8"
        >
          <Link
            href="#works"
            className="group relative px-12 py-5 bg-gradient-to-br from-[#8ff5ff] to-[#00deec] text-[#003f43] font-headline font-bold uppercase tracking-[0.2em] text-sm rounded-full hover:shadow-[0_0_40px_rgba(143,245,255,0.4)] transition-all duration-300"
          >
            Explore Work
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="#journey"
            className="px-12 py-5 border border-white/20 text-white font-headline font-bold uppercase tracking-[0.2em] text-sm rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            About Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 cursor-pointer hover:opacity-100 transition-opacity"
      >
        <span className="material-symbols-outlined text-4xl text-white">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
