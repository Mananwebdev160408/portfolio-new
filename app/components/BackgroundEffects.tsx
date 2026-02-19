export default function BackgroundEffects() {
  return (
    <>
      <div className="grain-overlay fixed inset-0 w-full h-full pointer-events-none z-50 opacity-40 mix-blend-overlay"></div>
      <div className="grid-bg fixed inset-0 pointer-events-none z-0"></div>
    </>
  );
}
