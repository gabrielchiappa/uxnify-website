import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Uxnify",
  description: "Terms of Service for Uxnify Ventures LLC.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-steel text-sm mb-10">
            Effective Date: June 16, 2026 &middot; Last Updated: June 16, 2026
          </p>

          <div className="space-y-8 text-mist text-[0.9375rem] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">1. Acceptance of Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the websites, content, consultations, proposals, software-related services, AI automation services, systems integration services, workflow implementation services, documentation, and other offerings provided by Uxnify Ventures LLC, doing business as Uxnify (&ldquo;Uxnify,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="mt-3">
                By accessing our website, requesting information, submitting a contact form, engaging our services, signing an order form, using deliverables, or otherwise interacting with Uxnify, you agree to these Terms and any additional written agreement that applies to your project or account.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">2. Services Provided</h2>
              <p>Uxnify provides:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
                <li>Custom business application development</li>
                <li>AI workflow automation and implementation</li>
                <li>Systems integration and API orchestration</li>
                <li>Microsoft Dynamics 365 and Power Platform consulting</li>
                <li>Discovery audits and workflow assessments</li>
                <li>Ongoing maintenance and support</li>
                <li>Technology consulting and advisory services</li>
              </ul>
              <p className="mt-3">
                Services are provided under individually scoped engagements. Each project includes a defined scope, timeline, deliverables, and pricing as agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">3. Client Responsibilities</h2>
              <p>
                You agree to provide timely access to systems, data, personnel, and decisions required for project execution. Delays in client-side deliverables may affect timelines and are not the responsibility of Uxnify.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">4. Payment Terms</h2>
              <p>
                Payment terms are specified per engagement. Unless otherwise agreed, invoices are due within 15 days of issue. Late payments may incur a 1.5% monthly fee. Uxnify reserves the right to pause work on accounts with outstanding balances.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">5. Intellectual Property</h2>
              <p>
                Upon full payment, you own the custom deliverables created specifically for your project. Uxnify retains ownership of pre-existing tools, frameworks, methodologies, and general-purpose components used across projects.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives termination of services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">7. Limitation of Liability</h2>
              <p>
                Uxnify&apos;s total liability for any claim arising from services shall not exceed the amount paid by you for the specific engagement giving rise to the claim. Uxnify is not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">8. Termination</h2>
              <p>
                Either party may terminate an engagement with 30 days written notice. Upon termination, you are responsible for payment of work completed. Uxnify will deliver all completed work product upon final payment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Florida, United States, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-ice mb-3">10. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a href="mailto:legal@uxnify.com" className="text-cyan hover:underline">legal@uxnify.com</a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-steel">
              &copy; 2026 Uxnify Ventures LLC. All rights reserved.
            </p>
            <p className="text-xs text-steel mt-2">
              <Link href="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>
              {" "}&middot;{" "}
              <Link href="/contact" className="text-cyan hover:underline">Contact</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
