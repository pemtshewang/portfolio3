"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Frontend Architecture",
    icon: "terminal",
    color: "#ac89ff",
    items: [
      { name: "React / Next.js", detail: "Advanced SSR/ISR patterns and performance optimization." },
      { name: "TypeScript", detail: "Type-safe development with complex generic patterns." },
      { name: "Tailwind / Framer", detail: "Design systems and high-fidelity interactive animations." },
    ],
  },
  {
    category: "Backend & Web3",
    icon: "database",
    color: "#8ff5ff",
    items: [
      { name: "Node.js / Go", detail: "Scalable microservices and high-concurrency systems." },
      { name: "Solidity / Ethers", detail: "Smart contract development and Web3 integration." },
      { name: "PostgreSQL / Redis", detail: "Relational database design and caching strategies." },
    ],
  },
  {
    category: "Infrastructure",
    icon: "cloud",
    color: "#8995ff",
    items: [
      { name: "Docker / K8s", detail: "Containerization and basic cluster orchestration." },
      { name: "AWS / GCP", detail: "Cloud architecture and managed service integration." },
      { name: "CI/CD Pipelines", detail: "Automated testing and deployment workflows." },
    ],
  },
];

const Skills = () => {
  const allSkills = skills.flatMap((category) =>
    category.items.map((item) => ({
      title: item.name,
      description: item.detail,
      icon: (
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            <span className="material-symbols-outlined text-xl">
              {category.icon}
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-500 font-headline">
            {category.category}
          </span>
        </div>
      ),
    }))
  );

  return (
    <section className="py-40 relative overflow-hidden bg-[#0e0e0e]" id="stack">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-headline font-bold text-[#ac89ff] uppercase tracking-[0.4em]"
          >
            Core Competencies
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white tracking-tighter"
          >
            The Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ff5ff] to-[#ac89ff]">Stack</span>
          </motion.h3>
        </div>

        <HoverEffect items={allSkills} />
      </div>
    </section>
  );
};

export default Skills;
