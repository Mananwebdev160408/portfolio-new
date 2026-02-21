"use client";

import { motion } from "motion/react";

export default function TechMarquee() {
  const techStack = [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
  ];

  return (
    <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-12 opacity-30 hover:opacity-100 transition-opacity">
      <div className="h-32 w-px bg-linear-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="h-80 relative overflow-hidden flex flex-col items-center">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-col gap-16 py-8"
        >
          {/* First set of items */}
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="[writing-mode:vertical-rl] rotate-180 uppercase text-[10px] tracking-[0.4em] font-bold whitespace-nowrap text-white/50 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, i) => (
            <span
              key={`dup-${i}`}
              className="[writing-mode:vertical-rl] rotate-180 uppercase text-[10px] tracking-[0.4em] font-bold whitespace-nowrap text-white/50 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="h-32 w-px bg-linear-to-b from-transparent via-white/20 to-transparent"></div>
    </aside>
  );
}
