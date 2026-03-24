"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-[#0e0e0e]" id="connect">
      <BackgroundBeams className="opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-6xl mx-auto glass-card rounded-[48px] p-10 md:p-24 lg:p-32 flex flex-col lg:flex-row gap-20 border-white/5 hover:border-white/10 transition-all duration-700">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-10 tracking-tighter text-white leading-none">
                Establish <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ff5ff] via-[#ac89ff] to-[#8995ff]">Connection</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-lg">
                Open for architectural consultations, strategic engineering roles, and collaborative world-building.
              </p>
            </div>

            <div className="space-y-8 pt-10">
              <a
                href="mailto:terminal@alexrivers.dev"
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:bg-[#8ff5ff] group-hover:text-[#003f43] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(143,245,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">alternate_email</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">Identity_String</span>
                  <span className="text-white text-lg font-headline font-medium group-hover:text-[#8ff5ff] transition-colors">terminal@alexrivers.dev</span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:bg-[#ac89ff] group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(172,137,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">Communication_Node</span>
                  <span className="text-white text-lg font-headline font-medium group-hover:text-[#ac89ff] transition-colors">@alex_rivers_code</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form className="space-y-10 p-10 md:p-14 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500">
              <div className="space-y-4">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.4em] text-neutral-500">Payload_Sender</label>
                <input
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#8ff5ff] focus:ring-0 transition-all duration-300 text-white placeholder:text-neutral-700 pb-4 outline-none font-headline text-lg"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.4em] text-neutral-500">Node_Protocol</label>
                <input
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#8ff5ff] focus:ring-0 transition-all duration-300 text-white placeholder:text-neutral-700 pb-4 outline-none font-headline text-lg"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.4em] text-neutral-500">Encrypted_Payload</label>
                <textarea
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#8ff5ff] focus:ring-0 transition-all duration-300 text-white placeholder:text-neutral-700 pb-4 outline-none resize-none font-headline text-lg"
                  placeholder="Describe the mission..."
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-[#8ff5ff] text-[#003f43] font-headline font-bold uppercase tracking-[0.3em] text-sm rounded-2xl hover:shadow-[0_0_40px_rgba(143,245,255,0.3)] transition-all duration-300 active:scale-[0.98] group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Transmission <span className="material-symbols-outlined text-lg">rocket_launch</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
