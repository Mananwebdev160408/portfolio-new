"use client";
import { useRouter } from "next/navigation";
import mockData from "../data/mock.json";

export default function Footer() {
  const { personalInfo, socials} = mockData;
  const router = useRouter();

  return (
    <footer className="mt-auto border-t border-white/10 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 bg-background-dark/80 backdrop-blur-md text-white">
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Local Time
          </span>
          <span className="text-sm font-medium">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZone: "Asia/Kolkata",
            })}
            {" "}GMT+5:30
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Social
          </span>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                className="text-sm hover:text-primary transition-colors"
                href={social.href}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Get in touch
          </span>
          <span onClick={() => window.location.href = `mailto:${personalInfo.email}`} className="text-xl font-bold tracking-tighter group-hover:text-primary transition-colors">
            {personalInfo.email.toUpperCase()}
          </span>
        </div>
        <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          north_east
        </span>
      </div>
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bottom-12 text-[10px] text-slate-600 font-bold tracking-[0.5em] uppercase">
        © {new Date().getFullYear().toString()} Manan Gupta Studio
      </div>
    </footer>
  );
}
