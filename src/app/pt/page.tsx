import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  FadeIn,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  GlowButton,
  FloatingElement,
} from "@/components/Animate";

export const metadata: Metadata = {
  title: "Uxnify — Sua empresa precisa de um app. Não doze.",
  description:
    "Construímos software sob medida que substitui o caos de ferramentas — projetado para como você realmente trabalha. Enterprise-grade, escala humana.",
};

export default function HomePT() {
  return (
    <main>
      <Nav lang="pt" />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16 overflow-hidden">
        <div className="hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-cyan-deep/5 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-xs font-medium text-cyan">Aceitando novos projetos</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <FloatingElement amplitude={6} duration={5}>
              <svg className="w-16 h-16 mb-6" viewBox="0 0 200 200" fill="none">
                <path d="M 50 50 L 92 92 M 108 108 L 150 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
                <path d="M 150 50 L 108 92 M 92 108 L 50 150" stroke="#4DE3FF" strokeWidth="7" strokeLinecap="round"/>
              </svg>
            </FloatingElement>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] mb-4">
              UXNIFY
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold max-w-3xl leading-tight mb-6">
              Sua empresa precisa de{" "}
              <span className="gradient-text">um app</span>.{" "}
              <span className="text-steel">Não doze.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-base md:text-lg text-steel max-w-xl leading-relaxed mb-10">
              Construímos software sob medida que substitui o caos de ferramentas — projetado para como sua equipe realmente trabalha.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton href="/pt/contact" variant="primary">
                Agendar uma Conversa
              </GlowButton>
              <GlowButton href="#problem" variant="secondary">
                Como Funciona
              </GlowButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="mt-14 text-xs text-steel tracking-[0.2em] uppercase">
              Unify · Integrate · Automate
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 border-y border-white/[0.04]">
        <StaggerContainer className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
          <StaggerItem>
            <div className="font-heading text-3xl md:text-4xl font-bold text-cyan">10+</div>
            <div className="text-sm text-steel mt-1">Anos de Experiência</div>
          </StaggerItem>
          <StaggerItem>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">3</div>
            <div className="text-sm text-steel mt-1">Setores Atendidos</div>
          </StaggerItem>
          <StaggerItem>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">D365</div>
            <div className="text-sm text-steel mt-1">Plataforma Principal</div>
          </StaggerItem>
          <StaggerItem>
            <div className="font-heading text-3xl md:text-4xl font-bold text-ice">12→1</div>
            <div className="text-sm text-steel mt-1">Ferramentas Substituídas</div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Problem */}
      <section id="problem" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow top-0 left-1/4" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              O Problema
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ninguém planejou sua estrutura de TI
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              Sua equipe usa WhatsApp para alguns clientes, email para outros, um CRM que ninguém atualiza e uma agenda que não sincroniza. Ninguém escolheu isso. Simplesmente aconteceu.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeInScale delay={0.1}>
              <div className="glow-card rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                    <span className="text-amber text-lg">⚠</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Parece familiar?</h3>
                </div>
                <ul className="space-y-4 text-mist text-[0.9375rem] leading-relaxed">
                  <li className="flex gap-3"><span className="text-amber/60 shrink-0 mt-0.5">✕</span>Cada pessoa usa ferramentas diferentes para falar com clientes</li>
                  <li className="flex gap-3"><span className="text-amber/60 shrink-0 mt-0.5">✕</span>Novos funcionários levam 3 semanas para aprender os processos</li>
                  <li className="flex gap-3"><span className="text-amber/60 shrink-0 mt-0.5">✕</span>Você não consegue ver o que está acontecendo sem perguntar para todos</li>
                  <li className="flex gap-3"><span className="text-amber/60 shrink-0 mt-0.5">✕</span>Clientes se perdem entre as ferramentas</li>
                  <li className="flex gap-3"><span className="text-amber/60 shrink-0 mt-0.5">✕</span>Pagando 10 assinaturas, usando pedaços de cada</li>
                </ul>
              </div>
            </FadeInScale>

            <FadeInScale delay={0.2}>
              <div className="glow-card rounded-2xl p-8 border-cyan/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <span className="text-cyan text-lg">✓</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Depois da Uxnify</h3>
                </div>
                <ul className="space-y-4 text-mist text-[0.9375rem] leading-relaxed">
                  <li className="flex gap-3"><span className="text-cyan shrink-0 mt-0.5">→</span>Uma caixa de entrada para toda comunicação com clientes</li>
                  <li className="flex gap-3"><span className="text-cyan shrink-0 mt-0.5">→</span>Novo funcionário produtivo em dias, não semanas</li>
                  <li className="flex gap-3"><span className="text-cyan shrink-0 mt-0.5">→</span>Um painel — veja tudo de uma vez</li>
                  <li className="flex gap-3"><span className="text-cyan shrink-0 mt-0.5">→</span>Nenhum cliente se perde no processo</li>
                  <li className="flex gap-3"><span className="text-cyan shrink-0 mt-0.5">→</span>Um app para abrir de manhã</li>
                </ul>
              </div>
            </FadeInScale>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow bottom-0 right-1/4" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              O Que Fazemos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Substituímos a bagunça por{" "}
              <span className="gradient-text">um app que funciona</span>
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              Não conectamos suas 12 ferramentas quebradas com mais software. Estudamos como sua empresa funciona e construímos um único aplicativo que faz tudo que as ferramentas espalhadas tentavam fazer.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[{icon:"M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",title:"Feito para você",desc:"Não é uma plataforma genérica. Software projetado para SEU fluxo de trabalho, SUA equipe, SUA empresa. Sob medida."},{icon:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",title:"Enterprise por dentro",desc:"Construído no Microsoft Dynamics 365 — a mesma plataforma que empresas Fortune 500 usam. Dimensionado para sua equipe de 10 pessoas."},{icon:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",title:"O sistema é seu",desc:"Sem lock-in. Documentação completa. Qualquer consultor pode manter. É SEU sistema, para sempre."},{icon:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",title:"IA onde ajuda",desc:"Roteamento inteligente, classificação e automação em segundo plano. Humanos mantêm o controle onde o julgamento importa."},{icon:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",title:"Discovery primeiro",desc:"Estudamos como você trabalha antes de construir qualquer coisa. Você vê o ROI antes de investir um centavo."},{icon:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",title:"Vivemos a dor",desc:"10 anos dentro de escritórios de advocacia, imigração e turismo. Não lemos sobre isso — vivemos."}].map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="glow-card rounded-2xl p-8 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-5 group-hover:from-cyan/30 transition-all">
                    <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              Como Funciona
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Quatro passos do caos à clareza
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              Nunca construímos antes de entender. O processo protege ambos os lados.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
            {[{num:"01",step:"1",title:"Discovery",desc:"Auditamos suas ferramentas atuais, mapeamos seu fluxo real de trabalho e identificamos o que pode se tornar um único sistema. Você vê o ROI antes de se comprometer."},{num:"02",step:"2",title:"Build",desc:"Projetamos e construímos seu aplicativo unificado. Interface personalizada, workflows automatizados, IA onde ajuda — tudo em infraestrutura enterprise."},{num:"03",step:"3",title:"Launch & Train",desc:"Implantamos, treinamos sua equipe e garantimos que todos estejam usando. O sistema funciona na segunda-feira de manhã."},{num:"04",step:"4",title:"Evolve",desc:"Sua empresa muda. Seu app muda junto. Suporte mensal, novas funcionalidades e melhoria contínua."}].map((item) => (
              <StaggerItem key={item.num}>
                <div className="glow-card rounded-2xl p-8 relative overflow-hidden h-full">
                  <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-cyan/10">{item.num}</div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                      <span className="text-cyan font-heading font-bold text-sm">{item.step}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-sm text-steel leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="relative py-32 px-6 overflow-hidden">
        <div className="section-glow top-1/2 left-0 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan mb-4 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5">
              Para Quem
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Feito para equipes sem departamento de TI
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              Se sua empresa tem 5–30 pessoas e aplicativos demais, você é exatamente para quem construímos isso.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[{icon:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97ZM5.25 4.97 7.87 15.696c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z",title:"Escritórios de Advocacia",desc:"Gestão de casos, comunicação, documentos, prazos"},{icon:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",title:"Imigração",desc:"Ciclo de casos, documentos, status, compliance"},{icon:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",title:"Turismo",desc:"Reservas, comunicação, operações, precificação — unificado"},{icon:"M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",title:"Serviços",desc:"Captação, agenda, entrega, faturamento — um fluxo"}].map((v) => (
              <StaggerItem key={v.title}>
                <div className="glow-card rounded-2xl p-6 text-center group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-transparent mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/25 transition-all">
                    <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                  <p className="text-xs text-steel leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="hero-glow" />
        <FadeInScale className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="glow-card rounded-3xl p-12 md:p-16 border-cyan/10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Pronto para acabar com o caos?
            </h2>
            <p className="text-lg text-steel leading-relaxed mb-10 max-w-lg mx-auto">
              Agende uma conversa gratuita de 15 minutos. Vamos perguntar quantos apps sua equipe usa — e mostrar como seria com apenas um.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton href="/pt/contact" variant="primary" className="text-lg">
                Agendar uma Conversa
              </GlowButton>
              <GlowButton href="mailto:info@uxnify.com" variant="secondary" className="text-lg">
                info@uxnify.com
              </GlowButton>
            </div>
          </div>
        </FadeInScale>
      </section>

      <Footer />
    </main>
  );
}
