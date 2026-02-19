import mockData from "../data/mock.json";

export default function TechMarquee() {

  const techStack = ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"]


  return (
    <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
      <div className="h-24 w-px bg-white/20"></div>
      <div className="marquee-container flex flex-col gap-8 uppercase text-[10px] tracking-[0.4em] font-bold whitespace-nowrap">
        <span>{techStack.join(" • ")}</span>
      </div>
      <div className="h-24 w-px bg-white/20"></div>
    </aside>
  );
}
