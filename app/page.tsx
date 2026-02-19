import BackgroundEffects from "./components/BackgroundEffects";
import Header from "./components/Header";
import TechMarquee from "./components/TechMarquee";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-display text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white">
      <BackgroundEffects />
      <Header />
      <TechMarquee />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 pt-32 pb-24 relative z-10">
        <Hero />
        <SelectedWorks />
      </main>

      <Footer />
    </div>
  );
}
