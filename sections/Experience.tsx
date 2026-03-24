"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Architect",
    period: "2022 — Present",
    company: "Nova Systems",
    description: "Leading the migration to a micro-frontend architecture at Nova Systems.",
    color: "primary" as const,
    align: "left",
  },
  {
    role: "Blockchain Developer",
    period: "2020 — 2022",
    company: "Nexus Labs",
    description: "Engineered EVM-compatible bridges for multi-chain liquidity protocols.",
    color: "secondary" as const,
    align: "right",
  },
  {
    role: "Full-Stack Engineer",
    period: "2018 — 2020",
    company: "Distributed Corp",
    description: "Built real-time collaboration tools for distributed engineering teams.",
    color: "tertiary" as const,
    align: "left",
  },
];

const colorMaps = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    shadow: "shadow-[0_0_15px_rgba(var(--primary-rgb),1)]",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary",
    shadow: "shadow-[0_0_15px_rgba(var(--secondary-rgb),1)]",
  },
  tertiary: {
    text: "text-tertiary",
    bg: "bg-tertiary",
    shadow: "shadow-[0_0_15px_rgba(var(--tertiary-rgb),1)]",
  },
};

const Experience = () => {
  return (
    <section className="py-32 overflow-hidden" id="journey-timeline">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-headline font-bold text-tertiary uppercase tracking-[0.4em] mb-4"
          >
            The Chronology
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-headline font-bold"
          >
            Growth Vectors
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-32">
            {experiences.map((exp, index) => {
              const colors = colorMaps[exp.color];
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: exp.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between w-full ${
                    exp.align === "left" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-[45%] ${exp.align === "left" ? "text-right pr-12" : "text-left pl-12"}`}>
                    <h4 className="text-xl font-headline font-bold text-white mb-1">{exp.role}</h4>
                    <p className={`${colors.text} text-sm font-headline mb-3`}>{exp.period}</p>
                    <p className="text-on-surface-variant text-sm">{exp.description}</p>
                  </div>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${colors.bg} ${colors.shadow} z-10`}
                  />

                  <div className="w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
