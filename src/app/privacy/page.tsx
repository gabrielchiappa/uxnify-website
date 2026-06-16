import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Uxnify",
  description: "Privacy Policy for Uxnify Ventures LLC.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-steel text-sm mb-10">
            Effective Date: June 16, 2026 &middot; Last Updated: June 16, 2026
          </p>

          <div className="space-y-8 text-mist text-[0.9375rem] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">1. Introduction</h2>
              <p>
                Uxnify Ventures LLC, doing business as Uxnify (&ldquo;Uxnify,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you visit our website, contact us, request services, engage us for projects, or interact with our AI automation, integration, consulting, and technology services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">2. Information We Collect</h2>
              <p className="font-medium text-ice">Information you provide directly:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
                <li>Name, email address, phone number, company name</li>
                <li>Project details and requirements submitted via contact forms</li>
                <li>Communications sent to us via email or other channels</li>
                <li>Payment and billing information for active engagements</li>
              </ul>
              <p className="font-medium text-ice mt-4">Information collected automatically:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, time spent, referral source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-steel">
                <li>To respond to inquiries and provide requested services</li>
                <li>To deliver, maintain, and improve our services</li>
                <li>To communicate project updates and account information</li>
                <li>To send service-related SMS messages (with consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">4. SMS/Text Messaging</h2>
              <p>
                If you opt in to receive SMS messages from Uxnify, we may send service-related texts including appointment reminders, account notifications, and support follow-ups. Message frequency varies. Message and data rates may apply.
              </p>
              <p className="mt-3">
                <strong className="text-ice">Consent is not a condition of purchase.</strong> You may opt out at any time by replying STOP. Reply HELP for assistance. Mobile opt-in information will not be shared with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">5. Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
                <li>Service providers who assist in delivering our services (hosting, analytics, payment processing)</li>
                <li>Professional advisors (lawyers, accountants) under confidentiality obligations</li>
                <li>Law enforcement or government bodies when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Contact and project data is typically retained for the duration of the business relationship plus 3 years.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for SMS messaging</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@uxnify.com" className="text-cyan hover:underline">privacy@uxnify.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">8. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">10. Contact</h2>
              <p>
                Questions about this Privacy Policy? Contact us at{" "}
                <a href="mailto:privacy@uxnify.com" className="text-cyan hover:underline">privacy@uxnify.com</a>.
              </p>
              <p className="mt-2">
                Uxnify Ventures LLC<br />
                <a href="https://uxnify.com" className="text-cyan hover:underline">https://uxnify.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-steel">
              &copy; 2026 Uxnify Ventures LLC. All rights reserved.
            </p>
            <p className="text-xs text-steel mt-2">
              <Link href="/terms" className="text-cyan hover:underline">Terms of Service</Link>
              {" "}&middot;{" "}
              <Link href="/contact" className="text-cyan hover:underline">Contact</Link>
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
