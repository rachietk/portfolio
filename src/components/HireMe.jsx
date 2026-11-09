/* A light running down the left border of the page, with HIRE ME glowing beside it. */
export default function HireMe() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-y-0 z-10 hidden min-[700px]:block" style={{ left: 'calc(50% - 340px)' }}>
      <div className="absolute inset-y-0 left-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--ink) / .85) 50%, transparent)', boxShadow: '0 0 14px rgb(var(--ink) / .5)' }} />
      <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-[15px] font-semibold tracking-[.2em] min-[1100px]:block"
        style={{ writingMode: 'vertical-rl', color: 'rgb(var(--ink))', textShadow: '0 0 10px rgb(var(--ink) / .8), 0 0 26px rgb(var(--ink) / .6)', animation: 'flicker 3s infinite' }}>HIRE ME</span>
    </div>
  );
}
