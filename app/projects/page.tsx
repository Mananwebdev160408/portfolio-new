"use client";

import { useState } from "react";
import Link from "next/link";
import BackgroundEffects from "../components/BackgroundEffects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mockData from "../data/mock.json";
import Image from "next/image";

export default function Projects() {
  const { projects } = mockData;
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Default background or the hovered project's image
  const background = hoveredProject 
    ? projects.find(p => p.id === hoveredProject)?.image 
    : null;

  return (
    <div className="relative min-h-screen flex flex-col font-display text-slate-100 overflow-x-hidden selection:bg-white selection:text-black bg-black">
      <BackgroundEffects />
      <Header />
      
      {/* Dynamic Background Preview */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         {background && (
             <Image
                src={background}
                alt="Project Preview"
                fill
                className="object-cover opacity-30 grayscale transition-all duration-500 ease-out scale-105"
             />
         )}
      </div>

      <main className="flex flex-1 flex-col md:flex-row pt-20 relative z-10">
        <aside className="w-full md:w-72 border-r border-white/20 p-8 flex flex-col justify-between bg-black/80 backdrop-blur-sm z-20 h-auto md:min-h-screen sticky top-0">
             <div className="space-y-16">
                 <div className="flex flex-col gap-2">
                     <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">Archive<br/>Index</h2>
                     <p className="font-mono text-[10px] text-white/50 max-w-[200px] leading-relaxed">
                         SELECTED WORKS FROM 2023-2024. EXPLORING DIGITAL BRUTALISM & AI INTEGRATION.
                     </p>
                 </div>
                 <section>
                     <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Filter_By:</h3>
                     <ul className="space-y-3 font-mono text-xs">
                         <li className="flex items-center gap-3 group cursor-pointer text-white">
                             <span className="w-2 h-2 bg-white"></span>
                             <span className="group-hover:translate-x-2 transition-transform uppercase tracking-widest">All</span>
                         </li>
                         {['Frontend', 'Backend', 'Systems'].map(filter => (
                             <li key={filter} className="flex items-center gap-3 group cursor-pointer text-white/40 hover:text-white transition-colors">
                                 <span className="w-2 h-2 border border-white/40 group-hover:bg-white group-hover:border-white transition-colors"></span>
                                 <span className="group-hover:translate-x-2 transition-transform uppercase tracking-widest">{filter}</span>
                             </li>
                         ))}
                     </ul>
                 </section>
             </div>
        </aside>

        <section className="flex-1 relative bg-transparent">
             <div className="relative z-10 w-full">
                 <div className="hidden lg:flex px-10 py-5 border-b border-white/20 font-mono text-[10px] text-white/50 uppercase tracking-[0.2em] bg-black/80 backdrop-blur-sm sticky top-20 z-30">
                     <div className="w-24">No.</div>
                     <div className="flex-1">Project_Name</div>
                     <div className="w-32 text-center">Year</div>
                     <div className="w-48 text-right">Tech_Stack</div>
                 </div>

                 {projects.map((project) => (
                     <Link key={project.id} href={`/projects/${project.id}`}>
                         <div 
                            className="project-row group relative px-6 md:px-10 py-16 border-b border-white/20 cursor-pointer transition-colors bg-black/80 hover:bg-transparent"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                         >
                             <div className="flex flex-col lg:flex-row lg:items-center relative z-20 mix-blend-difference">
                                 <span className="w-24 font-mono text-sm text-white/60 mb-2 lg:mb-0 tracking-tighter">{project.id}</span>
                                 <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-6">
                                     <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.8] tracking-tighter transition-all duration-300 text-white group-hover:italic group-hover:pl-4">
                                         {project.title}
                                     </h2>
                                 </div>
                                 <span className="w-32 font-mono text-xs text-white/60 mt-6 lg:mt-0 lg:text-center animate-pulse">{project.year}</span>
                                 <div className="w-48 text-right mt-4 lg:mt-0 flex justify-end gap-2 font-mono text-[10px] uppercase">
                                     {project.tags?.slice(0, 2).map((tag, i) => (
                                         <span key={i} className={`px-2 py-1 ${i === 0 ? 'bg-white text-black font-bold' : 'border border-white text-white'}`}>
                                             {tag}
                                         </span>
                                     ))}
                                 </div>
                             </div>
                         </div>
                     </Link>
                 ))}
                 
                 <div className="p-16 flex justify-center border-b border-white/20 bg-black/80 backdrop-blur-sm">
                     <button className="font-mono text-xs text-white uppercase tracking-widest border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors">Load_More_Archives</button>
                 </div>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
