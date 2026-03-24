"use client";

import { motion } from "framer-motion";

const philosophies = [
  { id: "01", title: "Clarity over Complexity", color: "primary" },
  { id: "02", title: "Atomic Modularity", color: "secondary" },
  { id: "03", title: "Decentralized Trust", color: "tertiary" },
  { id: "04", title: "User Sovereignty", color: "primary" },
];

const Values = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {philosophies.map((phil, index) => (
            <motion.div
              key={phil.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="p-8 border border-outline-variant/30 rounded-2xl transition-all cursor-default"
            >
              <h5 className={`font-headline font-bold text-${phil.color} mb-4 text-xs uppercase tracking-widest`}>
                Philosophy_{phil.id}
              </h5>
              <p className="text-white font-medium">{phil.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
