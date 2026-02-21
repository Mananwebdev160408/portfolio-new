import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import mockData from "../../data/mock.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { id } = await params;
  const project = mockData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row pt-20">
      {/* Left Sidebar: Metadata */}
      <aside className="w-full lg:w-64 lg:fixed lg:h-[calc(100vh-80px)] lg:border-r border-white/20 p-8 flex flex-col justify-between bg-black/50 backdrop-blur-sm lg:mt-20">
        <div className="space-y-12 font-mono text-xs tracking-wider">
          <div className="space-y-2">
            <p className="text-[#666]">YEAR</p>
            <p className="text-white text-sm">{project.year}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#666]">CATEGORY</p>
            <p className="text-white text-sm">
              {project.category.toUpperCase()}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#666]">STATUS</p>
            <div className="flex items-center gap-2">
              <span className="block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {(project as any).hostedLink ? (
                <p className="text-primary text-sm"> "DEPLOYED" </p>
              ) : (
                <p className="text-[#666] text-sm"> "NOT DEPLOYED" </p>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="font-mono text-[10px] text-[#444] uppercase rotate-180 [writing-mode:vertical-rl] h-32">
            System Architecture // {project.id}
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* Hero Title Section */}
        <section className="relative px-6 pt-20 pb-10 lg:px-12 lg:pt-32 overflow-hidden">
          <h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter uppercase break-words mix-blend-difference text-white select-none">
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={`block ${i === 1 ? "text-outline text-transparent lg:ml-24" : "ml-[-1vw]"}`}
              >
                {word}
              </span>
            ))}
          </h1>
          <div className="absolute top-10 right-10 w-32 h-32 border border-[#333] rounded-full flex items-center justify-center animate-spin duration-[10s]">
            <span className="material-symbols-outlined text-[#333] text-6xl">
              all_inclusive
            </span>
          </div>
        </section>

        {/* Main Project Visual */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="relative w-full aspect-video border border-[#333] bg-[#111] overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale contrast-125 brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[length:100%_4px] pointer-events-none z-10"></div>
            <div className="absolute bottom-4 right-4 bg-black border border-white px-3 py-1 z-20">
              <span className="font-mono text-xs font-bold text-white tracking-widest">
                IMG_SEQ_{project.id}.RAW
              </span>
            </div>
            <div className="absolute top-4 left-4 z-20">
              <span className="material-symbols-outlined text-white/50 text-4xl">
                crop_free
              </span>
            </div>
          </div>
        </section>

        {/* The Mission & Tech Stack */}
        <section className="px-6 lg:px-12 pb-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#333] pt-12">
          <div className="md:col-span-7">
            <h2 className="font-mono text-primary text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary"></span>
              The Mission
            </h2>
            <p className="font-mono text-sm text-[#888] leading-relaxed max-w-prose">
              {project.mission}
            </p>
            <p className="font-mono text-xl md:text-3xl leading-tight text-white mb-8">
              {project.description}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div>
              <h3 className="font-mono text-[#666] text-xs mb-6 uppercase tracking-widest border-b border-[#333] pb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-[#444] text-white font-mono text-xs uppercase tracking-wide hover:bg-white hover:text-black hover:border-white transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-4 py-2 border border-[#444] text-white font-mono text-xs uppercase tracking-wide hover:bg-white hover:text-black hover:border-white transition-all cursor-default">
                  {project.tech}
                </span>
              </div>
            </div>
            <div className="pt-8 border-t border-[#333] space-y-4">
              <a
                className="group relative w-full bg-white text-black h-16 flex items-center justify-between px-6 overflow-hidden hover:bg-primary transition-colors duration-300"
                href={(project as any).source}
                target="_blank"
              >
                <span className="relative z-10 font-bold font-display text-lg tracking-wider">
                  VIEW SOURCE
                </span>
                <span className="relative z-10 material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>

              {(project as any).hostedLink && (
                <a
                  className="group relative w-full border border-white text-white h-16 flex items-center justify-between px-6 overflow-hidden hover:bg-white hover:text-black transition-colors duration-300"
                  href={(project as any).hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 font-bold font-display text-lg tracking-wider">
                    LIVE DEMO
                  </span>
                  <span className="relative z-10 material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="border-t border-[#333]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#333] border-b border-[#333]">
            {project.gallery?.map((img, i) => (
              <div
                key={i}
                className="aspect-square relative group overflow-hidden bg-[#0a0a0a]"
              >
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale contrast-125 focus:grayscale-0"
                />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-black text-white px-1">
                  SYS_LOG_0{i + 1}
                </div>
              </div>
            ))}
            <div className="aspect-square flex items-center justify-center bg-black hover:bg-[#111] transition-colors cursor-pointer group">
              <div className="text-center">
                <span className="material-symbols-outlined text-white text-4xl mb-2 group-hover:scale-110 transition-transform">
                  grid_view
                </span>
                <p className="font-mono text-xs text-primary">VIEW GALLERY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
