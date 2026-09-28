import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { SpaceComputeDashboard } from "@/components/orbitchip/SpaceComputeDashboard";

const problems = [
  {
    title: "Radiation breaks conventional electronics",
    body: "Single-event effects and cumulative dose are not theoretical failure modes — they are weekly telemetry for any serious bus.",
  },
  {
    title: "Downlink is expensive",
    body: "Megabits per minute are a recurring operational tax. Onboard inference shifts decisions to where photons are already paid for.",
  },
  {
    title: "Onboard autonomy is rising",
    body: "Docking, proximity ops, and closed-loop science require deterministic latency budgets terrestrial clouds cannot meet.",
  },
  {
    title: "Power budgets are tight",
    body: "Every watt competes with propulsion, thermal rejection, and payload duty cycles. Compute must declare an envelope, not a wish.",
  },
  {
    title: "Thermal windows are narrow",
    body: "Eclipse transitions and hot-case payloads squeeze margins. Inference scheduling must be thermally aware, not opportunistic.",
  },
  {
    title: "Mission failure is expensive",
    body: "Insurance lines and launch slots do not forgive silent data corruption in autonomy loops.",
  },
];

const environments = [
  ["LEO", "Constellation-scale inference with frequent ground contact but hostile SEU rates in certain shells."],
  ["GEO", "Long dwell, high-value services — radiation accumulation and thermal stability dominate qualification."],
  ["Lunar", "Cislunar logistics and surface robotics — extended autonomy with intermittent ground visibility."],
  ["Deep space", "Heliocentric and outer-planet trajectories — maximum TID/SEE exposure and repair-by-wire constraints."],
  ["Orbital robotics", "Proximity ops and servicing — real-time perception fused with low-latency control."],
];

const advantages = [
  ["Radiation-tolerant architecture", "Memory scrub, ECC paths, and hardened MAC arrays sized for your orbit class — not a consumer die in a shield can."],
  ["Low-power inference", "TOPS-per-watt envelopes that respect spacecraft bus budgets from rideshare to flagship GEO."],
  ["Fault-aware compute", "Checkpoint policies and dual-rail execution modes aligned to your autonomy certification story."],
  ["Thermal-aware scheduling", "Duty-cycle shaping that coordinates with radiator capacity instead of fighting it."],
  ["Mission-specific profiles", "Die variants and firmware lanes tuned for EO, robotics, relay, or science payloads."],
];

const personas = [
  "Satellite operators",
  "Space robotics teams",
  "Defense contractors",
  "Lunar infrastructure companies",
  "Research missions",
];

const faq = [
  {
    q: "Is this a generic AI accelerator?",
    a: "No. OrbitChip targets inference under explicit radiation, thermal, and power envelopes — the same variables flight software teams already track.",
  },
  {
    q: "Do you replace our flight computer?",
    a: "Typically no. OrbitChip sits as a dedicated inference tile alongside your avionics stack, with deterministic interfaces into your autonomy software.",
  },
  {
    q: "How are estimates generated?",
    a: "The demo engine applies local heuristics mapping orbit class, duration, payload, sensor path, power budget, and autonomy level into a silicon recommendation and risk matrix. No paid APIs.",
  },
];

export default function Home() {
  return (
    <div>
        <div className="overflow-x-hidden">
      <section className="relative border-b border-white/10" data-reveal>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(45,140,255,0.22),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(245,166,35,0.08),transparent_45%)]" />
        <div data-stagger className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p data-stagger className="inline-flex items-center gap-2 rounded-full border border-[#2d8cff]/35 bg-[#2d8cff]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9dc6ff]">
              OrbitChip · Space-grade silicon
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              AI inference chips built for orbit.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              OrbitChip helps spacecraft run reliable onboard intelligence across radiation, power, thermal, and mission constraints. Choose the compute profile that survives the orbit you are actually
              flying.
            </p>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="rounded-full bg-[#2d8cff] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(45,140,255,0.35)]">
                Configure a mission chip
              </Link>
              <Link href="/dashboard" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-white/10">
                View mission dashboard
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-600">Radiation-tolerant inference · Fault-aware scheduling · Mission spec sheets</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-[#0a1628]/80 via-black/40 to-transparent blur-0" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#071022] to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.65)]">
              <svg viewBox="0 0 400 420" className="h-auto w-full" aria-hidden>
                <defs>
                  <linearGradient id="earth" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <radialGradient id="glow" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#2d8cff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2d8cff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="360" rx="170" ry="42" fill="url(#earth)" opacity={0.9} />
                <ellipse cx="200" cy="360" rx="220" ry="52" fill="none" stroke="#2d8cff" strokeOpacity={0.25} strokeWidth="1" />
                <ellipse cx="200" cy="360" rx="260" ry="62" fill="none" stroke="#f5a623" strokeOpacity={0.15} strokeWidth="1" />
                <circle cx="200" cy="160" r="110" fill="url(#glow)" />
                <rect x="130" y="90" width="140" height="140" rx="18" fill="#0b1220" stroke="#94a3b8" strokeOpacity={0.35} strokeWidth="2" />
                <rect x="150" y="110" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="196" y="110" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="242" y="110" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="150" y="156" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="196" y="156" width="36" height="36" rx="4" fill="#2d8cff" stroke="#7eb6ff" strokeWidth="1.5" />
                <rect x="242" y="156" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="150" y="202" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="196" y="202" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <rect x="242" y="202" width="36" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                <text x="200" y="270" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="var(--font-geist-mono), monospace" letterSpacing="4">
                  OC-X2 · ORBIT QUALIFIED
                </text>
              </svg>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  ["Radiation tolerance", "High"],
                  ["Power envelope", "≤ 24W"],
                  ["Thermal rating", "Moderate bus"],
                  ["Inference", "118 TOPS est."],
                  ["Orbit class", "GEO reference"],
                  ["Mission duration", "Multi-year"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">{k}</span>
                    <span className="font-mono text-xs text-[#e2e8f0]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" data-reveal>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">The space compute problem</h2>
          <p className="mt-3 text-sm text-slate-400">Terrestrial AI silicon assumes fresh air, cheap power, and a technician around the corner. None of that survives launch.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <article key={p.title} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-[#050a14]/70 p-5">
              <h3 className="text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#03060c]/80" data-reveal>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Mission Chip Configurator</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                The same UI your team uses in flight reviews: orbit class, duration, payload, sensor path, power budget, thermal constraint, radiation exposure, inference workload, and autonomy level —
                mapped to silicon, fit score, and a mission spec sheet.
              </p>
            </div>
            <Link href="/demo" className="rounded-full border border-[#2d8cff]/40 px-5 py-2.5 text-sm font-medium text-[#9dc6ff] hover:bg-[#2d8cff]/10">
              Open interactive demo
            </Link>
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0a1628] via-[#050810] to-black p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-6">
            <div className="grid gap-4 opacity-95 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-3 rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Constraint panels</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Orbit", "Duration", "Payload", "Sensor", "Power", "Thermal", "Radiation", "Workload", "Autonomy"].map((t) => (
                    <div key={t} className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-2 text-center text-[11px] text-slate-400">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 rounded-xl border border-[#2d8cff]/20 bg-[#2d8cff]/5 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7eb6ff]">Outputs</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>— Recommended chip profile & class</li>
                  <li>— Mission fit score & radiation index</li>
                  <li>— Power envelope & thermal risk matrix</li>
                  <li>— Redundancy recommendation</li>
                  <li>— Exportable mission spec sheet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" data-reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Mission environments</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {environments.map(([title, body]) => (
            <div key={title} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-[#050a14]/60 p-5">
              <p className="font-mono text-xs tracking-widest text-[#f5a623]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40" data-reveal>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Technical advantage</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {advantages.map(([title, body]) => (
              <div key={title} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-gradient-to-br from-[#071022] to-transparent p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" data-reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Mission compute dashboard</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">Fit score, radiation gauge, power envelope, thermal margin, inference throughput, redundancy guidance, and spec sheet preview — tuned from your last configuration.</p>
          </div>
          <Link href="/dashboard" className="text-sm font-medium text-[#2d8cff] hover:underline">
            Full dashboard →
          </Link>
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#050a14]/50 p-4 sm:p-6">
          <SpaceComputeDashboard staticDemo />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#03060c]" data-reveal>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Who we build with</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {personas.map((p) => (
              <span key={p} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" data-reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Why now</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
          More spacecraft are flying with less margin for ground-in-the-loop decisions. Payloads generate more bits per second than downlink budgets can carry. Autonomy stacks are moving from slide decks
          to flight software — and they need silicon that respects radiation physics, not marketing TOPS.
        </p>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#050a14] to-black" data-reveal>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Engagement models</h2>
          <p className="mt-2 text-sm text-slate-500">Not per-seat SaaS. Flight hardware programs are scoped like silicon — review, kit, flight qualification, partnership.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {[
              ["Mission Review", "Fixed-scope architecture sprint", ["Radiation & thermal assumptions", "Compute lane diagram", "Risk register draft"]],
              ["Prototype Kit", "Lab bring-up package", ["Reference carrier + BSP", "Rad-test coupon plan", "Inference benchmarks"]],
              ["Flight Program", "Qualification-aligned delivery", ["Environmental matrix", "Lot traceability", "On-orbit telemetry playbook"]],
              ["Strategic Partner", "Multi-mission roadmap", ["Silicon roadmap co-design", "Dedicated applications team", "ITAR-aware workflows"]],
            ].map(([name, tag, bullets]) => (
              <div key={String(name)} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-black/40 p-5">
                <h3 className="text-sm font-semibold text-white">{String(name)}</h3>
                <p className="mt-1 text-xs text-[#f5a623]">{String(tag)}</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  {(bullets as string[]).map((b) => (
                    <li key={b}>— {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/pricing" className="text-sm font-medium text-[#2d8cff] hover:underline">
              View pricing & contact paths →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6" data-reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-white">FAQ</h2>
        <dl className="mt-8 space-y-6">
          {faq.map((item) => (
            <div key={item.q}>
              <dt className="text-sm font-semibold text-white">{item.q}</dt>
              <dd className="mt-2 text-sm text-slate-400">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-white/10 bg-[#020510]" data-reveal>
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Design the compute before the mission fails.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">Run the Mission Chip Configurator, push results to your mission dashboard, and bring the spec sheet into your next program review.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-full bg-[#2d8cff] px-6 py-3 text-sm font-semibold text-white">
              Configure a mission chip
            </Link>
            <Link href="/contact" className="rounded-full border border-white/15 px-6 py-3 text-sm text-slate-200 hover:bg-white/5">
              Request mission review
            </Link>
          </div>
        </div>
      </section>
    </div>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
