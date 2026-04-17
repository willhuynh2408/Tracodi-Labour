<!DOCTYPE html>
<html class="light" lang="en">
<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Tracodi Labour | Labor Export With Precision</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@200..700,0..1&display=swap" rel="stylesheet">
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b90014",
        "primary-container": "#d43c40",
        secondary: "#0c5fae",
        "secondary-soft": "#7aa9d8",
        surface: "#fbf9f9",
        "surface-container-low": "#f5f3f3",
        "surface-container-high": "#e9e8e7",
        "surface-container-highest": "#e3e2e2",
        "surface-container-lowest": "#ffffff",
        "ink-strong": "#151617",
        "ink-soft": "#4c5158",
        "outline-ghost": "rgba(21, 22, 23, 0.08)"
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 40px 80px rgba(21, 22, 23, 0.08)"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.375rem"
      }
    }
  }
};
</script>
<style>
  html {
    scroll-behavior: smooth;
  }

  body {
    background:
      radial-gradient(circle at top left, rgba(12, 95, 174, 0.08), transparent 28%),
      radial-gradient(circle at bottom right, rgba(185, 0, 20, 0.08), transparent 24%),
      #fbf9f9;
  }

  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 24;
  }

  .eyebrow {
    letter-spacing: 0.22em;
  }

  .hero-wash {
    background:
      linear-gradient(90deg, rgba(18, 20, 24, 0.92) 0%, rgba(18, 20, 24, 0.72) 46%, rgba(18, 20, 24, 0.26) 100%);
  }

  .glass-bar {
    background: rgba(251, 249, 249, 0.7);
    backdrop-filter: blur(20px);
  }

  .action-primary {
    background: linear-gradient(135deg, #b90014 0%, #d43c40 100%);
  }

  .action-primary:hover {
    transform: translateY(-2px);
  }

  .action-secondary:hover {
    transform: translateY(-2px);
    background: rgba(12, 95, 174, 0.08);
  }

  .panel {
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 40px 80px rgba(21, 22, 23, 0.08);
  }

  .section-panel {
    background: #f5f3f3;
  }

  .stat-block {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.74));
  }

  .grid-noise {
    background-image:
      linear-gradient(rgba(21, 22, 23, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(21, 22, 23, 0.04) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .market-card:hover,
  .flow-card:hover,
  .track-card:hover,
  .proof-card:hover {
    transform: translateY(-4px);
  }

  .map-node::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 999px;
    background: rgba(185, 0, 20, 0.18);
    animation: pulse 2.6s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.7;
      transform: scale(0.7);
    }

    100% {
      opacity: 0;
      transform: scale(2.3);
    }
  }
</style>
</head>
<body class="font-body text-ink-strong">
<nav class="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
  <div class="glass-bar mx-auto flex max-w-7xl items-center justify-between rounded-xl px-5 py-4 shadow-ambient">
    <a class="flex items-center gap-3" href="#top">
      <div class="flex h-10 w-10 items-center justify-center rounded bg-primary text-sm font-semibold text-white">SB</div>
      <div>
        <p class="font-headline text-lg font-bold tracking-[-0.03em] text-ink-strong">Tracodi</p>
        <p class="text-[11px] uppercase tracking-[0.26em] text-ink-soft">Labour Mobility</p>
      </div>
    </a>
    <div class="hidden items-center gap-8 md:flex">
      <a class="text-sm font-medium text-ink-soft transition hover:text-primary" href="#why">Why Us</a>
      <a class="text-sm font-medium text-ink-soft transition hover:text-primary" href="#markets">Markets</a>
      <a class="text-sm font-medium text-ink-soft transition hover:text-primary" href="#process">Process</a>
      <a class="text-sm font-medium text-ink-soft transition hover:text-primary" href="#academy">Academy</a>
      <a class="text-sm font-medium text-ink-soft transition hover:text-primary" href="#contact">Contact</a>
    </div>
    <div class="hidden md:block">
      <a class="action-primary inline-flex items-center gap-2 rounded px-5 py-3 text-sm font-semibold text-white transition-all duration-300" href="#contact">
        Request Proposal
        <span class="material-symbols-outlined text-base">north_east</span>
      </a>
    </div>
    <button aria-controls="mobile-menu" aria-expanded="false" class="inline-flex h-11 w-11 items-center justify-center rounded bg-surface-container-low text-ink-strong md:hidden" id="menu-toggle" type="button">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
  <div class="glass-bar mx-auto mt-2 hidden max-w-7xl rounded-xl px-5 py-4 shadow-ambient md:hidden" id="mobile-menu">
    <div class="flex flex-col gap-4">
      <a class="text-sm font-medium text-ink-soft" href="#why">Why Us</a>
      <a class="text-sm font-medium text-ink-soft" href="#markets">Markets</a>
      <a class="text-sm font-medium text-ink-soft" href="#process">Process</a>
      <a class="text-sm font-medium text-ink-soft" href="#academy">Academy</a>
      <a class="text-sm font-medium text-ink-soft" href="#contact">Contact</a>
      <a class="action-primary inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold text-white transition-all duration-300" href="#contact">
        Request Proposal
        <span class="material-symbols-outlined text-base">north_east</span>
      </a>
    </div>
  </div>
</nav>

<main id="top">
  <section class="relative min-h-screen overflow-hidden">
    <div class="absolute inset-0">
      <img alt="Industrial workforce on a Labour job site" class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80">
      <div class="hero-wash absolute inset-0"></div>
      <div class="grid-noise absolute inset-0 opacity-30"></div>
    </div>
    <div class="relative mx-auto grid min-h-screen max-w-7xl items-end gap-12 px-4 pb-14 pt-32 md:px-6 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:gap-16 lg:pb-20">
      <div class="max-w-3xl">
        <p class="eyebrow mb-6 text-xs font-semibold uppercase text-white/70">Licensed labor export for industrial, care, and technical sectors</p>
        <h1 class="max-w-4xl font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
          Structured pathways from local talent to Labour job sites.
        </h1>
        <p class="mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
          Tracodi designs compliant labor deployment systems for employers and workers alike, combining recruitment, training, visa coordination, and post-arrival support into one disciplined operating model.
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a class="action-primary inline-flex items-center justify-center gap-2 rounded px-7 py-4 text-sm font-semibold text-white transition-all duration-300" href="#contact">
            Talk To Our Mobility Team
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <a class="action-secondary inline-flex items-center justify-center gap-2 rounded bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300" href="#process">
            See Deployment Process
            <span class="material-symbols-outlined text-base">south</span>
          </a>
        </div>
        <div class="mt-14 grid gap-4 sm:grid-cols-3">
          <div class="stat-block rounded-xl px-5 py-5">
            <p class="font-headline text-4xl font-extrabold tracking-[-0.05em] text-primary">18.4k</p>
            <p class="mt-2 text-[11px] uppercase tracking-[0.24em] text-ink-soft">Workers deployed</p>
          </div>
          <div class="stat-block rounded-xl px-5 py-5">
            <p class="font-headline text-4xl font-extrabold tracking-[-0.05em] text-secondary">12</p>
            <p class="mt-2 text-[11px] uppercase tracking-[0.24em] text-ink-soft">Destination markets</p>
          </div>
          <div class="stat-block rounded-xl px-5 py-5">
            <p class="font-headline text-4xl font-extrabold tracking-[-0.05em] text-primary">96%</p>
            <p class="mt-2 text-[11px] uppercase tracking-[0.24em] text-ink-soft">12 month retention</p>
          </div>
        </div>
      </div>

      <aside class="panel rounded-xl p-6 lg:p-7">
        <div class="flex items-center justify-between">
          <div>
            <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Deployment control room</p>
            <h2 class="mt-2 font-headline text-2xl font-bold tracking-[-0.04em] text-ink-strong">One system. Two user journeys.</h2>
          </div>
          <div class="rounded bg-surface-container-low px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">24/7 Desk</div>
        </div>
        <div class="mt-7 grid gap-4">
          <div class="rounded-xl bg-surface-container-lowest p-5">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-ink-strong">For employers</p>
                <p class="mt-2 text-sm leading-7 text-ink-soft">Demand planning, shortlist delivery, compliance packets, and arrival scheduling built for repeat hiring.</p>
              </div>
              <span class="material-symbols-outlined text-secondary">domain</span>
            </div>
          </div>
          <div class="rounded-xl bg-surface-container-lowest p-5">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-ink-strong">For workers</p>
                <p class="mt-2 text-sm leading-7 text-ink-soft">Skill assessment, language preparation, visa guidance, and transition coaching from intake to overseas onboarding.</p>
              </div>
              <span class="material-symbols-outlined text-primary">badge</span>
            </div>
          </div>
        </div>
        <div class="mt-7 rounded-xl bg-ink-strong px-5 py-6 text-white">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="eyebrow text-[11px] font-semibold uppercase text-white/55">Active sectors</p>
              <p class="mt-2 font-headline text-2xl font-bold tracking-[-0.04em]">Construction, care, manufacturing, logistics</p>
            </div>
            <span class="material-symbols-outlined text-3xl text-white/75">factory</span>
          </div>
          <div class="mt-5 grid grid-cols-2 gap-3 text-sm text-white/75">
            <div class="rounded bg-white/8 px-4 py-3">Site labor</div>
            <div class="rounded bg-white/8 px-4 py-3">Nursing aides</div>
            <div class="rounded bg-white/8 px-4 py-3">Machine operators</div>
            <div class="rounded bg-white/8 px-4 py-3">Warehouse teams</div>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <section class="px-4 py-20 md:px-6 md:py-28" id="why">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <p class="eyebrow text-xs font-semibold uppercase text-primary">Why Tracodi</p>
          <h2 class="mt-5 max-w-xl font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-ink-strong md:text-5xl">
            Premium labor mobility built on structure, not improvisation.
          </h2>
        </div>
        <p class="max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
          We position labor export as an operational system. Each deployment is handled through reusable components: sourcing, screening, documentation, embassy prep, travel scheduling, and destination care. That discipline lowers friction for employers and makes the experience clearer for workers.
        </p>
      </div>

      <div class="section-panel mt-14 rounded-xl p-6 md:p-8 lg:p-10">
        <div class="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="rounded-xl bg-surface-container-lowest p-6">
              <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Compliance first</p>
              <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Document control with audit-ready handoff.</h3>
              <p class="mt-4 text-sm leading-7 text-ink-soft">Contracts, medicals, certifications, and visa files are staged through one documented sequence to reduce avoidable delays.</p>
            </div>
            <div class="rounded-xl bg-surface-container-lowest p-6">
              <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Human centered</p>
              <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Worker preparation that improves retention.</h3>
              <p class="mt-4 text-sm leading-7 text-ink-soft">Language readiness, cultural orientation, and arrival support are treated as core product features rather than afterthoughts.</p>
            </div>
            <div class="rounded-xl bg-surface-container-lowest p-6 sm:col-span-2">
              <div class="grid gap-6 md:grid-cols-3">
                <div>
                  <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-primary">72h</p>
                  <p class="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft">Initial shortlist turnaround</p>
                </div>
                <div>
                  <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-secondary">4.9/5</p>
                  <p class="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft">Employer satisfaction score</p>
                </div>
                <div>
                  <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-primary">9</p>
                  <p class="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft">In-house training tracks</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl">
            <img alt="Professional pre-departure training facility" class="h-full min-h-[440px] w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80">
            <div class="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/45 to-primary/10"></div>
            <div class="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div class="rounded-xl bg-white/12 p-6 backdrop-blur">
                <p class="eyebrow text-[11px] font-semibold uppercase text-white/60">Carefully staged experience</p>
                <h3 class="mt-3 max-w-md font-headline text-3xl font-bold tracking-[-0.05em] text-white">The interface mirrors the business: calm, orderly, and precise under pressure.</h3>
                <p class="mt-4 max-w-md text-sm leading-7 text-white/78">Every touchpoint, from inquiry to deployment, is designed to reduce uncertainty and make next steps obvious.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-surface-container-low px-4 py-20 md:px-6 md:py-28" id="markets">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <div>
          <p class="eyebrow text-xs font-semibold uppercase text-primary">Destination markets</p>
          <h2 class="mt-5 max-w-xl font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-ink-strong md:text-5xl">
            Export programs matched to sectors with real demand.
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
            Market selection is based on documentation pathways, employer quality, and the worker support required after arrival. The result is a tighter fit between candidate profile and destination context.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="market-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
            <p class="eyebrow text-[11px] font-semibold uppercase text-secondary">Japan</p>
            <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Manufacturing and machining</h3>
            <p class="mt-4 text-sm leading-7 text-ink-soft">Structured placement for operators, assembly staff, and production support teams.</p>
          </div>
          <div class="market-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
            <p class="eyebrow text-[11px] font-semibold uppercase text-secondary">Germany</p>
            <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Care support and technical trades</h3>
            <p class="mt-4 text-sm leading-7 text-ink-soft">Language preparation and certification alignment for high-accountability roles.</p>
          </div>
          <div class="market-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
            <p class="eyebrow text-[11px] font-semibold uppercase text-secondary">UAE</p>
            <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Construction and facility operations</h3>
            <p class="mt-4 text-sm leading-7 text-ink-soft">Fast-moving deployment pipelines for civil, MEP, and maintenance demand.</p>
          </div>
          <div class="market-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
            <p class="eyebrow text-[11px] font-semibold uppercase text-secondary">Poland</p>
            <h3 class="mt-4 font-headline text-2xl font-bold tracking-[-0.04em]">Warehousing and logistics</h3>
            <p class="mt-4 text-sm leading-7 text-ink-soft">Shift-ready recruitment for fulfillment, picking, packing, and forklift teams.</p>
          </div>
        </div>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_340px]">
        <div class="relative overflow-hidden rounded-xl bg-[#101318] p-8 md:p-10">
          <div class="absolute inset-0 opacity-60">
            <div class="absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-primary map-node"></div>
            <div class="absolute left-[46%] top-[20%] h-3 w-3 rounded-full bg-primary map-node"></div>
            <div class="absolute left-[58%] top-[34%] h-3 w-3 rounded-full bg-primary map-node"></div>
            <div class="absolute left-[72%] top-[56%] h-3 w-3 rounded-full bg-primary map-node"></div>
            <div class="absolute left-[82%] top-[68%] h-3 w-3 rounded-full bg-primary map-node"></div>
            <div class="grid-noise absolute inset-0 opacity-20"></div>
          </div>
          <div class="relative z-10 max-w-xl">
            <p class="eyebrow text-xs font-semibold uppercase text-white/55">Mobility network</p>
            <h3 class="mt-4 font-headline text-3xl font-bold tracking-[-0.05em] text-white md:text-4xl">A visible route from sourcing bench to overseas onboarding.</h3>
            <p class="mt-5 text-sm leading-7 text-white/72 md:text-base">Instead of showing a decorative map, we surface market logic: where demand sits, which sectors are active, and how support intensity changes by route.</p>
          </div>
        </div>
        <div class="rounded-xl bg-surface-container-lowest p-6">
          <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Current demand snapshot</p>
          <div class="mt-6 space-y-5">
            <div>
              <div class="flex items-center justify-between text-sm font-medium text-ink-strong">
                <span>Construction crews</span>
                <span>420 roles</span>
              </div>
              <div class="mt-2 h-2 rounded bg-surface-container-high">
                <div class="h-2 w-[82%] rounded bg-primary"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between text-sm font-medium text-ink-strong">
                <span>Care assistants</span>
                <span>268 roles</span>
              </div>
              <div class="mt-2 h-2 rounded bg-surface-container-high">
                <div class="h-2 w-[64%] rounded bg-secondary"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between text-sm font-medium text-ink-strong">
                <span>Machine operators</span>
                <span>314 roles</span>
              </div>
              <div class="mt-2 h-2 rounded bg-surface-container-high">
                <div class="h-2 w-[72%] rounded bg-primary"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between text-sm font-medium text-ink-strong">
                <span>Warehouse teams</span>
                <span>191 roles</span>
              </div>
              <div class="mt-2 h-2 rounded bg-surface-container-high">
                <div class="h-2 w-[48%] rounded bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 md:px-6 md:py-28" id="process">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
        <div>
          <p class="eyebrow text-xs font-semibold uppercase text-primary">Recruitment flow</p>
          <h2 class="mt-5 max-w-lg font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-ink-strong md:text-5xl">
            Every step makes the next one easier to trust.
          </h2>
        </div>
        <p class="max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
          The journey is transparent for both sides. Employers see pipeline status and documentation readiness. Workers see exactly how assessment, training, embassy preparation, and deployment fit together.
        </p>
      </div>

      <div class="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div class="flow-card rounded-xl bg-surface-container-low p-6 transition duration-300">
          <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-primary">01</p>
          <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em]">Intake and profiling</h3>
          <p class="mt-4 text-sm leading-7 text-ink-soft">Role mapping, candidate history review, and fit scoring against destination market criteria.</p>
        </div>
        <div class="flow-card rounded-xl bg-surface-container-low p-6 transition duration-300">
          <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-secondary">02</p>
          <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em]">Assessment and shortlist</h3>
          <p class="mt-4 text-sm leading-7 text-ink-soft">Trade testing, interviews, employer presentation packs, and initial offer coordination.</p>
        </div>
        <div class="flow-card rounded-xl bg-surface-container-low p-6 transition duration-300">
          <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-primary">03</p>
          <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em]">Training and documentation</h3>
          <p class="mt-4 text-sm leading-7 text-ink-soft">Language modules, pre-departure coaching, medicals, contracts, and embassy file preparation.</p>
        </div>
        <div class="flow-card rounded-xl bg-surface-container-low p-6 transition duration-300">
          <p class="font-headline text-5xl font-extrabold tracking-[-0.05em] text-secondary">04</p>
          <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em]">Travel and arrival care</h3>
          <p class="mt-4 text-sm leading-7 text-ink-soft">Flight scheduling, accommodation coordination, arrival check-ins, and early-stage retention follow-up.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#101318] px-4 py-20 md:px-6 md:py-28" id="academy">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <div>
          <p class="eyebrow text-xs font-semibold uppercase text-white/55">Training academy</p>
          <h2 class="mt-5 max-w-lg font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white md:text-5xl">
            Readiness programs that feel disciplined, not institutional.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
            The academy experience is designed like the rest of the site: layered, clear, and confidence-building. Candidates move through focused tracks with visible milestones and practical preparation.
          </p>
          <div class="mt-10 rounded-xl bg-white/6 p-6 backdrop-blur">
            <p class="eyebrow text-[11px] font-semibold uppercase text-white/55">Signature modules</p>
            <div class="mt-5 grid gap-4 sm:grid-cols-2">
              <div class="rounded bg-white/8 px-4 py-4 text-sm text-white/80">Trade safety and site rules</div>
              <div class="rounded bg-white/8 px-4 py-4 text-sm text-white/80">Language for the workplace</div>
              <div class="rounded bg-white/8 px-4 py-4 text-sm text-white/80">Interview and employer etiquette</div>
              <div class="rounded bg-white/8 px-4 py-4 text-sm text-white/80">Cultural transition and arrival prep</div>
            </div>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="track-card rounded-xl bg-white/8 p-6 transition duration-300">
            <span class="material-symbols-outlined text-3xl text-white/80">construction</span>
            <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em] text-white">Built environment track</h3>
            <p class="mt-4 text-sm leading-7 text-white/70">Construction helpers, MEP assistants, welders, and finishing teams trained for site discipline and safety compliance.</p>
          </div>
          <div class="track-card rounded-xl bg-white/8 p-6 transition duration-300">
            <span class="material-symbols-outlined text-3xl text-white/80">health_and_safety</span>
            <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em] text-white">Care pathway</h3>
            <p class="mt-4 text-sm leading-7 text-white/70">Preparation for nursing aides and care assistants, including language routines and patient-facing communication.</p>
          </div>
          <div class="track-card rounded-xl bg-white/8 p-6 transition duration-300">
            <span class="material-symbols-outlined text-3xl text-white/80">precision_manufacturing</span>
            <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em] text-white">Production line track</h3>
            <p class="mt-4 text-sm leading-7 text-white/70">Machine operation, shift protocols, factory communication, and process discipline for manufacturing placements.</p>
          </div>
          <div class="track-card rounded-xl bg-white/8 p-6 transition duration-300">
            <span class="material-symbols-outlined text-3xl text-white/80">local_shipping</span>
            <h3 class="mt-6 font-headline text-2xl font-bold tracking-[-0.04em] text-white">Logistics track</h3>
            <p class="mt-4 text-sm leading-7 text-white/70">Warehouse flow, picking systems, forklift readiness, and operational communication for fulfillment roles.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 md:px-6 md:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div class="section-panel rounded-xl p-6 md:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
            <div>
              <p class="eyebrow text-xs font-semibold uppercase text-primary">Proof and assurance</p>
              <h2 class="mt-5 max-w-md font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-ink-strong">The business feels premium when trust is tangible.</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="proof-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
                <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Licensed operations</p>
                <p class="mt-4 text-sm leading-7 text-ink-soft">Clear documentation standards and destination-specific compliance practices built into the operating flow.</p>
              </div>
              <div class="proof-card rounded-xl bg-surface-container-lowest p-6 transition duration-300">
                <p class="eyebrow text-[11px] font-semibold uppercase text-ink-soft">Employer continuity</p>
                <p class="mt-4 text-sm leading-7 text-ink-soft">Repeat hiring programs for partners that need predictable pipelines instead of one-off recruitment bursts.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-xl bg-surface-container-lowest p-6 shadow-ambient">
          <span class="material-symbols-outlined text-4xl text-primary">format_quote</span>
          <p class="mt-5 text-base leading-8 text-ink-strong">
            Tracodi gave us a structured shortlist and a calmer deployment cycle. The interface reflects the service: serious, clear, and efficient.
          </p>
          <div class="mt-8">
            <p class="font-headline text-xl font-bold tracking-[-0.03em]">Rami Haddad</p>
            <p class="mt-1 text-sm text-ink-soft">Operations Director, Gulf Build Group</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 pb-20 md:px-6 md:pb-28" id="contact">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#b90014_0%,#7e0f1e_34%,#0f1720_100%)] px-6 py-10 md:px-10 md:py-12">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <p class="eyebrow text-xs font-semibold uppercase text-white/55">Start a conversation</p>
            <h2 class="mt-5 max-w-2xl font-headline text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Build a labor export website that feels as reliable as the service itself.
            </h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              This landing page positions the company as a disciplined mobility partner for both employers and workers, with premium spacing, stronger typography, and reusable visual building blocks across sections.
            </p>
          </div>
          <div class="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div class="space-y-4">
              <div class="rounded bg-white/12 px-4 py-4 text-sm text-white/84">hello@Tracodi.Labour</div>
              <div class="rounded bg-white/12 px-4 py-4 text-sm text-white/84">+84 28 5555 0186</div>
              <div class="rounded bg-white/12 px-4 py-4 text-sm text-white/84">HCMC Operations Hub | Labour placement desk</div>
            </div>
            <a class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-white px-5 py-4 text-sm font-semibold text-ink-strong transition hover:bg-surface-container-low" href="mailto:hello@Tracodi.Labour">
              Request A Design Consultation
              <span class="material-symbols-outlined text-base">mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="px-4 pb-8 md:px-6">
  <div class="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl bg-[#111317] px-6 py-8 text-white md:flex-row md:items-end md:justify-between md:px-8">
    <div>
      <p class="font-headline text-2xl font-bold tracking-[-0.04em]">Tracodi Labour</p>
      <p class="mt-3 max-w-md text-sm leading-7 text-white/62">Labor export systems for employers who need dependable overseas talent pipelines and workers who need a clearer path to Labour opportunity.</p>
    </div>
    <div class="flex gap-6 text-sm text-white/62">
      <a class="transition hover:text-white" href="#why">Why Us</a>
      <a class="transition hover:text-white" href="#markets">Markets</a>
      <a class="transition hover:text-white" href="#process">Process</a>
      <a class="transition hover:text-white" href="#contact">Contact</a>
    </div>
  </div>
</footer>

<script>
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", function () {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden);
    toggle.setAttribute("aria-expanded", String(isHidden));
  });
</script>
</body>
</html>
