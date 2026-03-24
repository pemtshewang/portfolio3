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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-950"
      id="identity"
    >
      <BackgroundBeams className="opacity-40" />
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/30 text-[10px] tracking-[0.3em] uppercase text-primary font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          System Online: v4.2.0
        </motion.div>

        <div className="mb-4">
          <TextGenerateEffect
            words="ALEX RIVERS"
            className="text-6xl md:text-9xl font-headline font-bold tracking-tighter text-white leading-none"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 font-light"
        >
          Architecting the <span className="text-white font-medium italic">Digital Astral</span> through high-integrity
          code and immersive design engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Link
            href="#works"
            className="px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all"
          >
            Explore Work
          </Link>
          <Link
            href="#identity"
            className="px-10 py-4 border border-outline-variant/50 text-white font-headline font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            About Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40"
      >
        <span className="material-symbols-outlined text-4xl text-white">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
