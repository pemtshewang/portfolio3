"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Intern Software Developer",
    period: "2024 — 2025",
    company: "Agriculture and Machinery Technology Centre",
    description:
      "Leading the migration to a micro-frontend architecture at AMC. Architecting design systems and performance-critical IOT infrastructures.",
    color: "#8ff5ff",
    align: "left",
  },
  {
    role: "Jr SoftwareDeveloper",
    period: "2024 — 2025",
    company: "Yangkhor Private Limited",
    description: "Working with backend systems of govt websites and IT infrastructures. Mostly worked with Springboot applications shipped into micro-services architectural designs with CI/CD development flow."
    color: "#ac89ff",
    align: "right",
  },
  {
    role: "System Admin Cum Security Engineer",
    period: "2025 — ",
    company: "GOB",
    description:"Carrying out the roles of system admin and also auditing the security systems of the current infrastructures"
    color: "#8995ff",
    align: "left",
  },
];

const Experience = () => {
  return (
    <section
      className="py-40 overflow-hidden bg-[#0e0e0e]"
      id="journey-timeline"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-32 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-headline font-bold text-[#8995ff] uppercase tracking-[0.4em]"
          >
            The Chronology
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white tracking-tighter"
          >
            Growth <span className="italic">Vectors</span>
          </motion.h3>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8ff5ff]/50 via-[#ac89ff]/50 to-transparent hidden md:block" />

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{
                  opacity: 0,
                  x: exp.align === "left" ? -60 : 60,
                  filter: "blur(10px)",
                }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0",
                  exp.align === "left" ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Content Block */}
                <div
                  className={cn(
                    "w-full md:w-[45%] p-10 rounded-3xl glass-card border-white/5 group hover:border-white/20 transition-all duration-500",
                    exp.align === "left" ? "md:text-right" : "md:text-left",
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-col gap-2 mb-6",
                      exp.align === "left" ? "md:items-end" : "md:items-start",
                    )}
                  >
                    <div
                      className="px-4 py-1 rounded-full text-[10px] font-headline font-bold uppercase tracking-widest border border-white/10"
                      style={{
                        color: exp.color,
                        backgroundColor: `${exp.color}10`,
                        borderColor: `${exp.color}20`,
                      }}
                    >
                      {exp.period}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                {/* Timeline Node */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 hidden md:block"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 25px ${exp.color}cc, 0 0 50px ${exp.color}66`,
                  }}
                >
                  <div className="absolute inset-[-4px] rounded-full border border-white/20 animate-ping"></div>
                </div>

                <div className="w-full md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
