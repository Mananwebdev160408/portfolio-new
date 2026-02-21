"use client";

import Image from "next/image";
import mockData from "../data/mock.json";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Hero() {
  const router = useRouter();
  const { personalInfo } = mockData;
  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center mb-32">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Portrait Background (High Contrast Grainy) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl aspect-[4/5] overflow-hidden grayscale contrast-150 brightness-75 rounded-lg border border-white/10 z-0"
        >
          <Image
            alt={`${personalInfo.name} Portrait`}
            src={personalInfo.heroImage}
            fill
            className="object-cover mix-blend-luminosity opacity-80 scale-100"
            priority
          />
        </motion.div>

        {/* Overlapping Typography */}
        <div className="relative z-20 text-center select-none pointer-events-none mix-blend-difference text-white">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[12rem] md:text-[20rem] leading-[0.8] tracking-tighter text-outline italic"
          >
            {firstName.toUpperCase()}
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[12rem] md:text-[20rem] leading-[0.8] tracking-tighter text-white italic -mt-8 md:-mt-20"
          >
            {lastName.toUpperCase()}
          </motion.h1>
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute -bottom-30 left-0 md:-left-32 flex flex-col gap-4 max-w-xs p-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg z-30"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Available for hire
            </span>
          </div>
          <p className="text-sm font-light leading-relaxed text-slate-300">
            {personalInfo.description.toUpperCase()}
          </p>
          <button
            onClick={() => router.push("/projects")}
            className="w-fit group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-primary hover:border-primary transition-all text-white"
          >
            Explore Works
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
