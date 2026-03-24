"use client";

import { motion } from "framer-motion";

const Values = () => {
  const philosophies = [
    { title: "Clarity over Complexity", id: "01", color: "#8ff5ff" },
    { title: "Atomic Modularity", id: "02", color: "#ac89ff" },
    { title: "Decentralized Trust", id: "03", color: "#8995ff" },
    { title: "User Sovereignity", id: "04", color: "#8ff5ff" },
  ];

  return (
    <section className="py-40 bg-[#0e0e0e] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophies.map((phi, idx) => (
            <motion.div
              key={phi.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-10 border border-white/5 rounded-3xl hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 group relative overflow-hidden h-full"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: phi.color }}
              ></div>
              <h5
                className="font-headline font-bold mb-6 text-xs uppercase tracking-[0.3em]"
                style={{ color: phi.color }}
              >
                Philosophy_{phi.id}
              </h5>
              <p className="text-white text-xl md:text-2xl font-headline font-bold leading-tight group-hover:text-[#8ff5ff] transition-colors tracking-tight">
                {phi.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
