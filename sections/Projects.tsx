"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent as ReactMouseEvent } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: "primary" | "secondary";
  offset: boolean;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`group relative ${project.offset ? "md:mt-24" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-card"
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 p-10 w-full" style={{ transform: "translateZ(50px)" }}>
          <div className="flex gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className={`text-[10px] font-headline font-bold ${
                  project.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                } px-3 py-1 rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-3xl font-headline font-bold mb-2">{project.title}</h4>
          <p className="text-on-surface-variant mb-6 max-w-sm">{project.description}</p>
          <button className="material-symbols-outlined p-3 rounded-full border border-white/20 hover:bg-white text-white hover:text-surface transition-all">
            arrow_outward
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    id: "NEBULA_DEX",
    title: "NEBULA_DEX",
    description: "A high-throughput decentralized exchange interface with zero-latency price tracking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDglK-AC43bEkhNz3ijCs7GEUNSFbzDCon4aypH0Iv2-egE1qPPy9TBo_eZTQ47gQAMOeWJXuVzl4jx2xJCWTx1ewSQEuv-5MyC-e5U8cLll0C4EExlKwTfEc3YHD1vIdpHUpI67t9ZGGAlx9mAnTVNZ8OcoiHdxdZcsclW-hfvolby2UEgJlwtFu9j0FpTwfCBbbt7l95FhvgsSx-9MS8Wi2cLuD8QENTvGnwTrKPeSf7PkSUG68c88HE9v13XPHWSTxvu7Qz23ZQ",
    tags: ["Web3", "Next.js"],
    color: "primary",
    offset: false,
  },
  {
    id: "VOID_PROTOCOL",
    title: "VOID_PROTOCOL",
    description: "Privacy-preserving data layers for enterprise-grade supply chain logistics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW-ZGVF4biyYDcqWxy0dw3bnFfFcO1urgeiEw1CcBLV2P8dsDsIGLz15cbakbHF3FWfmgZhf8RXrZI9VqZRZFQYcdwvw0FNw-Dif0fZjrWdsN8buBltnfo5-wf2CYqWSciQzIMXEeVRG_7djF_wTlehhsRaCRNyuKF2yY_v_Migu4W8O1LPFlxOltdZ-2wbHiXlx8eTC5rJUORAm1Jqhl9YEPQiN7cKf2YsDTbPaEua5XiH5I1elf0q7dxZ-XsiYlUBRFneW-oD0c",
    tags: ["Security", "Rust"],
    color: "secondary",
    offset: true,
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-surface-container-low/50" id="works">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-headline font-bold text-primary uppercase tracking-[0.4em] mb-4">
              Case Studies
            </h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold">Selected Artifacts</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <span className="px-4 py-1 rounded-full border border-primary text-primary text-xs font-headline font-bold uppercase cursor-pointer">
              All Systems
            </span>
            <span className="px-4 py-1 rounded-full border border-outline-variant text-on-surface-variant text-xs font-headline font-bold uppercase hover:text-white transition-colors cursor-pointer">
              Defi
            </span>
            <span className="px-4 py-1 rounded-full border border-outline-variant text-on-surface-variant text-xs font-headline font-bold uppercase hover:text-white transition-colors cursor-pointer">
              Protocol
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
