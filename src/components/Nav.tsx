import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-onyx/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 200 200" fill="none">
            <path d="M 50 50 L 92 92 M 108 108 L 150 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
            <path d="M 150 50 L 108 92 M 92 108 L 50 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
          </svg>
          <span className="font-heading font-semibold text-sm tracking-[0.08em]">UXNIFY</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#problem" className="text-sm text-steel hover:text-ice transition-colors">Problem</Link>
          <Link href="/#solution" className="text-sm text-steel hover:text-ice transition-colors">Solution</Link>
          <Link href="/#process" className="text-sm text-steel hover:text-ice transition-colors">Process</Link>
          <Link href="/#verticals" className="text-sm text-steel hover:text-ice transition-colors">Who We Help</Link>
        </div>
        <Link
          href="/contact"
          className="bg-cyan text-onyx font-heading font-medium text-sm px-5 py-2 rounded-md hover:bg-[#6AEBFF] transition-all"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
