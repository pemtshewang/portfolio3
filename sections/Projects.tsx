"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "NEBULA_DEX",
    title: "NEBULA_DEX",
    description: "A high-throughput decentralized exchange interface with zero-latency price tracking and dynamic order books.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDglK-AC43bEkhNz3ijCs7GEUNSFbzDCon4aypH0Iv2-egE1qPPy9TBo_eZTQ47gQAMOeWJXuVzl4jx2xJCWTx1ewSQEuv-5MyC-e5U8cLll0C4EExlKwTfEc3YHD1vIdpHUpI67t9ZGGAlx9mAnTVNZ8OcoiHdxdZcsclW-hfvolby2UEgJlwtFu9j0FpTwfCBbbt7l95FhvgsSx-9MS8Wi2cLuD8QENTvGnwTrKPeSf7PkSUG68c88HE9v13XPHWSTxvu7Qz23ZQ",
    tags: ["Web3", "Next.js", "Solidity"],
    color: "#8ff5ff",
  },
  {
    id: "VOID_PROTOCOL",
    title: "VOID_PROTOCOL",
    description: "Privacy-preserving data layers for enterprise-grade supply chain logistics utilizing zero-knowledge proofs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW-ZGVF4biyYDcqWxy0dw3bnFfFcO1urgeiEw1CcBLV2P8dsDsIGLz15cbakbHF3FWfmgZhf8RXrZI9VqZRZFQYcdwvw0FNw-Dif0fZjrWdsN8buBltnfo5-wf2CYqWSciQzIMXEeVRG_7djF_wTlehhsRaCRNyuKF2yY_v_Migu4W8O1LPFlxOltdZ-2wbHiXlx8eTC5rJUORAm1Jqhl9YEPQiN7cKf2YsDTbPaEua5XiH5I1elf0q7dxZ-XsiYlUBRFneW-oD0c",
    tags: ["Security", "Rust", "ZK-Proofs"],
    color: "#ac89ff",
  },
];

const Projects = () => {
  return (
    <section className="py-40 bg-[#0e0e0e]/50" id="works">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-headline font-bold text-[#8ff5ff] uppercase tracking-[0.4em]">
              Case Studies
            </h2>
            <h3 className="text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">Selected <span className="italic">Artifacts</span></h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {["All Systems", "Defi", "Protocol"].map((label, idx) => (
              <span
                key={label}
                className={cn(
                  "px-6 py-2 rounded-full border text-[10px] font-headline font-bold uppercase transition-all duration-300 cursor-pointer",
                  idx === 0
                    ? "border-[#8ff5ff] text-[#8ff5ff] shadow-[0_0_15px_rgba(143,245,255,0.2)]"
                    : "border-white/10 text-neutral-400 hover:text-white hover:border-white/30"
                )}
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-neutral-900/40 relative group/card border-white/5 w-full h-auto rounded-3xl p-8 md:p-12 border transition-all hover:bg-neutral-900/60 hover:border-white/10 glass-card">
                <CardItem
                  translateZ="50"
                  className="text-2xl md:text-3xl font-bold text-white font-headline tracking-tight"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm md:text-base max-w-sm mt-4 font-light leading-relaxed"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-1000"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-12">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <CardItem
                        key={tag}
                        translateZ={20}
                        as="span"
                        className="text-[10px] font-headline font-bold px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white uppercase tracking-wider"
                      >
                        {tag}
                      </CardItem>
                    ))}
                  </div>
                  <CardItem
                    translateZ={30}
                    as="button"
                    className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#8ff5ff] transition-colors"
                  >
                    Explore <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
