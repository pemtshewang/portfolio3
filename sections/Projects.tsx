"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";

const projects = [
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {project.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <CardItem
                        key={tag}
                        translateZ={20}
                        as="span"
                        className={`text-[10px] font-headline font-bold ${
                          project.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                        } px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </CardItem>
                    ))}
                  </div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Explore
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
