"use client";

import BackgroundEffects from "../components/BackgroundEffects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mockData from "../data/mock.json";
import { useEffect, useState } from "react";

export default function Activity() {
  const { github } = mockData;
  const [contricount, setContricount] = useState(0);
  const [githubdata, setGithubdata] = useState<any>(null);
  const [githubrepos, setGithubrepos] = useState<any>([]);
  
  // New LeetCode States
  
  const [leetcodeQuestionData, setLeetcodeQuestionData] = useState<any>(null);
  const [leetcodeoverallQuestionData, setLeetcodeoverallQuestionData] = useState<any>(null);
  const [leetcodeData, setLeetcodeData] = useState<any>(null);
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const username = "Mananwebdev160408"; // Your unified username

    const fetchGitHubRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=3&sort=updated`);
      const data = await res.json();
      if (Array.isArray(data)) setGithubrepos(data);
    };

    const fetchGitHubProfile = async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setGithubdata(data);
    };

    const fetchLeetCodeQuestionData = async () => {
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/Manan_160408/solved`);
        const data = await res.json();
        setLeetcodeQuestionData(data);
      } catch (error) {
        console.error("LeetCode Question Data Error:", error);
      }
    };
    const fetchLeetCodeoverallQuestionData = async () => {
      try {
        const res = await fetch(`https://leetcode-api-pied.vercel.app/problems`);
        const data = await res.json();
        setLeetcodeoverallQuestionData(data);
      } catch (error) {
        console.error("LeetCode Question Data Error:", error);
      }
    };

    const fetchGitHubContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        const data = await response.json();
        const sum = Object.values(data.total).reduce((acc: number, curr: any) => acc + curr, 0);
        setContricount(sum);
      } catch (error) {
        console.error("GitHub Contributions Error:", error);
      }
    };

    const fetchLeetCodeData = async () => {
      try {
        // Fetching main stats (Total, Easy, Med, Hard, Rank)
        const statsRes = await fetch(`https://alfa-leetcode-api.onrender.com/Manan_160408`);
        const stats = await statsRes.json();
        setLeetcodeData(stats);

        // Fetching last 4 accepted submissions for the list
        const subRes = await fetch(`https://alfa-leetcode-api.onrender.com/Manan_160408/acSubmission?limit=4`);
        const subData = await subRes.json();
        setRecentSubmissions(subData.submission || []);
      } catch (error) {
        console.error("LeetCode API Error:", error);
      }
    };

    fetchGitHubContributions();
    fetchGitHubProfile();
    fetchGitHubRepos();
    fetchLeetCodeData();
    fetchLeetCodeQuestionData();
    fetchLeetCodeoverallQuestionData();
  }, []);

  // UI Calculation Logic
  const solved = leetcodeQuestionData?.solvedProblem || 0;
  const total = leetcodeoverallQuestionData?.length || 0;
  const percentage = total > 0 ? (solved / total) * 100 : 0;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative min-h-screen flex flex-col font-display text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white bg-background-dark">
      <BackgroundEffects />
      <Header />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 py-32 relative z-10">
        <header className="mb-16 md:mb-24 border-b border-white/20 pb-8">
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.85] tracking-tighter">
            <span className="text-primary block text-2xl md:text-4xl font-mono mb-2 tracking-widest">
              02 / SECTION
            </span>
            <span className="text-outline transition-colors duration-300">
              ACTIVITY
            </span>
          </h1>
        </header>

        {/* GitHub Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-4xl text-white">code</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">GitHub</h2>
            <span className="text-xs font-mono px-3 py-1 border border-white/30 rounded-full text-slate-400">
              @{github.username}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatBox label="Total Contributions" value={contricount} />
            <StatBox label="Total Public Repos" value={githubdata?.public_repos || 0} />
            <StatBox label="Followers" value={githubdata?.followers || 0} />
          </div>

          <div className="w-full border border-white/10 bg-zinc-900/20 p-6 overflow-x-auto mb-12">
            <img
              src={`https://ghchart.rshah.org/00ffac/${github.username}`}
              alt="GitHub contribution graph"
              className="w-full min-w-[800px]"
            />
          </div>

          <h3 className="text-xl font-bold mb-6 font-mono uppercase tracking-widest border-l-2 border-primary pl-4">
            Top Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubrepos.map((repo: any) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>

        {/* LeetCode Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-4xl text-white">data_array</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">LeetCode</h2>
            <span className="text-xs font-mono px-3 py-1 border border-white/30 rounded-full text-slate-400">
              Rank: {leetcodeData?.ranking || "N/A"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative aspect-square w-full max-w-[400px] mx-auto lg:mx-0 border border-white/10 bg-zinc-900/50 p-8 flex items-center justify-center rounded-lg backdrop-blur-sm group">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#222" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="40" fill="transparent" stroke="#ec1313"
                    strokeWidth="8" strokeDasharray={circumference}
                    strokeDashoffset={offset} strokeLinecap="square"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
                    {leetcodeQuestionData?.solvedProblem}
                  </span>
                  <div className="w-12 h-[2px] bg-white/30 my-2"></div>
                  <span className="text-xl text-slate-400 font-mono">{leetcodeoverallQuestionData?.length}</span>
                  <span className="text-xs text-primary mt-2 font-bold tracking-widest uppercase">Solved</span>
                </div>
              </div>

              <div className="w-[74%]">
                
                <MiniStat label="Rank" value={leetcodeData?.ranking || "0"} icon="leaderboard" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20">
                <DifficultyBar label="Easy" solved={leetcodeQuestionData?.easySolved || 0} total={leetcodeoverallQuestionData?.filter((q: any) => q.difficulty === "Easy").length || 1} color="bg-green-500" />
                <DifficultyBar label="Medium" solved={leetcodeQuestionData?.mediumSolved || 0} total={leetcodeoverallQuestionData?.filter((q: any) => q.difficulty === "Medium").length || 1} color="bg-yellow-500" />
                <DifficultyBar label="Hard" solved={leetcodeQuestionData?.hardSolved || 0} total={leetcodeoverallQuestionData?.filter((q: any) => q.difficulty === "Hard").length || 1} color="bg-red-500" hoverColor="hover:bg-primary" />
              </div>

              <div className="flex flex-col">
                
                <div className="flex flex-col gap-3">
                  {recentSubmissions.map((item, i) => (
                    <SubmissionRow key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// --- Sub-Components for Cleanliness ---

function StatBox({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-6 border border-white/10 bg-zinc-900/30">
      <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">{label}</div>
      <div className="text-4xl font-bold text-white">{value}</div>
    </div>
  );
}

function MiniStat({ label, value, icon }: any) {
  return (
    <div className="p-6 border flex-1 border-white/10 bg-zinc-900/30 hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-2 mb-2 text-slate-400">
        <span className="material-symbols-outlined text-sm">{icon}</span>
        <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function DifficultyBar({ label, solved, total, color, hoverColor = "hover:bg-white" }: any) {
  const width = (solved / total) * 100;
  return (
    <div className={`p-6 bg-zinc-900/20 group ${hoverColor} hover:text-black transition-colors duration-300`}>
      <h3 className="text-sm font-mono uppercase tracking-widest mb-4 opacity-70">{label}</h3>
      <div className="flex justify-between items-end">
        <span className="text-4xl font-bold">{solved}</span>
        <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded group-hover:border-black/20">SOLVED</span>
      </div>
      <div className="w-full bg-white/10 h-1 mt-4 group-hover:bg-black/10">
        <div className={`${color} h-full transition-all duration-1000`} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

function RepoCard({ repo }: any) {
  return (
    <a href={repo.html_url} target="_blank" className="group p-6 border border-white/10 bg-zinc-900/20 hover:border-primary/50 transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined transform -rotate-45 text-sm">arrow_forward</span>
      </div>
      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{repo.name}</h4>
      <p className="text-sm text-slate-400 mb-4 line-clamp-2 h-10">{repo.description || "No description provided."}</p>
      <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary"></span>{repo.language || "Plain"}
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[10px]">star</span>{repo.stargazers_count}
        </span>
      </div>
    </a>
  );
}

function SubmissionRow({ item }: any) {
  return (
    <div className="group flex flex-col md:flex-row md:items-center justify-between p-4 border border-white/10 bg-zinc-900/40 hover:border-primary/50 hover:bg-zinc-900/80 transition-all cursor-pointer relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
      <div className="flex flex-col gap-1 z-10">
        <span className="font-serif font-bold text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </span>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <span>{new Date(item.timestamp * 1000).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0 z-10">
        <span className="text-xs font-mono text-slate-400">{item.lang}</span>
      </div>
    </div>
  );
}