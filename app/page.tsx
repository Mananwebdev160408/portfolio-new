"use client";

import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-32 pb-24">
      <Hero />
      <SelectedWorks />
    </div>
  );
}
