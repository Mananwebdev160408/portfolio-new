import Link from "next/link";
import BackgroundEffects from "../components/BackgroundEffects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mockData from "../data/mock.json";
import Image from "next/image";

export default function Contact() {
  const { personalInfo, socials } = mockData;

  return (
    <div className="relative min-h-screen flex flex-col font-display text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white bg-background-dark">
      <BackgroundEffects />
      <Header />

      <main className="flex-grow flex flex-col justify-center relative z-10 pt-32 pb-20">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Header & Form */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white uppercase">
                Let&apos;s Build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Something.</span>
              </h1>
              
              <form className="flex flex-col gap-8 w-full max-w-3xl mt-8">
                {['Name', 'Email', 'Project Type'].map((label) => (
                  <div key={label} className="relative group">
                    <label className="absolute -top-3 left-4 bg-black px-2 text-xs font-mono text-primary uppercase tracking-widest border border-white/20" htmlFor={label.toLowerCase().replace(' ', '-')}>
                      {label}
                    </label>
                    <input 
                      className="w-full bg-transparent border-2 border-white/20 rounded-sm py-6 px-6 text-xl md:text-2xl text-white placeholder-transparent focus:border-primary focus:ring-0 transition-colors duration-300 outline-none" 
                      id={label.toLowerCase().replace(' ', '-')} 
                      placeholder={`YOUR ${label.toUpperCase()}`} 
                      type={label === 'Email' ? 'email' : 'text'} 
                    />
                  </div>
                ))}
                
                <div className="relative group">
                  <label className="absolute -top-3 left-4 bg-black px-2 text-xs font-mono text-primary uppercase tracking-widest border border-white/20" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    className="w-full bg-transparent border-2 border-white/20 rounded-sm py-6 px-6 text-xl md:text-2xl text-white placeholder-transparent focus:border-primary focus:ring-0 transition-colors duration-300 resize-none outline-none" 
                    id="message" 
                    placeholder="TELL ME ABOUT IT" 
                    rows={6}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button className="group w-full md:w-auto bg-white hover:bg-primary text-black hover:text-white px-12 py-6 text-xl font-bold uppercase tracking-widest transition-all duration-300 border-2 border-white flex items-center justify-center gap-4 rounded-sm shadow-[8px_8px_0px_0px_rgba(236,19,19,0.5)] hover:shadow-none translate-y-0 hover:translate-y-2 hover:translate-x-2" type="button">
                    Send Request
                    <span className="material-symbols-outlined group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Oversized Social Links */}
            <div className="lg:col-span-4 flex flex-col justify-end lg:h-full pb-8 lg:pb-0">
              <div className="flex flex-col gap-2 lg:gap-4 items-start lg:items-end">
                <p className="text-white/40 font-mono text-sm mb-4 lg:mb-8 text-right uppercase tracking-widest">Connect Elsewhere</p>
                {socials.map((social) => (
                  <Link key={social.label} href={social.href} className="group block relative">
                    <span className="text-outline text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                      {social.label === 'GH' ? 'GITHUB' : social.label === 'Li' ? 'LINKEDIN' : social.label === 'TW' ? 'TWITTER' : social.label}
                    </span>
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-primary transition-opacity duration-300">
                       <span className="material-symbols-outlined text-4xl">
                         {social.label === 'GH' ? 'code' : social.label === 'LI' ? 'alternate_email' : 'tag'}
                       </span>
                    </span>
                  </Link>
                ))}

                {/* Map / Location Element */}
                <div className="mt-12 w-full aspect-video border border-white/20 relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-sm">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjQFC0KMS8gxGCeAdklN7jZWMFKz-xEsG_q-NR7mH-Nf5IJptnOQJ8Caos4XKNv0wSEA7AYPwRTwyEieWXL6lD056PWA0dKadAvoR7MC5RLgoAK4gdcD9Fmne_-mKETTIJITVcs1zIuR8x67WJsVJIvpTI5oGWg3P1MNc-Ms1NYtOlNQtN9NySU8RmEKvDz0Sn9y2i8E9SaqcdlgnpZ4UBWXFwj1gJ9BhMX1nIb6p-Hv_Mzv5Rh60ycfz_7o19LnY10S4prMeOsbK"
                    alt="New York City"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary/90 text-white px-3 py-1 text-xs font-mono uppercase tracking-widest"> Based in {personalInfo.location}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
