export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-40" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl animate-aurora" aria-hidden />
      <div className="absolute bottom-[-10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-aurora" aria-hidden />
      <div className="absolute -right-1/3 top-1/4 h-[30rem] w-[30rem] rounded-full bg-secondary/25 blur-3xl animate-aurora" aria-hidden />
      <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-heading/30 to-transparent opacity-50" aria-hidden />
    </div>
  );
}
