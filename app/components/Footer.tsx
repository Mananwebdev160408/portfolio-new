"use client";
import { useRouter } from "next/navigation";
import mockData from "../data/mock.json";
import { motion } from "motion/react";

export default function Footer() {
  const { personalInfo, socials } = mockData;
  const router = useRouter();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-auto border-t border-white/10 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 bg-background-dark/80 backdrop-blur-md text-white"
    >
      <div className="flex items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Local Time
          </span>
          <span className="text-sm font-medium">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZone: "Asia/Kolkata",
            })}{" "}
            GMT+5:30
          </span>
        </motion.div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Social
          </span>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm hover:text-primary transition-colors hover:translate-y-[-2px] inline-block"
                href={social.href}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{ x: 10 }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Get in touch
          </span>
          <span
            onClick={() =>
              (window.location.href = `mailto:${personalInfo.email}`)
            }
            className="text-xl font-bold tracking-tighter group-hover:text-primary transition-colors"
          >
            {personalInfo.email.toUpperCase()}
          </span>
        </div>
        <span className="material-symbols-outlined text-4xl group-hover:rotate-45 transition-transform duration-500">
          north_east
        </span>
      </motion.div>

      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bottom-12 text-[10px] text-slate-600 font-bold tracking-[0.5em] uppercase">
        © {new Date().getFullYear().toString()}{" "}
        {personalInfo.name.toUpperCase()} Studio
      </div>
    </motion.footer>
  );
}
