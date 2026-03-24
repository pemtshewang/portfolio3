"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/HoverEffect";

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
    text: "text-primary",
  },
  secondary: {
    text: "text-secondary",
  },
  tertiary: {
    text: "text-tertiary",
  },
};

const Skills = () => {
  const allSkills = skills.flatMap((category) =>
    category.items.map((item) => ({
      title: item.name,
      description: item.detail,
      icon: (
        <span className={`material-symbols-outlined text-2xl ${colorMaps[category.color].text}`}>
          {category.icon}
        </span>
      ),
    }))
  );

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

        <HoverEffect items={allSkills} />
      </div>
    </section>
  );
};

export default Skills;
