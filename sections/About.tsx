"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="py-40 relative bg-[#0e0e0e]" id="journey">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-[#8ff5ff]/10 to-[#ac89ff]/10 opacity-30 blur-3xl group-hover:opacity-50 transition-all duration-700"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 glass-card group-hover:border-white/20 transition-all duration-500">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoKgKaCqeHqVXYKNEkztHAp37qwSVWV-zNu6LCglcuun9bQhbL7PMKKFjE81B_YM_WvQZ_kafjSsbXrW7oVdG1XDtA2UeGhjVH7o41H68wllCbboTeb3c0a68aHdCQbM1wKu83d_7C-NEDe14rRh0yNVLQ-IaI6FbaZOkw6-TNs5iNVgSpdin8NIJaIWQmuL1V12T55D3xjLDXOKAboOlU81H-2ZpoVK_7ukAvIXi4MoUgM6IxndAc1iFdSKvSq7pSBhKeciFvZZ8"
                alt="Abstract cinematic portrait"
                fill
                priority
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8ff5ff]/5 rounded-full blur-2xl -z-10 group-hover:bg-[#8ff5ff]/10 transition-colors"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-[10px] tracking-[0.3em] uppercase text-[#8ff5ff] font-bold">
                Identity Profile
              </div>
              <h2 className="text-5xl md:text-6xl font-headline font-bold leading-tight text-white tracking-tighter">
                Crafting the Future <br/>
                <span className="text-[#8ff5ff]">of Web Systems</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
                I am a full-stack engineer with a passion for decentralization and cinematic user experiences. I don't
                just build websites; I construct digital environments that respond to human intent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                <h4 className="text-[#8ff5ff] font-headline font-bold mb-4 uppercase text-xs tracking-[0.2em]">The Journey</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  From procedural logic to reactive state management, my path is driven by architectural elegance and code integrity.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                <h4 className="text-[#ac89ff] font-headline font-bold mb-4 uppercase text-xs tracking-[0.2em]">What I'm Building</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Currently focused on high-performance UI libraries, DeFi protocols, and immersive Web3-ready ecosystems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
