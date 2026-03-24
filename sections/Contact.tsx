"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const Contact = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-neutral-950" id="connect">
      <BackgroundBeams />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-[40px] p-8 md:p-20 flex flex-col md:flex-row gap-20"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Establish Connection</h2>
            <p className="text-on-surface-variant text-lg mb-12">
              Open for architectural consultations, strategic engineering roles, and collaborative world-building.
            </p>
            <div className="space-y-6">
              <a href="mailto:terminal@alexrivers.dev" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface transition-all">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <span className="text-white font-headline group-hover:text-primary transition-colors">
                  terminal@alexrivers.dev
                </span>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-surface transition-all">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <span className="text-white font-headline group-hover:text-secondary transition-colors">
                  @alex_rivers_code
                </span>
              </a>
            </div>
          </div>

          <div className="flex-1">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Identity_String
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-white placeholder:text-neutral-600 pb-2 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Communication_Node
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-white placeholder:text-neutral-600 pb-2 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Payload_Data
                </label>
                <textarea
                  placeholder="Briefly describe the mission..."
                  rows={4}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-white placeholder:text-neutral-600 pb-2 outline-none resize-none"
                />
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(143,245,255,0.3)] transition-all">
                Send Transmission
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
