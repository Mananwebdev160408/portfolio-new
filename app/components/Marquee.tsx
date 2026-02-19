export default function Marquee({ text, reverse = false }: { text: string; reverse?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden border-b border-white/10 bg-zinc-900 py-4">
      <div 
        className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: '25s' }}
      >
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className={`text-4xl md:text-6xl font-black px-4 tracking-tight ${i % 2 === 0 ? 'text-transparent text-outline opacity-50' : 'text-white'}`}
          >
            {text} • 
          </span>
        ))}
      </div>
    </div>
  );
}
