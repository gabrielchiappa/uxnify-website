import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-graphite">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 200 200" fill="none">
                <path d="M 50 50 L 92 92 M 108 108 L 150 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
                <path d="M 150 50 L 108 92 M 92 108 L 50 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
              </svg>
              <span className="font-heading font-semibold text-sm tracking-[0.08em]">UXNIFY</span>
            </Link>
            <p className="text-sm text-steel leading-relaxed mb-5">
              Custom business software that replaces tool chaos. Built for teams of 5–30 who deserve one app that fits.
            </p>
            <div className="space-y-2 text-sm text-mist">
              <div className="flex items-center gap-2">
                <span className="text-steel">📧</span>
                <a href="mailto:info@uxnify.com" className="hover:text-cyan transition-colors">info@uxnify.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-steel">📞</span>
                <a href="tel:+18556403636" className="hover:text-cyan transition-colors">+1 (855) 640-3636</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-steel">📍</span>
                <span>Albany, NY</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-ice mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>
                <Link href="/#process" className="hover:text-ice transition-colors">Discovery Audit</Link>
              </li>
              <li>
                <Link href="/#solution" className="hover:text-ice transition-colors">Custom App Build</Link>
              </li>
              <li>
                <Link href="/#solution" className="hover:text-ice transition-colors">Dynamics 365</Link>
              </li>
              <li>
                <Link href="/#solution" className="hover:text-ice transition-colors">Workflow Automation</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-ice mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>
                <Link href="/#problem" className="hover:text-ice transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#verticals" className="hover:text-ice transition-colors">Who We Help</Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-ice transition-colors">Process</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ice transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-ice mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>
                <Link href="/privacy" className="hover:text-ice transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ice transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-steel text-center sm:text-left">
            <p>&copy; 2026 Uxnify Ventures LLC. All rights reserved.</p>
            <p className="mt-1">A DBA of Uxnify Ventures LLC</p>
          </div>
          <div className="flex gap-4 text-xs text-steel">
            <Link href="/privacy" className="hover:text-ice transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ice transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
