import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16 overflow-hidden">
        <div className="hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-cyan/5 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-cyan-deep/5 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-xs font-medium text-cyan">Now accepting new projects</span>
          </div>

          <svg className="w-16 h-16 mb-6" viewBox="0 0 200 200" fill="none">
            <path d="M 50 50 L 92 92 M 108 108 L 150 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
            <path d="M 150 50 L 108 92 M 92 108 L 50 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
          </svg>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] mb-4">
            UXNIFY
          </h1>

          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold max-w-3xl leading-tight mb-6">
            Your business needs{" "}
            <span className="gradient-text">one app</span>.{" "}
            <span className="text-steel">Not twelve.</span>
          </p>

          <p className="text-base md:text-lg text-steel max-w-xl leading-relaxed mb-10">
            We build custom software that replaces your tool chaos — designed for how you actually work. Enterprise-grade, human-sized.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="group relative bg-cyan text-onyx font-heading font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_40px_rgba(77,227,255,0.3)] transition-all">
              Book a Discovery Call
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#problem" className="border border-white/10 text-ice font-heading font-medium px-8 py-4 rounded-xl hover:border-cyan/30 hover:bg-white/[0.02] transition-all">
              See How It Works
            </a>
          </div>

          <p className="mt-14 text-xs text-steel tracking-[0.2em] uppercase">
            Unify &middot; Integrate &middot; Automate
          </p>
        </div>
      </section>

      {/* Trusted By / Stats */}
      <section className="relative py-20 px-6 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-cyan">10+</div>
            <div className="text-sm text-steel mt-1">Years Experience</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">3</div>
            <div className="text-sm text-steel mt-1">Industries Served</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">D365</div>
            <div className="text-sm text-steel mt-1">Platform Expertise</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">12→1</div>
            <div className="text-sm text-steel mt-1">Tools Replaced</div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow top-0 left-1/4" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              The Problem
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Nobody designed your tech stack
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              Your team uses WhatsApp for some clients, email for others, a CRM nobody updates, and a calendar that doesn&apos;t sync. Nobody chose this. It just happened.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                  <span className="text-amber text-lg">⚠</span>
                </div>
                <h3 className="font-heading font-semibold text-lg">Sound familiar?</h3>
              </div>
              <ul className="space-y-4 text-mist text-[0.9375rem] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-amber/60 shrink-0 mt-0.5">✕</span>
                  Every person uses different tools to reach clients
                </li>
                <li className="flex gap-3">
                  <span className="text-amber/60 shrink-0 mt-0.5">✕</span>
                  New hires take 3 weeks to learn &ldquo;how we do things&rdquo;
                </li>
                <li className="flex gap-3">
                  <span className="text-amber/60 shrink-0 mt-0.5">✕</span>
                  You can&apos;t see what&apos;s happening without asking everyone
                </li>
                <li className="flex gap-3">
                  <span className="text-amber/60 shrink-0 mt-0.5">✕</span>
                  Clients fall through cracks between tools
                </li>
                <li className="flex gap-3">
                  <span className="text-amber/60 shrink-0 mt-0.5">✕</span>
                  Paying for 10 subscriptions, using pieces of each
                </li>
              </ul>
            </div>

            <div className="glow-card rounded-2xl p-8 border-cyan/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <span className="text-cyan text-lg">✓</span>
                </div>
                <h3 className="font-heading font-semibold text-lg">After Uxnify</h3>
              </div>
              <ul className="space-y-4 text-mist text-[0.9375rem] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-cyan shrink-0 mt-0.5">→</span>
                  One inbox for all client communication
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan shrink-0 mt-0.5">→</span>
                  New hire productive in days, not weeks
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan shrink-0 mt-0.5">→</span>
                  One dashboard — see everything at a glance
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan shrink-0 mt-0.5">→</span>
                  Nothing falls through the cracks
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan shrink-0 mt-0.5">→</span>
                  One app to open in the morning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section id="solution" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow bottom-0 right-1/4" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              We replace the mess with{" "}
              <span className="gradient-text">one app that fits</span>
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              We don&apos;t connect your 12 broken tools with more software. We build you a single application that does everything they were trying to do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Built for you</h3>
              <p className="text-sm text-steel leading-relaxed">
                Not a generic platform. Software designed around YOUR workflow, YOUR team, YOUR business. Tailored like a suit.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Enterprise inside</h3>
              <p className="text-sm text-steel leading-relaxed">
                Built on Microsoft Dynamics 365 — the same platform Fortune 500 companies use. Scaled for your 10-person team.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">You own it</h3>
              <p className="text-sm text-steel leading-relaxed">
                No lock-in. Full documentation. Any consultant can maintain it. It&apos;s YOUR system, forever.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">AI where it helps</h3>
              <p className="text-sm text-steel leading-relaxed">
                Smart routing, classification, and automation in the background. Humans stay in control where judgment matters.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Discovery first</h3>
              <p className="text-sm text-steel leading-relaxed">
                We study how you work before we build anything. You see the ROI before committing a dollar.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">We lived the pain</h3>
              <p className="text-sm text-steel leading-relaxed">
                10 years inside law firms, immigration offices, and tourism companies. We didn&apos;t read about this — we lived it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Four steps from chaos to clarity
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              We never build until we understand. The process protects both of us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-cyan/10">01</div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <span className="text-cyan font-heading font-bold text-sm">1</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Discovery</h3>
                <p className="text-sm text-steel leading-relaxed">
                  We audit your current tools, map your actual workflow, and identify what can become one system. You see the ROI before committing.
                </p>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-cyan/10">02</div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <span className="text-cyan font-heading font-bold text-sm">2</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Build</h3>
                <p className="text-sm text-steel leading-relaxed">
                  We design and build your unified application. Custom UI, automated workflows, AI where it helps — all on enterprise infrastructure.
                </p>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-cyan/10">03</div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <span className="text-cyan font-heading font-bold text-sm">3</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Launch & Train</h3>
                <p className="text-sm text-steel leading-relaxed">
                  We deploy, train your team, and make sure everyone is using it. The system works on Monday morning.
                </p>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-cyan/10">04</div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <span className="text-cyan font-heading font-bold text-sm">4</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Evolve</h3>
                <p className="text-sm text-steel leading-relaxed">
                  Your business changes. Your app changes with it. Monthly support, new features, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow top-1/2 left-0 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              Who We Help
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Built for teams without an IT department
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              If your business has 5–30 people and too many apps, you&apos;re exactly who we built this for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glow-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-transparent mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/25 transition-all">
                <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97ZM5.25 4.97 7.87 15.696c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Law Firms</h3>
              <p className="text-xs text-steel leading-relaxed">Case management, client comms, documents, deadlines</p>
            </div>

            <div className="glow-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-transparent mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/25 transition-all">
                <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Immigration</h3>
              <p className="text-xs text-steel leading-relaxed">Case lifecycle, documents, status updates, compliance</p>
            </div>

            <div className="glow-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-transparent mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/25 transition-all">
                <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Tourism</h3>
              <p className="text-xs text-steel leading-relaxed">Bookings, guest comms, operations, pricing — unified</p>
            </div>

            <div className="glow-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-transparent mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/25 transition-all">
                <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Services</h3>
              <p className="text-xs text-steel leading-relaxed">Intake, scheduling, delivery, invoicing — one flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="hero-glow" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="glow-card rounded-3xl p-12 md:p-16 border-cyan/10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to replace the chaos?
            </h2>
            <p className="text-lg text-steel leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free 15-minute call. We&apos;ll ask how many apps your team uses — and show you what one could look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group relative bg-cyan text-onyx font-heading font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_40px_rgba(77,227,255,0.3)] transition-all text-lg">
                Book a Discovery Call
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:info@uxnify.com" className="border border-white/10 text-ice font-heading font-medium px-8 py-4 rounded-xl hover:border-cyan/30 transition-all text-lg">
                info@uxnify.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
