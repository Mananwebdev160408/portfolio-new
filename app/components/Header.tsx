"use client";

import Link from "next/link";
import mockData from "../data/mock.json";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const { personalInfo, navigation } = mockData;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/10 text-white"
    >
      <button
        onClick={() => router.push("/")}
        className="flex cursor-pointer items-center gap-2"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className=" scale-125 "
        />
      </button>
      <nav className="flex items-center gap-8 font-medium text-xs tracking-[0.2em] uppercase">
        {navigation.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Link
              className="hover:text-primary transition-colors hover:tracking-[0.3em]"
              href={item.href}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
