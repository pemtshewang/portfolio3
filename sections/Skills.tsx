"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    category: "Frontend Architecture",
    icon: "terminal",
    color: "secondary" as const,
    items: [
      { name: "React / Next.js", level: "90%", detail: "Advanced SSR/ISR patterns and performance optimization." },
      { name: "TypeScript", level: "95%", detail: "Type-safe development with complex generic patterns." },
      { name: "Tailwind / Framer", level: "85%", detail: "Design systems and high-fidelity interactive animations." },
    ],
  },
  {
    category: "Backend & Web3",
    icon: "database",
    color: "primary" as const,
    items: [
      { name: "Node.js / Go", level: "80%", detail: "Scalable microservices and high-concurrency systems." },
      { name: "Solidity / Ethers", level: "75%", detail: "Smart contract development and Web3 integration." },
      { name: "PostgreSQL / Redis", level: "70%", detail: "Relational database design and caching strategies." },
    ],
  },
  {
    category: "Infrastructure",
    icon: "cloud",
    color: "tertiary" as const,
    items: [
      { name: "Docker / K8s", level: "65%", detail: "Containerization and basic cluster orchestration." },
      { name: "AWS / GCP", level: "75%", detail: "Cloud architecture and managed service integration." },
      { name: "CI/CD Pipelines", level: "80%", detail: "Automated testing and deployment workflows." },
    ],
  },
];

const colorMaps = {
  primary: {
    bgAlpha: "bg-primary/10",
    borderAlpha: "border-primary/30",
    text: "text-primary",
    bg: "bg-primary",
    shadow: "hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]",
  },
  secondary: {
    bgAlpha: "bg-secondary/10",
    borderAlpha: "border-secondary/30",
    text: "text-secondary",
    bg: "bg-secondary",
    shadow: "hover:shadow-[0_0_40px_rgba(var(--secondary-rgb),0.15)]",
  },
  tertiary: {
    bgAlpha: "bg-tertiary/10",
    borderAlpha: "border-tertiary/30",
    text: "text-tertiary",
    bg: "bg-tertiary",
    shadow: "hover:shadow-[0_0_40px_rgba(var(--tertiary-rgb),0.15)]",
  },
};

const Skills = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-32 relative overflow-hidden" id="stack">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-headline font-bold text-secondary uppercase tracking-[0.4em] mb-4"
          >
            Core Competencies
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-headline font-bold"
          >
            The Technical Stack
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const colors = colorMaps[skill.color];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`glass-card p-10 rounded-2xl group ${colors.shadow} transition-all duration-500`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${colors.bgAlpha} flex items-center justify-center mb-8 border ${colors.borderAlpha} ${colors.text}`}
                >
                  <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
                </div>
                <h4 className="text-2xl font-headline font-bold mb-6">{skill.category}</h4>
                <ul className="space-y-4 text-on-surface-variant">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="relative group/item"
                      onMouseEnter={() => setHoveredItem(`${skill.category}-${item.name}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="group-hover/item:text-white transition-colors cursor-help">{item.name}</span>
                        <div className="w-24 h-1 bg-neutral-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.level }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                            viewport={{ once: true }}
                            className={`h-full ${colors.bg} rounded-full`}
                          />
                        </div>
                      </div>
                      <AnimatePresence>
                        {hoveredItem === `${skill.category}-${item.name}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 4 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="text-[10px] text-on-surface-variant overflow-hidden"
                          >
                            {item.detail}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
