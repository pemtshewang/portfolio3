"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-32 relative bg-surface-container-low" id="journey">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass-card">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoKgKaCqeHqVXYKNEkztHAp37qwSVWV-zNu6LCglcuun9bQhbL7PMKKFjE81B_YM_WvQZ_kafjSsbXrW7oVdG1XDtA2UeGhjVH7o41H68wllCbboTeb3c0a68aHdCQbM1wKu83d_7C-NEDe14rRh0yNVLQ-IaI6FbaZOkw6-TNs5iNVgSpdin8NIJaIWQmuL1V12T55D3xjLDXOKAboOlU81H-2ZpoVK_7ukAvIXi4MoUgM6IxndAc1iFdSKvSq7pSBhKeciFvZZ8"
                alt="Abstract cinematic portrait"
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-headline font-bold uppercase tracking-widest text-sm">Who I Am</h3>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Crafting the Future of Web Systems
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                I am a full-stack engineer with a passion for decentralization and cinematic user experiences. I don't
                just build websites; I construct digital environments that respond to human intent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-surface-container-highest/40 border border-outline-variant/20">
                <h4 className="text-white font-bold mb-2">The Journey</h4>
                <p className="text-on-surface-variant text-sm">
                  From procedural logic to reactive state management, my path is driven by architectural elegance.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-highest/40 border border-outline-variant/20">
                <h4 className="text-white font-bold mb-2">What I'm Building</h4>
                <p className="text-on-surface-variant text-sm">
                  Currently focused on Ethereum-based protocols and high-performance UI libraries.
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
