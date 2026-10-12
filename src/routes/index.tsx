import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/agenticpm-logo.png";
import { TEAMS, CFG, QUOTES } from "@/lib/content";

const DEMO = "https://www.agenticprivatemarkets.ai/schedule-demo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgenticPM Lifecycle Explainer" },
      {
        name: "description",
        content:
          "AgenticPM traces every figure in the data room to its source and flags what doesn't hold up — before it's in the price.",
      },
      { property: "og:title", content: "AgenticPM Lifecycle Explainer" },
      {
        property: "og:description",
        content: "Find what's wrong in the numbers before it's in the price.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Check = ({ s = 12 }: { s?: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <Platform />
      <Cta />
      <Testimonials />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-3">
        <a href="#top" aria-label="Agentic Private Markets home">
          <img src={logo} alt="AgenticPM — Agentic Private Markets" className="block h-10 w-auto" />
        </a>
        <div className="flex flex-wrap items-center gap-6 text-[15px] font-medium text-body">
          <a href="#problem">The problem</a>
          <a href="#platform">Platform</a>
          <a href="#testimonials">Testimonials</a>
          <a
            href={DEMO}
            className="rounded-[10px] bg-primary px-[18px] py-[11px] font-semibold text-primary-foreground"
          >
            Schedule demo
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const chips = [
    "Missed add-backs",
    "Unbooked liabilities",
    "Seasonal swings",
    "Figures that don’t match",
  ];
  return (
    <div id="top" className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-[22px] px-6 pb-[88px] pt-20 text-center">
        <span className="up flex items-center gap-2 rounded-full border border-border px-3.5 py-[7px] text-[13px] font-semibold text-body">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            aria-hidden="true"
          >
            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          SOC 2 Type II · ISO 27001 certified
        </span>
        <h1 className="up m-0 max-w-[940px] text-[clamp(36px,5.2vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
          Find what’s wrong in the numbers{" "}
          <span className="text-primary">before it’s in the price.</span>
        </h1>
        <p className="up max-w-[640px] text-[19px] leading-[1.55] text-body">
          Every figure in the data room is traced to its source and checked. Anything that doesn’t
          hold up is flagged for your team to review.
        </p>
        <div className="up flex flex-wrap justify-center gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-semibold"
            >
              <span className="h-2 w-2 rounded-full bg-warn" />
              {c}
            </span>
          ))}
        </div>
        <div className="up flex flex-wrap justify-center gap-3">
          <a
            href={DEMO}
            className="rounded-xl bg-primary px-6 py-[15px] text-base font-semibold text-primary-foreground"
          >
            Schedule demo
          </a>
          <a
            href="#trial"
            className="rounded-xl border border-border bg-card px-6 py-[15px] text-base font-semibold"
          >
            Start free trial
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 pt-3.5">
          <span className="text-sm text-muted-foreground">Used by teams at</span>
          <div className="flex flex-wrap justify-center gap-x-9 gap-y-3 text-lg font-bold text-muted-foreground">
            {["AI21 Labs", "Wendel", "RKON", "Intrinsic", "Speyside Equity"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
        <div className="up mt-7 w-full rounded-[22px] border border-border bg-card p-2.5 shadow-[var(--shadow-frame)]">
          <div className="relative flex aspect-video flex-col items-center justify-center gap-4 overflow-hidden rounded-[14px] bg-ink p-6">
            <button
              type="button"
              aria-label="Play the product demo"
              className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-card text-primary shadow-[0_0_0_12px_color-mix(in_oklab,var(--card)_12%,transparent)]"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="text-lg font-bold text-primary-foreground">
              Watch the product demo
            </span>
            <span className="label-caps absolute bottom-4 left-5 text-[11px] text-primary-line">
              Demo video
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  const [team, setTeam] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(4);
      return;
    }
    const t = setInterval(() => setStep((s) => (s + 1) % 7), 1000);
    return () => clearInterval(t);
  }, []);
  const c = TEAMS[team]!;
  const shown = Math.min(step, 4);

  return (
    <div id="problem" className="mx-auto flex max-w-[1120px] flex-col gap-9 px-6 py-[88px]">
      <div className="flex max-w-[800px] flex-col gap-3.5">
        <span className="label-caps text-[13px] text-primary">The problem that costs the most</span>
        <h2 className="text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
          Checking the numbers by hand.
        </h2>
        <p className="text-lg leading-[1.6] text-body">
          Every deal decision rests on the target’s numbers: the valuation, the IC memo, the bid.
          Verifying them across the data room is where most deal time goes, and where the costliest
          mistakes start.
        </p>
      </div>

      <div className="flex flex-wrap gap-1 self-start rounded-xl border border-border bg-card p-1">
        {TEAMS.map((tm, i) => (
          <button
            key={tm.name}
            type="button"
            onClick={() => {
              setTeam(i);
              setStep(0);
            }}
            className={`min-h-11 rounded-[9px] px-[18px] py-2.5 text-sm font-bold transition-colors ${team === i ? "bg-primary text-primary-foreground" : "text-body"}`}
          >
            {tm.name}
          </button>
        ))}
      </div>

      <div key={team} className="flex flex-col">
        <div className="up overflow-hidden rounded-[20px] border border-border bg-card">
          <div className="flex flex-col gap-2.5 border-b border-border px-8 py-7">
            <span className="label-caps text-[11px] text-muted-foreground">What happens today</span>
            <span className="max-w-[860px] text-[21px] font-bold leading-[1.4]">{c.problem}</span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <div className="flex items-start gap-4 border-r border-border px-8 py-6">
              <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-secondary text-body">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="label-caps text-[11px] text-body">The time it takes</span>
                <span className="text-base leading-[1.55] text-body">{c.time}</span>
              </span>
            </div>
            <div className="flex items-start gap-4 px-8 py-6">
              <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-warn-soft text-warn-strong">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="label-caps text-[11px] text-warn-strong">What it costs</span>
                <span className="text-base leading-[1.55] text-body">{c.cost}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="up d1 flex justify-center py-1.5">
          <span className="h-[22px] w-0.5 bg-primary-line" />
        </div>
        <div className="up d1 flex justify-center pb-1.5">
          <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            How {c.agent} handles it
          </span>
        </div>
        <div className="up d1 flex justify-center pb-1.5">
          <span className="h-[22px] w-0.5 bg-primary-line" />
        </div>

        <div className="up d2 overflow-hidden rounded-[20px] border-2 border-primary bg-card">
          <div className="h-1 bg-primary-soft">
            <div
              className="h-1 bg-primary transition-[width] duration-600 ease-out"
              style={{ width: `${(shown / c.steps.length) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {c.steps.map((s, j) => {
              const seen = j < shown;
              const current = j === shown - 1 && step <= 4;
              return (
                <div
                  key={s.n}
                  className={`flex flex-col gap-2.5 border-r border-border px-6 py-[26px] transition-all duration-450 ${seen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-[0.12]"} ${current ? "bg-primary-tint" : "bg-card"}`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary text-[15px] font-extrabold transition-all duration-450 ${seen ? "bg-primary text-primary-foreground" : "bg-card text-primary"} ${current ? "shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_15%,transparent)]" : ""}`}
                  >
                    {s.n}
                  </span>
                  <span className="text-[17px] font-bold leading-[1.35]">{s.t}</span>
                  <span className="text-sm leading-[1.5] text-muted-foreground">{s.d}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-primary-soft px-7 py-[18px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
              <path d="m16 11 2 2 4-4" />
            </svg>
            <span className="text-[15px] font-bold">Your team reviews and signs off.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Platform() {
  const [tab, setTab] = useState(0);
  const [item, setItem] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = CFG[tab]!.items;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setItem((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused, items.length, tab]);
  const active = items[item] ?? items[0]!;

  return (
    <div id="platform" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-24">
        <div className="rv flex max-w-[760px] flex-col gap-3">
          <span className="label-caps text-[13px] text-primary">The platform</span>
          <h2 className="text-[clamp(30px,3.6vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
            Configured to your thesis and workflows.
          </h2>
          <p className="text-[17px] leading-[1.6] text-body">
            AgenticPM isn’t a generic chatbot. It absorbs how your firm invests, writes and decides,
            then operates inside your standards.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CFG.map((tb, i) => (
            <button
              key={tb.name}
              type="button"
              onClick={() => {
                setTab(i);
                setItem(0);
                setPaused(false);
              }}
              className={`min-h-11 rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-colors ${tab === i ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-body"}`}
            >
              {tb.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-stretch gap-5">
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-1">
            {items.map((it, i) => {
              const on = i === item;
              return (
                <button
                  key={`${tab}-${it.t}`}
                  type="button"
                  onClick={() => {
                    setItem(i);
                    setPaused(true);
                  }}
                  className={`block min-h-11 w-full rounded-[14px] border px-4 py-3.5 text-left transition-colors ${on ? "border-border bg-card shadow-[var(--shadow-soft)]" : "border-transparent bg-transparent"}`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`label-caps flex h-8 w-8 flex-none items-center justify-center rounded-lg text-xs tracking-normal ${on ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base ${on ? "font-bold text-primary" : "font-medium text-body"}`}
                    >
                      {it.t}
                    </span>
                  </span>
                  {on && (
                    <>
                      <span className="up block pl-11 pt-2 text-sm leading-[1.5] text-body">
                        {it.d}
                      </span>
                      <span className="ml-11 mt-3 block h-[3px] overflow-hidden rounded-[3px] bg-border">
                        <span
                          key={`${tab}-${item}-${paused}`}
                          className={`block h-[3px] bg-primary ${paused ? "w-full" : "bar"}`}
                        />
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
          <div
            key={`m-${tab}-${item}`}
            className="up min-w-0 flex-[2_1_460px] rounded-[18px] border border-border bg-card p-2.5"
          >
            <div className="flex h-full min-h-80 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary-line bg-primary-soft p-6 text-center">
              <span className="label-caps text-xs text-primary">Video / GIF</span>
              <span className="text-xl font-bold">{active.t}</span>
              <span className="max-w-[340px] text-[13px] text-muted-foreground">
                {active.media}
              </span>
            </div>
          </div>
          <div
            key={`b-${tab}-${item}`}
            className="up flex min-w-0 flex-[1_1_240px] flex-col gap-2.5"
          >
            {active.bullets.map((b) => (
              <div
                key={b}
                className="flex flex-1 items-start gap-3 rounded-[14px] border border-border bg-background p-4"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Check />
                </span>
                <span className="text-sm leading-[1.5]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div id="trial" className="bg-card px-6 pb-24">
      <div className="rv mx-auto flex max-w-[1120px] flex-col items-center gap-[18px] rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
        <h2 className="max-w-[760px] text-[clamp(30px,3.8vw,46px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
          See an agent work on your next deal.
        </h2>
        <p className="max-w-[560px] text-[17px] leading-[1.55] text-primary-pale">
          Bring a live deal. We’ll show you the workspace, the agent and the output.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <a
            href={DEMO}
            className="rounded-xl bg-card px-[26px] py-[15px] text-base font-bold text-primary"
          >
            Schedule demo
          </a>
          <a
            href={DEMO}
            className="rounded-xl border border-primary-foreground/60 px-[26px] py-[15px] text-base font-bold"
          >
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div id="testimonials" className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-9 px-6 py-[88px]">
        <div className="rv flex max-w-[700px] flex-col gap-3">
          <span className="label-caps text-[13px] text-primary">Testimonials</span>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
            What teams using AgenticPM say.
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
          {QUOTES.map((q) => (
            <figure
              key={q.initials}
              className="rv flex flex-col justify-between gap-[22px] rounded-[18px] border border-border bg-card p-7"
            >
              <blockquote className="flex flex-col gap-3">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="currentColor"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path d="M0 22V12.6C0 5.4 4 1.2 11 0l1.2 3C8.4 4.2 6.6 6.6 6.4 10H11v12H0zm16 0V12.6C16 5.4 20 1.2 27 0l1.2 3c-3.8 1.2-5.6 3.6-5.8 7H27v12H16z" />
                </svg>
                <p className="text-[17px] leading-[1.6]">{q.text}</p>
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-[18px]">
                <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full bg-primary-soft text-sm font-extrabold text-primary">
                  {q.initials}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-bold">{q.name}</span>
                  <span className="text-[13px] text-muted-foreground">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
