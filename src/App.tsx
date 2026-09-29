import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight, 
  Monitor, 
  Palette, 
  Clock, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  Gift, 
  HelpCircle, 
  Sparkles,
  Award,
  FileText,
  Send,
  X
} from 'lucide-react';
import { CheckoutModal } from './components/CheckoutModal';
import { InfoModals, InfoModalType } from './components/InfoModals';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';

const slideDeckRow1 = [
  { id: 1, src: '/slides/slide-01.png' },
  { id: 2, src: '/slides/slide-02.png' },
  { id: 3, src: '/slides/slide-03.png' },
  { id: 4, src: '/slides/slide-04.png' },
  { id: 5, src: '/slides/slide-05.png' },
  { id: 6, src: '/slides/slide-06.png' },
  { id: 7, src: '/slides/slide-07.png' },
  { id: 8, src: '/slides/slide-08.png' },
];

const slideDeckRow2 = [
  { id: 9, src: '/slides/slide-09.png' },
  { id: 10, src: '/slides/slide-10.png' },
  { id: 11, src: '/slides/slide-11.png' },
  { id: 12, src: '/slides/slide-12.png' },
  { id: 13, src: '/slides/slide-13.png' },
  { id: 14, src: '/slides/slide-14.png' },
  { id: 15, src: '/slides/slide-15.png' },
  { id: 1, src: '/slides/slide-01.png' },
];

export default function App() {
  // Modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'completo'>('completo');
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalType>(null);
  const [selectedSlidePreview, setSelectedSlidePreview] = useState<string | null>(null);
  
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenCheckout = (plan: 'essencial' | 'completo') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const faqItems = [
    {
      q: "Como recebo o material?",
      a: "O material é digital e será disponibilizado imediatamente após a confirmação do pagamento, com download direto na tela e envio de cópia de segurança para o seu e-mail."
    },
    {
      q: "Como é estruturada a apresentação?",
      a: "A apresentação principal é completa e profissional, organizada em uma sequência didática e lógica para conduzir sua palestra de Outubro Rosa do início ao fim com clareza e impacto."
    },
    {
      q: "Posso usar em uma empresa ou escola?",
      a: "Sim. O material foi desenvolvido especialmente para ações educativas em empresas, departamentos de RH, escolas, clínicas, hospitais, igrejas, grupos comunitários e eventos corporativos."
    },
    {
      q: "Preciso saber design para utilizar?",
      a: "Não. A parte visual da apresentação já está 100% pronta, padronizada e diagramada. Basta abrir no computador, projetor ou TV e iniciar a sua apresentação."
    },
    {
      q: "Qual a diferença entre R$ 9,90 e R$ 15?",
      a: "Por R$ 9,90 você recebe a Apresentação Principal com os slides prontos e completos. Na opção de R$ 15 (Kit Completo), você recebe a apresentação + Kit do Participante para imprimir/enviar + Guia com 20 Perguntas e Respostas da plateia + Kit Institucional com certificado e lista de presença."
    },
    {
      q: "É um material médico?",
      a: "Não. Trata-se de um material educativo de conscientização pública baseado em diretrizes oficiais (como INCA e Ministério da Saúde). Ele não substitui avaliação, diagnóstico ou orientação médica individualizada."
    },
    {
      q: "O material é físico?",
      a: "Não. O produto é 100% digital, garantindo acesso imediato sem cobrança de frete ou espera por entrega."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F8] text-[#1E191C] flex flex-col font-sans selection:bg-rose-500 selection:text-white font-normal">
      
      <main className="flex-1 font-normal">

        {/* =========================================================================
            1. HERO — EXTREMAMENTE DIRETO
            ========================================================================= */}
        <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          {/* Subtle rose & gold background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-rose-100/40 via-amber-50/20 to-transparent pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Elegant Kicker in Poppins Gold */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50/80 border border-amber-200/80 text-xs font-semibold text-amber-800 shadow-xs">
              <span className="text-amber-500">✨</span>
              <span>Campanha Nacional de Conscientização</span>
            </div>

            {/* Headline: extremamente direto */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Precisa apresentar uma palestra de Outubro Rosa? <span className="text-rose-600">Os slides já estão prontos.</span>
            </h1>

            {/* Subheadline em Poppins Regular */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed" style={{ textWrap: 'balance' }}>
              Apresentação profissional e completa sobre conscientização e prevenção do câncer de mama, pronta para usar em empresas, escolas, clínicas, igrejas, equipes e eventos.
            </p>

            {/* DOIS CARROSSEIS INFINITOS UM DEBAIXO DO OUTRO */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 max-w-[1400px] py-4 sm:py-6 space-y-4 sm:space-y-6 overflow-hidden">
              
              {/* Carrossel 1 (movendo para a esquerda) */}
              <div className="carousel-mask overflow-hidden py-1.5">
                <div className="animate-marquee-left flex gap-4 sm:gap-6">
                  {[...slideDeckRow1, ...slideDeckRow1, ...slideDeckRow1, ...slideDeckRow1].map((slide, index) => (
                    <div
                      key={`r1-${index}`}
                      onClick={() => setSelectedSlidePreview(slide.src)}
                      className="shrink-0 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[470px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-rose-200/90 shadow-md shadow-rose-950/5 hover:shadow-2xl hover:border-rose-400 hover:scale-[1.03] transition-all duration-300 bg-white cursor-pointer group"
                    >
                      <img
                        src={slide.src}
                        alt="Slide da Apresentação Outubro Rosa"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carrossel 2 (movendo para a direita) */}
              <div className="carousel-mask overflow-hidden py-1.5">
                <div className="animate-marquee-right flex gap-4 sm:gap-6">
                  {[...slideDeckRow2, ...slideDeckRow2, ...slideDeckRow2, ...slideDeckRow2].map((slide, index) => (
                    <div
                      key={`r2-${index}`}
                      onClick={() => setSelectedSlidePreview(slide.src)}
                      className="shrink-0 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[470px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-rose-200/90 shadow-md shadow-rose-950/5 hover:shadow-2xl hover:border-rose-400 hover:scale-[1.03] transition-all duration-300 bg-white cursor-pointer group"
                    >
                      <img
                        src={slide.src}
                        alt="Slide da Apresentação Outubro Rosa"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Elementos logo abaixo (Clean checklist com toques de Poppins Gold e Emerald) */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-700 pt-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Slides prontos e completos
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Visual profissional em 16:9
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Conteúdo organizado e fácil de apresentar
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Material digital
              </span>
            </div>

            {/* CTA Button & Pricing Anchor */}
            <div className="pt-2 flex flex-col items-center justify-center gap-2">
              <a
                href="#precos"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-rose-600/25 hover:shadow-rose-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <span>QUERO MINHA APRESENTAÇÃO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <span className="text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  A partir de R$ 9,90
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-500 font-normal">Liberação imediata</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            2. NÃO PERCA HORAS MONTANDO UMA PALESTRA DO ZERO
            ========================================================================= */}
        <section id="beneficios" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                Não perca horas montando uma palestra do zero
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Você não precisa pesquisar cada tópico, organizar a sequência da apresentação e ainda passar horas tentando deixar os slides bonitos.
              </p>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                O material já foi estruturado para você abrir, apresentar e conduzir sua ação de Outubro Rosa com muito mais praticidade.
              </p>
            </div>

            {/* Três Cards com Ícones e Conteúdo Centralizados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              
              {/* Card 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    CONTEÚDO ORGANIZADO
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Do início ao encerramento da palestra com introdução, dados, alertas e orientações em ordem lógica.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Sequência didática pronta
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto shadow-xs">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    DESIGN PROFISSIONAL
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Slides modernos e padronizados, com tipografia limpa, destaques visuais e paleta suave e acolhedora.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Padrão visual elegante
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    PRONTO PARA APRESENTAR
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Ideal para projetor, TV ou computador. Abra em formato PowerPoint (.pptx) ou PDF sem perder a qualidade.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Compatível com qualquer tela
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            4. O QUE VOCÊ VAI ENCONTRAR
            ========================================================================= */}
        <section id="conteudo" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-4xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Estrutura Completa
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Uma palestra completa, do começo ao fim.
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Cada slide foi pensado para conduzir os ouvintes com sensibilidade, dados confiáveis e instruções práticas.
              </p>
            </div>

            {/* Lista Visual dos Tópicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "Introdução ao Outubro Rosa", desc: "História, significado do laço e propósito da campanha" },
                { title: "O que é o câncer de mama", desc: "Conceito biológico simplificado e acessível a qualquer público" },
                { title: "Dados e informações importantes", desc: "Estatísticas atualizadas do INCA e panorama no Brasil" },
                { title: "Principais fatores associados ao risco", desc: "Idade, fatores genéticos e hereditariedade explicados" },
                { title: "Sinais que merecem atenção", desc: "Mudanças físicas, palpação e alertas no corpo" },
                { title: "Hábitos de prevenção e cuidado", desc: "Estilo de vida, atividade física e fatores modificáveis" },
                { title: "Mamografia e rastreamento", desc: "Importância do exame padrão-ouro e periodicidade" },
                { title: "Mitos e verdades", desc: "Desmistificando dúvidas comuns e boatos frequentes" },
                { title: "Diagnóstico precoce", desc: "O impacto real das chances de cura de até 95%" },
                { title: "Orientações práticas", desc: "Ações imediatas e como agendar exames preventivos" },
                { title: "Encerramento da palestra", desc: "Mensagem de acolhimento, empatia e compromisso coletivo" }
              ].map((topic, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F8] border border-rose-100/80 hover:border-rose-200 transition-colors"
                >
                  <span className="text-lg shrink-0 select-none">🎀</span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fechamento da seção */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 border border-rose-200 text-center space-y-2">
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                Você só precisa se preparar para apresentar. A estrutura visual já está pronta.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Sem perder tempo formatando fontes, alinhando imagens ou pesquisando tópicos na internet.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================================
            BÔNUS EXCLUSIVOS (ACIMA DOS CARDS DE OFERTAS)
            ========================================================================= */}
        <section id="bonus" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F8] border-t border-amber-200/50">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-xs font-bold text-amber-900 shadow-xs">
                <Gift className="w-3.5 h-3.5 text-amber-600" />
                <span>4 BÔNUS EXCLUSIVOS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                4 Bônus para você apresentar com autoridade e segurança
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal" style={{ textWrap: 'balance' }}>
                Materiais complementares desenvolvidos para elevar o nível da sua ação e dar total tranquilidade na hora de falar em público.
              </p>
            </div>

            {/* Grid dos 4 Bônus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* BÔNUS 01 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BÔNUS 01
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagem Mockup do Bônus 1 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-1.png')}
                    className="relative rounded-xl overflow-hidden border border-rose-100/90 shadow-xs bg-rose-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-1.png"
                      alt="Kit do Participante - Bônus 1"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Kit do Participante
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      1 PDF curto para entregar impresso ou enviar por WhatsApp depois da palestra, com sinais de atenção e fontes oficiais.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">💡</span>
                    <span>Faz o palestrante parecer muito mais profissional e fixa a mensagem após o evento.</span>
                  </p>
                </div>
              </div>

              {/* BÔNUS 02 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BÔNUS 02
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagem Mockup do Bônus 2 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-2.png')}
                    className="relative rounded-xl overflow-hidden border border-amber-200/60 shadow-xs bg-amber-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-2.png"
                      alt="Kit Institucional Pronto - Bônus 2"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Kit Institucional Pronto
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Certificado de participação, lista de presença oficial e modelo de declaração/registro da ação realizada.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">🏛️</span>
                    <span>Para empresa, escola e clínica aumenta muito o valor percebido e atende ao RH.</span>
                  </p>
                </div>
              </div>

              {/* BÔNUS 03 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BÔNUS 03
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagem Mockup do Bônus 3 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-3.png')}
                    className="relative rounded-xl overflow-hidden border border-emerald-200/60 shadow-xs bg-emerald-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-3.png"
                      alt="20 Perguntas que Podem Fazer na Palestra - Bônus 3"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      20 Perguntas & Respostas
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Perguntas comuns da plateia + respostas curtas e seguras para você nunca ser pego de surpresa.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">🎯</span>
                    <span>Bate forte na insegurança de quem vai apresentar, dando total tranquilidade ao palestrante.</span>
                  </p>
                </div>
              </div>

              {/* BÔNUS 04 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BÔNUS 04
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100">
                      <Send className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagem Mockup do Bônus 4 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-4.png')}
                    className="relative rounded-xl overflow-hidden border border-pink-200/60 shadow-xs bg-pink-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-4.png"
                      alt="Convite Editável para a Palestra - Bônus 4"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Convite Editável da Palestra
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Modelos de convite digital para empresas, escolas e clínicas divulgarem o evento em redes e WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">📢</span>
                    <span>Facilita a divulgação antecipada e garante maior presença e engajamento do público.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Aviso de inclusão na Opção 2 */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-950 font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Inclusos no Kit Completo:</strong> todos os 4 bônus estão 100% inclusos na <strong>Opção 2</strong> logo abaixo.
              </span>
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. AQUI ENTRAM OS DOIS PREÇOS
            ========================================================================= */}
        <section id="precos" className="py-16 sm:py-24 px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Investimento acessível
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Escolha a opção ideal para a sua apresentação
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Acesso imediato aos arquivos digitais logo após a confirmação.
              </p>
            </div>

            {/* Grid de Preços: Opção 1 e Opção 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* OPÇÃO 1 — ESSENCIAL */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between transition-all">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      OPÇÃO 1
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      ESSENCIAL
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Apresentação Outubro Rosa pronta para quem precisa apenas dos slides.
                    </p>
                  </div>

                  <div className="space-y-3 py-2 border-y border-slate-100 text-sm text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span><strong>Apresentação completa</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Formato digital 16:9</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Apresentação completa (do início ao fim)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Pronto para apresentação em projetor ou TV</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Arquivo em .pptx editável + versão em PDF</span>
                    </div>
                  </div>

                  <div className="text-center py-3 flex flex-col items-center justify-center">
                    <span className="text-xs text-slate-500 font-medium">Pagamento único</span>
                    <div className="flex items-center justify-center mt-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-600 tracking-tight font-sans">
                        R$ 9,90
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://pay.wiapy.com/ZsALudkhdtGU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm flex items-center justify-center text-center cursor-pointer"
                  >
                    QUERO SOMENTE A APRESENTAÇÃO
                  </a>
                  <p className="text-[11px] text-center text-slate-600 mt-2">
                    Acesso imediato • Garantia de 7 dias
                  </p>
                </div>
              </div>

              {/* OPÇÃO 2 — KIT COMPLETO (Destacada visualmente como "MAIS COMPLETO") */}
              <div className="relative bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFF5F8] rounded-3xl p-6 sm:p-8 border-2 border-amber-400/80 shadow-xl shadow-amber-500/10 flex flex-col justify-between ring-1 ring-amber-400/30">
                
                {/* Floating Recommended Ribbon with Gold Accents */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-200/40 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  MAIS COMPLETO & RECOMENDADO
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-1.5">
                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                        <span>⭐ OPÇÃO 2</span>
                      </div>
                      <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300">
                        🎨 Edição 100% no Canva
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      KIT COMPLETO
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                      Apresentação completa + <strong>todos os 4 bônus inclusos</strong>. Edição rápida e prática direto no Canva.
                    </p>
                  </div>

                  {/* Destaque Importante: Editável somente no Canva */}
                  <div className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-200/90 text-cyan-950 text-xs flex items-center gap-2.5 shadow-2xs">
                    <span className="text-base shrink-0">🎨</span>
                    <div className="leading-snug">
                      <strong className="text-cyan-900 font-bold block">Editável somente no Canva</strong>
                      <span className="text-slate-600">Acesse pelo celular ou computador com conta gratuita ou Pro, sem instalar nada.</span>
                    </div>
                  </div>

                  <div className="space-y-3 py-2 border-y border-amber-100 text-sm text-slate-800">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 stroke-[3]" />
                      <div>
                        <strong className="text-slate-900">Apresentação Principal Completa</strong>
                        <p className="text-xs text-slate-600 font-normal">Formato 16:9 widescreen, editável exclusivamente no Canva + PDF pronto para projetar.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Gift className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BÔNUS 01 • Kit do Participante</strong>
                        <p className="text-xs text-slate-600 font-normal">PDF de bolso pós-palestra com sinais de alerta, orientações e fontes oficiais.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BÔNUS 02 • Kit Institucional Pronto</strong>
                        <p className="text-xs text-slate-600 font-normal">Certificado editável no Canva + lista de presença oficial + registro da ação.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BÔNUS 03 • 20 Perguntas que Podem Fazer</strong>
                        <p className="text-xs text-slate-600 font-normal">Guia com respostas prontas e seguras para não ser pego de surpresa na palestra.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Send className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BÔNUS 04 • Convite Editável da Palestra</strong>
                        <p className="text-xs text-slate-600 font-normal">Modelos digitais editáveis no Canva para empresas, escolas e clínicas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-2 flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xs text-slate-500 font-medium">
                        De <span className="line-through text-slate-400">R$ 30,00</span> por apenas:
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300 shadow-xs">
                        Economize 50%
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-full mt-0.5">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-600 tracking-tight font-sans text-center">
                        R$ 15,00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://pay.wiapy.com/9xisvP8abQV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-gradient-to-r from-amber-500 via-rose-600 to-pink-600 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-center"
                  >
                    <span>QUERO O KIT COMPLETO + TODOS OS BÔNUS</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-slate-600 mt-2 font-normal">
                    Acesso imediato • Editável somente no Canva • Todos os 4 bônus inclusos
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            6. PARA QUEM É?
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Público-Alvo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                Feito para quem precisa realizar uma ação de Outubro Rosa
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A linguagem e a diagramação foram calibradas para atender múltiplos perfis de palestrantes e públicos.
              </p>
            </div>

            {/* Quatro cards com identificação imediata e ícones centralizados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-rose-100/90 text-rose-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-rose-200/50">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Empresas e RH
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para ações internas de conscientização com colaboradoras, SIPAT e encontros de bem-estar.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-pink-100/90 text-pink-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-pink-200/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Escolas e instituições
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para apresentações educativas voltadas a professoras, alunas, pais e comunidades acadêmicas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-rose-100/90 text-rose-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-rose-200/50">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Clínicas e profissionais
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para ações informativas com equipes, recepção, salas de espera e pacientes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-pink-100/90 text-pink-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-pink-200/50">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Igrejas, grupos e eventos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para encontros femininos, ministérios, ONGs e campanhas de conscientização comunitárias.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            7. DEPOIMENTOS / FEEDBACK E VALIDAÇÃO PEDAGÓGICA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Depoimentos Reais
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                O que dizem sobre o material
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Mensagens de quem utilizou a apresentação para conduzir suas palestras e ações de Outubro Rosa.
              </p>
            </div>

            {/* Carrossel Interativo com 3 Depoimentos Reais */}
            <TestimonialsCarousel onImageClick={(src) => setSelectedSlidePreview(src)} />

          </div>
        </section>


        {/* =========================================================================
            8. FAQ (PERGUNTAS FREQUENTES)
            ========================================================================= */}
        <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Tire suas dúvidas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Tudo o que você precisa saber sobre o acesso e uso dos slides.
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* =========================================================================
            9. ÚLTIMO CTA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F8] to-[#FFEDF3] border-t border-rose-200 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Sua palestra de Outubro Rosa não precisa começar do zero.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto leading-relaxed">
              Tenha uma apresentação profissional, organizada e pronta para sua ação.
            </p>

            <div className="text-xs sm:text-sm font-semibold text-rose-800 bg-white/70 backdrop-blur-xs px-4 py-1.5 rounded-full inline-block border border-rose-200">
              Apresentação completa • Material digital • Pronta para apresentar
            </div>

            <div className="pt-2 flex flex-col items-center justify-center gap-2">
              <a
                href="#precos"
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <span>QUERO MINHA APRESENTAÇÃO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                A partir de R$ 9,90 · Liberação imediata
              </span>
            </div>

          </div>
        </section>


        {/* =========================================================================
            10. GARANTIA (DIRETAMENTE EM CIMA DO RODAPÉ)
            ========================================================================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-transparent">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/garantia-7-dias.png"
                alt="7 Dias de Garantia Incondicional"
                className="w-32 sm:w-40 md:w-44 h-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-block text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100/90 px-3 py-0.5 rounded-full border border-amber-300">
                7 DIAS DE GARANTIA
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Você tem 7 dias para conhecer o material
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Adquira o material e confira o conteúdo. Se dentro do período de garantia você entender que ele não atende ao que esperava, solicite o reembolso conforme as condições da oferta.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* =========================================================================
          11. RODAPÉ
          ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-base">🎀</span>
              <span className="font-extrabold text-sm text-white tracking-tight">
                Outubro Rosa Slides
              </span>
            </div>

            <div className="flex items-center gap-6 font-medium text-slate-300">
              <button
                onClick={() => setActiveInfoModal('termos')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveInfoModal('privacidade')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveInfoModal('contato')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Contato
              </button>
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left text-[11px] text-slate-300">
            <p>
              © 2026 — Todos os direitos reservados.
            </p>
            <p className="max-w-3xl leading-relaxed">
              Material educativo de conscientização. Não substitui orientação ou acompanhamento profissional de saúde. Sempre consulte profissionais habilitados e o sistema oficial de saúde pública.
            </p>
          </div>

        </div>
      </footer>


      {/* =========================================================================
          MODALS & INTERACTIVE OVERLAYS
          ========================================================================= */}

      {/* 1. Checkout Modal (Essencial R$10 or Kit Completo R$19,90) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        selectedPlan={selectedPlan}
        onClose={() => setIsCheckoutOpen(false)}
        onPlanChange={(plan) => setSelectedPlan(plan)}
      />

      {/* 3. Info Modals (Termos, Privacidade, Contato) */}
      <InfoModals
        activeModal={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
      />

      {/* 4. Slide Preview Lightbox */}
      {selectedSlidePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-3 sm:p-6"
          onClick={() => setSelectedSlidePreview(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-rose-500/40 shadow-2xl p-2 sm:p-3 animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSlidePreview(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedSlidePreview} 
              alt="Slide Ampliado em Alta Resolução" 
              className="w-full h-auto aspect-video rounded-xl object-contain bg-slate-900 shadow-inner"
            />
            <div className="pt-2 text-center text-xs text-rose-200/80 font-medium">
              Apresentação Oficial Outubro Rosa • Arquivo .pptx editável + PDF de alta qualidade
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
