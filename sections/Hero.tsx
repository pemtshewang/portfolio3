"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const moveX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

  const scrollBackground = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="identity"
    >
      <motion.div style={{ opacity, x: moveX, y: moveY }} className="absolute inset-0 z-0">
        <motion.div style={{ y: scrollBackground }} className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-4PsGwIX8PsNNqYguaTRML8k9FlXX4vWbrIPjyX8EUtdUIiqlvd2IQby5BlFbOIhkVu62oGrIpf_lhlbFV3FclZo3-diFDfHpjf11qx-06T6LKZMDJwxCM1hPInDCnusYhEqKJ9htyilTjovz_6KrRltpfCR4Tc3bfhfnB-0ILvGhsKVNXHHaHx_tE4WMOTjJVtrwA6CatYT-PlSAVbGEL0eTGxQSU_9v8Plx573LhKToMK1uGfZuIFRBreG7J9uExjAqRVn00OM')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        ></div>
        </motion.div>
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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-white mb-4 leading-none"
        >
          ALEX{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            RIVERS
          </span>
        </motion.h1>

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
