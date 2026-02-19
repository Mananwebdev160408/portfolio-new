import BackgroundEffects from "../components/BackgroundEffects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import mockData from "../data/mock.json";

export default function Stack() {
  const { techStack } = mockData;

  return (
    <div className="relative min-h-screen flex flex-col font-display text-slate-100 overflow-x-hidden selection:bg-white selection:text-black bg-black">
      <BackgroundEffects />
      <Header />

      <main className="relative z-10 flex-grow flex flex-col justify-center py-20 px-6">
         <div className="max-w-[1400px] mx-auto w-full">
            <div className="mb-24 relative">
                <div className="absolute -top-10 left-0 font-mono text-xs text-white/60 tracking-[0.2em] animate-pulse">
                    :: SYSTEM_STATUS : ONLINE <br/>
                    :: ROOT_ACCESS : GRANTED
                </div>
                <div className="relative z-10">
                    <h1 className="text-[clamp(4rem,9vw,11rem)] leading-[0.75] font-bold tracking-tighter uppercase select-none mix-blend-normal">
                        <span className="block text-white">Tech</span>
                    </h1>
                     <h1 className="text-[clamp(4rem,9vw,11rem)] leading-[0.75] font-serif italic tracking-tight text-white/50 absolute top-12 left-[10vw] -z-10 opacity-50">
                        Stack
                    </h1>
                </div>
                 <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-2 border-white pl-6">
                    <p className="max-w-md text-slate-300 font-mono text-sm leading-relaxed">
                        &gt; ACTIVE KNOWLEDGE ACQUISITION VECTORS.<br/>
                        &gt; STACK VISUALIZATION: VERTICAL HEAP.<br/>
                        &gt; MEMORY ALLOCATION: DYNAMIC.
                    </p>
                    <div className="font-mono text-xs text-right text-white">
                        SESSION_ID: 0x8F2A<br/>
                        UPTIME: 42H 12M
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 w-full">
                {techStack.map((stack, i) => (
                    <div key={i} className="flex gap-6 group">
                         <div className="w-24 md:w-32 h-[400px] border-2 border-white flex flex-col justify-end bg-black relative p-1">
                             <div className="absolute -left-10 top-0 origin-top-left -rotate-90 text-white font-bold tracking-widest text-lg whitespace-nowrap mt-32 opacity-50">
                                HEAP_ALLOC_0{i+1}
                             </div>
                             <div className="absolute top-2 right-2 font-mono text-xs text-white z-20 mix-blend-difference">{stack.percentage}%</div>
                             <div 
                                className="w-full bg-white relative overflow-hidden group-hover:bg-white/90 transition-all duration-300"
                                style={{ height: `${stack.percentage}%` }}
                             >
                                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>
                             </div>
                         </div>
                         <div className="flex-1 flex flex-col justify-between py-2">
                             <div>
                                 <h3 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tighter text-white group-hover:text-white/80 transition-colors">{stack.name}</h3>
                                 <span className="font-serif italic text-slate-400 text-xl">{stack.category}</span>
                             </div>
                             <div className="font-mono text-[10px] md:text-xs leading-5 text-slate-400 border-l border-white/20 pl-4 space-y-2">
                                 {stack.logs.map((log, j) => (
                                     <p key={j} className="text-white">&gt;&gt; {log}</p>
                                 ))}
                                 <div className="h-px w-full bg-white/20 mt-2"></div>
                                 <p className="text-white animate-pulse">_CURSOR_ACTIVE</p>
                             </div>
                         </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 border-t border-white/20 pt-8 relative">
                 <div className="absolute -top-6 right-10 w-12 h-12 border border-white rotate-12"></div>
                 <div className="absolute -top-4 right-8 w-12 h-12 border border-white/40 rotate-45"></div>
                 <div className="font-mono text-xs text-slate-500 mb-4 flex items-center gap-2">
                     <span className="material-symbols-outlined text-sm">terminal</span>
                     TERMINAL_OUTPUT
                 </div>
                 <div className="bg-black/80 border border-white/30 p-6 font-mono text-sm leading-6 text-slate-300 h-48 overflow-y-auto shadow-inner backdrop-blur-md">
                     <div className="flex gap-4">
                         <span className="text-white select-none">$</span>
                         <span className="text-white">cargo build --release</span>
                     </div>
                     <div className="text-slate-400">   Compiling portfolio_core v0.1.0 (/usr/src/portfolio)</div>
                     <div className="text-slate-400">   Compiling ui_components v0.2.1</div>
                     <div className="text-white/60">   Warning: unused import `std::fs` in `lib.rs:42`</div>
                     <div className="text-slate-400">   Finished release [optimized] target(s) in 12.34s</div>
                     <div className="flex gap-4 mt-2 animate-pulse">
                         <span className="text-white select-none">$</span>
                         <span className="w-2 h-4 bg-white block"></span>
                     </div>
                 </div>
            </div>
         </div>
      </main>

      <Marquee text="LET'S BUILD THE FUTURE TOGETHER • MANAN GUPTA • FULL STACK ENGINEER" />
      <Footer />
    </div>
  );
}
