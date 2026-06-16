import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contato — Uxnify",
  description: "Comece seu projeto. Conte-nos sobre sua empresa e responderemos em até 24 horas.",
};

export default function ContactPagePT() {
  return (
    <>
      <Nav lang="pt" />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Vamos começar seu projeto
          </h1>
          <p className="text-mist text-lg mb-12">
            Conte-nos sobre sua empresa e responderemos em até 24 horas.
          </p>

          <form action={process.env.NEXT_PUBLIC_FORM_ENDPOINT || "#"} method="POST" className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-ice mb-2">
                  Nome <span className="text-cyan">*</span>
                </label>
                <input type="text" id="firstName" name="firstName" required placeholder="João"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-ice mb-2">
                  Sobrenome <span className="text-cyan">*</span>
                </label>
                <input type="text" id="lastName" name="lastName" required placeholder="Silva"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ice mb-2">
                  Email <span className="text-cyan">*</span>
                </label>
                <input type="email" id="email" name="email" required placeholder="joao@empresa.com.br"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ice mb-2">
                  Telefone
                </label>
                <input type="tel" id="phone" name="phone" placeholder="+55 11 99999-9999"
                  className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-ice mb-2">
                Empresa
              </label>
              <input type="text" id="company" name="company" placeholder="Nome da Empresa"
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all" />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-ice mb-2">
                Tipo de Projeto <span className="text-cyan">*</span>
              </label>
              <select id="projectType" name="projectType" required defaultValue=""
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all appearance-none">
                <option value="" disabled className="text-steel">Selecione o tipo de projeto</option>
                <option value="discovery">Discovery Audit</option>
                <option value="custom-app">Aplicativo Personalizado</option>
                <option value="dynamics365">Configuração Dynamics 365</option>
                <option value="automation">Automação de Workflows</option>
                <option value="consultation">Consultoria Geral</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-ice mb-2">
                Detalhes do Projeto <span className="text-cyan">*</span>
              </label>
              <textarea id="details" name="details" required rows={5}
                placeholder="Conte-nos sobre seu projeto, objetivos, prazos e requisitos específicos..."
                className="w-full bg-graphite border border-white/[0.08] rounded-lg px-4 py-3 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all resize-y" />
            </div>

            <div className="bg-graphite border border-white/[0.06] rounded-lg p-5">
              <label className="flex gap-3 cursor-pointer">
                <input type="checkbox" name="smsConsent"
                  className="mt-1 shrink-0 w-4 h-4 rounded border-white/20 bg-slate accent-cyan" />
                <span className="text-sm text-mist leading-relaxed">
                  Ao marcar esta caixa e enviar este formulário em{" "}
                  <a href="https://uxnify.com/pt/contact" className="text-cyan hover:underline">https://uxnify.com/pt/contact</a>,
                  você consente em receber SMS de serviço da Uxnify Ventures LLC no número fornecido
                  (lembretes de agendamento, notificações de conta e acompanhamento de suporte).
                  A frequência de mensagens varia. Taxas de mensagens podem se aplicar. O consentimento
                  não é condição de compra. Responda STOP para cancelar, HELP para ajuda. Política de Privacidade:{" "}
                  <a href="https://uxnify.com/privacy" className="text-cyan hover:underline">https://uxnify.com/privacy</a>{" "}
                  Termos:{" "}
                  <a href="https://uxnify.com/terms" className="text-cyan hover:underline">https://uxnify.com/terms</a>.
                  Informações de opt-in mobile não serão compartilhadas com terceiros para fins de marketing.
                </span>
              </label>
              <p className="text-xs text-steel mt-3 ml-7">
                Se optar por SMS, um número de celular é obrigatório. Caso contrário, você pode enviar este formulário sem número de telefone.
              </p>
            </div>

            <button type="submit"
              className="w-full bg-cyan text-onyx font-heading font-semibold text-base py-4 rounded-lg hover:bg-[#6AEBFF] hover:shadow-[0_4px_24px_rgba(77,227,255,0.25)] transition-all">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
