import Link from "next/link";

export default function Nav({ lang = "en" }: { lang?: "en" | "pt" }) {
  const prefix = lang === "pt" ? "/pt" : "";
  const labels = lang === "pt"
    ? { problem: "Problema", solution: "Solução", process: "Processo", who: "Para Quem", cta: "Começar" }
    : { problem: "Problem", solution: "Solution", process: "Process", who: "Who We Help", cta: "Get Started" };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-onyx/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={prefix || "/"} className="flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 200 200" fill="none">
            <path d="M 50 50 L 92 92 M 108 108 L 150 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
            <path d="M 150 50 L 108 92 M 92 108 L 50 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
          </svg>
          <span className="font-heading font-semibold text-sm tracking-[0.08em]">UXNIFY</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href={`${prefix}/#problem`} className="text-sm text-steel hover:text-ice transition-colors">{labels.problem}</Link>
          <Link href={`${prefix}/#solution`} className="text-sm text-steel hover:text-ice transition-colors">{labels.solution}</Link>
          <Link href={`${prefix}/#process`} className="text-sm text-steel hover:text-ice transition-colors">{labels.process}</Link>
          <Link href={`${prefix}/#verticals`} className="text-sm text-steel hover:text-ice transition-colors">{labels.who}</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={lang === "pt" ? "/" : "/pt"}
            className="flex items-center gap-1.5 text-xs text-steel hover:text-ice transition-colors px-2 py-1 rounded border border-white/[0.06] hover:border-white/[0.12]"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? (
              <>
                <span className="text-sm">🇺🇸</span>
                <span className="hidden sm:inline">EN</span>
              </>
            ) : (
              <>
                <span className="text-sm">🇧🇷</span>
                <span className="hidden sm:inline">PT</span>
              </>
            )}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="bg-cyan text-onyx font-heading font-medium text-sm px-5 py-2 rounded-md hover:bg-[#6AEBFF] transition-all"
          >
            {labels.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
