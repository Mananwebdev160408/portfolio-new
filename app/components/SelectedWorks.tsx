import Image from "next/image";
import mockData from "../data/mock.json";

export default function SelectedWorks() {
  const { projects } = mockData;

  return (
    <>
      {/* Selected Works Header */}
      <section id="works" className="mb-24 px-4 overflow-hidden">
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
      </section>

      {/* Works Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group cursor-pointer ${
              index === 1 ? "md:mt-24" : ""
            }`}
          >
            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden border border-white/10 mb-6">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white text-black px-6 py-2 font-bold uppercase text-xs tracking-widest">
                  View Project
                </span>
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
          </div>
        ))}
      </section>
    </>
  );
}
