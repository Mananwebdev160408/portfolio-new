"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const x = useTransform(springX, (val) => `${val}px`);
  const y = useTransform(springY, (val) => `${val}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="grain-overlay fixed inset-0 w-full h-full pointer-events-none z-50 opacity-15 mix-blend-overlay"></div>
      <div className="grid-bg fixed inset-0 pointer-events-none z-0"></div>

      {/* Interactive Light Follower */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-1 opacity-30"
        style={
          {
            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(var(--primary-rgb), 0.15), transparent 80%)`,
            // @ts-ignore
            "--x": x,
            "--y": y,
          } as any
        }
      />

      <div className="fixed inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none z-2"></div>
    </>
  );
}
