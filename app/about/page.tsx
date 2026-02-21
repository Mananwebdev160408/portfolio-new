"use client";

import Image from "next/image";
import Marquee from "../components/Marquee";
import mockData from "../data/mock.json";

export default function About() {
  const { history, learningStack, personalInfo } = mockData;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 relative z-10">
      <Marquee text="FULL STACK • PROBLEM SOLVER • ENGINEER • CREATIVE" />
      <Marquee
        text="FULL STACK • PROBLEM SOLVER • ENGINEER • CREATIVE"
        reverse
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-20">
        {/* Left Sidebar: History */}
        <aside className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-8 sticky top-32">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="text-xs font-bold text-primary tracking-[0.2em] mb-6">
              HISTORY_LOG
            </h3>
            <ul className="space-y-6 font-mono text-sm">
              {history.map((item, index) => (
                <li key={index} className="group">
                  <div className="text-white font-bold group-hover:text-primary transition-colors">
                    {item.year} / {item.role}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">
                    {item.company ? item.company : ""}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block pt-12">
            <h3 className="text-xs font-bold text-slate-500 tracking-[0.2em] mb-4">
              LOCATION
            </h3>
            <div className="h-32 w-full bg-zinc-900 border border-white/10 relative overflow-hidden group">
              <Image
                src="https://imgs.search.brave.com/QJVkkQ2V9XwzcDV4NQlv4A2YknQPbL8YXuw4rNa2h_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/cHVuamFiLWVuZ2lu/ZWVyaW5nLWNvbGxl/Z2UtY2hhbmRpZ2Fy/aC0zNjA1NzYud2Vi/cA"
                alt="New York City"
                fill
                className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[10px] text-primary border border-primary/30">
                {personalInfo.location.toUpperCase().replace(" ", "_")}
              </div>
            </div>
          </div>
        </aside>

        {/* Center: Narrative Body */}
        <article className="lg:col-span-5 order-3 lg:order-2 flex flex-col gap-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-white">
              Constructing <span className="text-primary">Logic</span> from
              Chaos.
            </h1>
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-slate-300">
              <p>
                I don’t just build apps — I build complete systems. My
                foundation is strong fundamentals, clean logic, and zero
                unnecessary complexity. In a world full of overengineering, I
                choose{" "}
                <span className="text-white font-normal border-b border-white/20">
                  clarity and precision
                </span>
                .
              </p>
              <p>
                I started as a curious student after JEE, diving deep into web
                development and building from scratch. Today, I design scalable
                full-stack applications with real-world architecture — not
                tutorials, not clones, but production-ready systems.
              </p>
              <p>
                Whether it’s structuring a backend, optimizing frontend
                performance, or integrating AI into applications, I focus on
                writing efficient code that solves real problems.
              </p>
            </div>
          </div>

          {/* Tech Stack / Currently Learning */}
          <div className="mt-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-600 opacity-30 group-hover:opacity-70 blur transition duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between bg-black border border-white/20 p-6 md:p-8">
                <div>
                  <h3 className="text-xs font-bold text-primary tracking-widest mb-2">
                    CURRENTLY LEARNING
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xl md:text-3xl font-bold text-white tracking-tighter">
                    {learningStack.map((stack, i) => (
                      <span key={stack.name} className="flex gap-2">
                        {stack.name}
                        {i < learningStack.length - 1 && (
                          <span className="text-primary">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="material-symbols-outlined text-4xl text-primary animate-pulse">
                    data_object
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Right: Split Portrait */}
        <div className="lg:col-span-4 order-1 lg:order-3 grid grid-cols-3 gap-1 lg:h-[600px] h-[300px] w-full">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`relative h-full overflow-hidden bg-zinc-900 border border-white/5 group ${i === 1 ? "mt-4 lg:mt-8 mb-0 lg:mb-8" : ""}`}
            >
              <div
                className="relative h-full transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  width: "300%",
                  left: `-${i * 100}%`,
                }}
              >
                <Image
                  src={personalInfo.heroImage}
                  alt="Portrait Slice"
                  fill
                  className="max-w-none object-cover grayscale"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
