import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Uxnify",
  description: "Start your project. Tell us about your business and we'll show you what one app could look like.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Let&apos;s start your project
          </h1>
          <p className="text-mist text-lg mb-12">
            Tell us about your business and we&apos;ll get back to you within 24 hours.
          </p>

          <form action={process.env.NEXT_PUBLIC_FORM_ENDPOINT || "#"} method="POST" className="space-y-6">
            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-ice mb-2">
                  First Name <span className="text-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-ice mb-2">
                  Last Name <span className="text-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all"
                />
              </div>
            </div>

            {/* Email + Phone row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ice mb-2">
                  Email Address <span className="text-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ice mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+18556403636"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-ice mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Name"
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all"
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-ice mb-2">
                Project Type <span className="text-cyan">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue=""
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all appearance-none"
              >
                <option value="" disabled className="text-steel">Select a project type</option>
                <option value="discovery">Discovery Audit</option>
                <option value="custom-app">Custom Application Build</option>
                <option value="dynamics365">Dynamics 365 Configuration</option>
                <option value="automation">Workflow Automation</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-ice mb-2">
                Project Details <span className="text-cyan">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all resize-y"
              />
            </div>

            {/* SMS Consent */}
            <div className="bg-graphite border border-white/[0.06] rounded-lg p-5">
              <label className="flex gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="smsConsent"
                  className="mt-1 shrink-0 w-4 h-4 rounded border-white/20 bg-slate accent-cyan"
                />
                <span className="text-sm text-mist leading-relaxed">
                  By checking this box and submitting this form at{" "}
                  <a href="https://uxnify.com/contact" className="text-cyan hover:underline">
                    https://uxnify.com/contact
                  </a>
                  , you consent to receive service-related, 1-to-1 SMS from Uxnify Ventures LLC at the
                  number provided (appointment reminders, account notifications, and support follow-ups).
                  Msg frequency varies. Msg &amp; data rates may apply. Consent is not a condition of
                  purchase. Reply STOP to opt out, HELP for help. Privacy Policy:{" "}
                  <a href="https://uxnify.com/privacy" className="text-cyan hover:underline">
                    https://uxnify.com/privacy
                  </a>{" "}
                  Terms:{" "}
                  <a href="https://uxnify.com/terms" className="text-cyan hover:underline">
                    https://uxnify.com/terms
                  </a>
                  . Mobile opt-in information won&apos;t be shared with third parties for marketing purposes.
                </span>
              </label>
              <p className="text-xs text-steel mt-3 ml-7">
                If you opt in to SMS, a mobile number is required. Otherwise, you can submit this form without a phone number.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan text-onyx font-heading font-semibold text-base py-4 rounded-lg hover:bg-[#6AEBFF] hover:shadow-[0_4px_24px_rgba(77,227,255,0.25)] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
