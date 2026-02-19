"use client";

import Link from "next/link";
import mockData from "../data/mock.json";
import { useRouter } from "next/navigation";

export default function Header() {
  const router=useRouter();
  const { personalInfo, navigation } = mockData;

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/10 text-white">
      <button onClick={()=>router.push("/")} className="flex cursor-pointer items-center gap-2">
        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
          <span className="text-black font-bold text-xl">
            {personalInfo.initials[0]}
          </span>
        </div>
        <span className="hidden md:block font-bold tracking-tighter text-xl">
          {personalInfo.name.toUpperCase()}
        </span>
      </button>
      <nav className="flex items-center gap-8 font-medium text-xs tracking-[0.2em] uppercase">
        {navigation.map((item, index) => (
          <Link
            key={index}
            className="hover:text-primary transition-colors"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
