import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative pt-16">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_40%_at_50%_45%,rgba(77,227,255,0.03)_0%,transparent_70%)]" />

        <svg
          className="w-24 h-24 mb-8"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M 50 50 L 92 92 M 108 108 L 150 150"
            stroke="#4DE3FF"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M 150 50 L 108 92 M 92 108 L 50 150"
            stroke="#4DE3FF"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] mb-6">
          UXNIFY
        </h1>

        <p className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-mist max-w-2xl leading-snug">
          Your business needs one app. Not twelve.
        </p>

        <p className="mt-6 text-base md:text-lg text-steel max-w-lg leading-relaxed">
          We build custom software that replaces your tool chaos — designed for
          how you actually work.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#cta"
            className="bg-cyan text-onyx font-heading font-medium px-7 py-3.5 rounded-lg hover:bg-[#6AEBFF] hover:shadow-[0_4px_24px_rgba(77,227,255,0.25)] transition-all"
          >
            Book a Discovery Call
          </a>
          <a
            href="#problem"
            className="border border-white/15 text-ice font-heading font-medium px-7 py-3.5 rounded-lg hover:border-cyan hover:text-cyan transition-all"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-16 text-xs text-steel tracking-[0.15em] uppercase">
          Unify &middot; Integrate &middot; Automate
        </p>
      </section>

      {/* Problem */}
      <section id="problem" className="py-28 px-6 max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4">
          The problem
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Nobody designed your tech stack.
        </h2>
        <p className="text-lg text-mist leading-relaxed max-w-2xl mb-12">
          Your team uses WhatsApp for some clients, email for others, a CRM
          nobody updates, a spreadsheet that&apos;s always wrong, and a calendar
          that doesn&apos;t sync. Nobody chose this. It just happened.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-amber mb-5">
              Sound familiar?
            </p>
            <ul className="space-y-3 text-mist text-[0.9375rem] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-amber/60 shrink-0">✕</span>
                Every person uses different tools to reach clients
              </li>
              <li className="flex gap-3">
                <span className="text-amber/60 shrink-0">✕</span>
                New hires take 3 weeks to learn &ldquo;how we do things&rdquo;
              </li>
              <li className="flex gap-3">
                <span className="text-amber/60 shrink-0">✕</span>
                You can&apos;t see what&apos;s happening without asking everyone
              </li>
              <li className="flex gap-3">
                <span className="text-amber/60 shrink-0">✕</span>
                Clients fall through cracks between tools
              </li>
              <li className="flex gap-3">
                <span className="text-amber/60 shrink-0">✕</span>
                Paying for 10 subscriptions, using pieces of each
              </li>
            </ul>
          </div>

          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-cyan mb-5">
              After Uxnify
            </p>
            <ul className="space-y-3 text-mist text-[0.9375rem] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-cyan shrink-0">→</span>
                One inbox for all client communication
              </li>
              <li className="flex gap-3">
                <span className="text-cyan shrink-0">→</span>
                New hire productive in days, not weeks
              </li>
              <li className="flex gap-3">
                <span className="text-cyan shrink-0">→</span>
                One dashboard — see everything at a glance
              </li>
              <li className="flex gap-3">
                <span className="text-cyan shrink-0">→</span>
                Nothing falls through the cracks
              </li>
              <li className="flex gap-3">
                <span className="text-cyan shrink-0">→</span>
                One app to open in the morning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-28 px-6 max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4">
          What we do
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          We replace the mess with one app that fits.
        </h2>
        <p className="text-lg text-mist leading-relaxed max-w-2xl mb-12">
          We don&apos;t connect your 12 broken tools with more software. We
          study how your business actually works, then build you a single
          application that does everything your scattered tools were trying to
          do.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-heading font-semibold text-[0.9375rem] mb-2">
              Built for you
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              Not a generic platform. Software designed around YOUR workflow,
              YOUR team, YOUR business.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <div className="text-2xl mb-3">🏢</div>
            <h3 className="font-heading font-semibold text-[0.9375rem] mb-2">
              Enterprise inside
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              Built on Microsoft Dynamics 365 — the same platform Fortune 500
              companies use. Scaled for your size.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <div className="text-2xl mb-3">🤝</div>
            <h3 className="font-heading font-semibold text-[0.9375rem] mb-2">
              You own it
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              No lock-in. Full documentation. Any consultant can maintain it.
              It&apos;s YOUR system.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4">
          How it works
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Four steps from chaos to clarity.
        </h2>
        <p className="text-lg text-mist leading-relaxed max-w-2xl mb-12">
          We never build until we understand. The process protects both of us.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <div className="text-xs font-medium text-cyan mb-3">Step 1</div>
            <h3 className="font-heading font-semibold text-lg mb-2">
              Discovery
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              We audit your current tools, map your actual workflow, and
              identify what can become one system. You see the ROI before
              committing.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <div className="text-xs font-medium text-cyan mb-3">Step 2</div>
            <h3 className="font-heading font-semibold text-lg mb-2">Build</h3>
            <p className="text-sm text-steel leading-relaxed">
              We design and build your unified application. Custom UI, automated
              workflows, AI where it helps — all on enterprise infrastructure.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <div className="text-xs font-medium text-cyan mb-3">Step 3</div>
            <h3 className="font-heading font-semibold text-lg mb-2">
              Launch & Train
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              We deploy, train your team, and make sure everyone is using it.
              The system works on Monday morning.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-8">
            <div className="text-xs font-medium text-cyan mb-3">Step 4</div>
            <h3 className="font-heading font-semibold text-lg mb-2">Evolve</h3>
            <p className="text-sm text-steel leading-relaxed">
              Your business changes. Your app changes with it. Monthly support,
              new features, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="py-28 px-6 max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4">
          Who we help
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Built for teams that don&apos;t have an IT department.
        </h2>
        <p className="text-lg text-mist leading-relaxed max-w-2xl mb-12">
          If your business has 5–30 people and too many apps, you&apos;re
          exactly who we built this for.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-heading font-semibold mb-2">Law Firms</h3>
            <p className="text-sm text-steel leading-relaxed">
              Case management, client comms, documents, and deadlines — in one
              place.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-heading font-semibold mb-2">
              Immigration Firms
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              Case lifecycle, document collection, status updates, and
              compliance tracking.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-heading font-semibold mb-2">
              Tourism & Hospitality
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              Bookings, guest communication, operations, and pricing — unified.
            </p>
          </div>
          <div className="bg-graphite border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-heading font-semibold mb-2">
              Service Businesses
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              Intake, scheduling, delivery, invoicing, and follow-up — one flow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Ready to replace the chaos?
          </h2>
          <p className="text-lg text-mist leading-relaxed mb-10">
            Book a free 15-minute call. We&apos;ll ask how many apps your team
            uses — and show you what one could look like.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan text-onyx font-heading font-medium px-8 py-4 rounded-lg hover:bg-[#6AEBFF] hover:shadow-[0_4px_24px_rgba(77,227,255,0.25)] transition-all text-lg"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12 px-6 text-center">
        <p className="text-sm text-steel">
          &copy; 2026 Uxnify Ventures LLC. All rights reserved.
        </p>
        <p className="text-sm text-mist mt-2 font-heading">
          The mess stops here.
        </p>
      </footer>
    </main>
  );
}
