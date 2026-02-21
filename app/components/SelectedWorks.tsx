"use client";

import Image from "next/image";
import mockData from "../data/mock.json";
import { useRouter } from "next/navigation";
import { motion, Variants } from "motion/react";

export default function SelectedWorks() {
  const { projects } = mockData;
  const router = useRouter();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <>
      {/* Selected Works Header */}
      <motion.section
        id="works"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 px-4 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/10 pt-8 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              01 / Index
            </span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase whitespace-nowrap leading-none stretched-text mix-blend-difference text-white">
              SELECTED WORKS
            </h2>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-slate-400 text-sm leading-relaxed uppercase tracking-wider">
              Curated projects focusing on high-performance distributed systems
              and pixel-perfect user interfaces.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Works Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            onClick={() => router.push(`/projects/${project.id}`)}
            className={`group cursor-pointer ${index === 1 ? "md:mt-24" : ""}`}
          >
            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden border border-white/10 mb-6">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white text-black px-6 py-2 font-bold uppercase text-xs tracking-widest"
                >
                  View Project
                </motion.span>
              </div>
            </div>
            <div className="flex justify-between items-start text-white">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.tech}</span>
                </div>
              </div>
              <span className="text-3xl font-serif italic text-white/20">
                {project.id}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}
