import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Copy, 
  Download, 
  QrCode, 
  CreditCard, 
  Sparkles, 
  FileText, 
  Gift, 
  Lock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlan: 'essencial' | 'completo';
  onClose: () => void;
  onPlanChange: (plan: 'essencial' | 'completo') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedPlan,
  onClose,
  onPlanChange,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const price = selectedPlan === 'essencial' ? '9,90' : '15,00';
  const simulatedPixCode = "00020126580014br.gov.bcb.pix0136outubro-rosa-slides-2026@apresentacao.com520400005303986540" + 
    (selectedPlan === 'essencial' ? "509.90" : "515.00") + "5802BR5925OUTUBRO ROSA SLIDES LTDA6009SAO PAULO62070503***6304ABCD";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleDownloadDemo = () => {
    // Generate text/blob file simulation for immediate customer satisfaction
    const content = `================================================
APRESENTAÇÃO OUTUBRO ROSA 2026 - ACESSO IMEDIATO
================================================
Plano: ${selectedPlan === 'essencial' ? 'Opção 1 - Essencial (R$ 9,90)' : 'Opção 2 - Kit Completo (R$ 15,00)'}
Cliente: ${name || 'Apresentador(a)'}
E-mail cadastrado: ${email}
Status: Pagamento confirmado

LINKS DE ACESSO AO MATERIAL:
1. Apresentação PowerPoint (.pptx editável 16:9):
   https://download.outubrorosa.exemplo/apresentacao-outubro-rosa.pptx

2. Apresentação em PDF de Alta Resolução:
   https://download.outubrorosa.exemplo/apresentacao-outubro-rosa.pdf

${selectedPlan === 'completo' ? `
BÔNUS DO KIT COMPLETO INCLUÍDOS:
3. Kit do Participante (Guia de bolso para impressão e envio digital)
4. 20 Perguntas que Podem Fazer Durante a Palestra (Guia com respostas médicas)
5. Kit Institucional (Modelo de Certificado editável + Lista de presença + Cartazes de divulgação)
` : ''}

Suporte: contato@outubrorosa.exemplo
Agradecemos pela dedicação em levar conscientização e prevenção!`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Acesso_Outubro_Rosa_${selectedPlan}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </span>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {isSuccess ? 'Pagamento Confirmado!' : 'Finalizar Pedido'}
              </h3>
              <p className="text-xs text-rose-100">
                {isSuccess ? 'Seus materiais já estão liberados' : 'Ambiente 100% seguro com liberação imediata'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isSuccess ? (
          <div className="p-4 sm:p-6 space-y-5">
            
            {/* Plan Selector tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Escolha o Pacote Desejado:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onPlanChange('essencial')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    selectedPlan === 'essencial'
                      ? 'border-rose-600 bg-rose-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">Opção 1 · Essencial</div>
                  <div className="text-xs text-slate-500 mt-0.5">Apresentação 16:9</div>
                  <div className="text-base font-extrabold text-amber-600 mt-2 font-sans">R$ 9,90</div>
                  {selectedPlan === 'essencial' && (
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onPlanChange('completo')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    selectedPlan === 'completo'
                      ? 'border-amber-400 bg-amber-50/50 shadow-xs ring-2 ring-amber-400/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-900 text-sm">Opção 2 · Completo</div>
                    <span className="text-[10px] font-bold bg-gradient-to-r from-amber-500 to-rose-600 text-white px-1.5 py-0.5 rounded-full">
                      RECOMENDADO
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Apresentação + 3 bônus</div>
                  <div className="flex items-baseline gap-1 mt-2 font-sans">
                    <span className="text-xs line-through text-slate-400">R$ 30,00</span>
                    <span className="text-base font-extrabold text-amber-600">R$ 15,00</span>
                  </div>
                  {selectedPlan === 'completo' && (
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Included highlights summary */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                O que você recebe imediatamente:
              </div>
              <p>• Apresentação completa e profissional pronta para apresentar em 16:9 (.pptx editável + .pdf)</p>
              {selectedPlan === 'completo' && (
                <>
                  <p>• <strong>Kit do Participante</strong> para enviar ou entregar após a palestra</p>
                  <p>• <strong>20 Perguntas que Podem Fazer</strong> para se preparar com respostas</p>
                  <p>• <strong>Kit Institucional</strong> com Certificado editável + Lista de presença</p>
                </>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  E-mail para Receber o Material
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
                <span className="text-[11px] text-slate-600 mt-1 block">
                  Enviaremos o link de download e confirmação neste endereço.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp (para suporte rápido e lembrete)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-rose-50 border-rose-600 text-rose-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    Pix (Aprovação Instantânea)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-rose-50 border-rose-600 text-rose-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    Cartão de Crédito
                  </button>
                </div>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="text-xs text-emerald-900">
                    <p className="font-bold">Liberação imediata via Pix</p>
                    <p className="text-[11px] text-emerald-800">
                      O arquivo é liberado na tela logo após você clicar no botão abaixo.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-500 block">Total:</span>
                    <span className="text-lg font-extrabold text-emerald-700">R$ {price}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <input
                    type="text"
                    placeholder="Número do cartão (simulação de compra)"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    defaultValue="•••• •••• •••• 4242"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      defaultValue="12/28"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      defaultValue="123"
                    />
                  </div>
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-rose-600/30 hover:shadow-rose-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processando com segurança...
                  </span>
                ) : (
                  <>
                    <span>Confirmar e Receber Apresentação · R$ {price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia de 7 Dias
                </span>
                <span>•</span>
                <span>Acesso 100% Digital</span>
                <span>•</span>
                <span>Download Imediato</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-6 space-y-5 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">
                Parabéns! Seu acesso foi liberado.
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Enviamos os links também para o seu e-mail (<strong>{email}</strong>). Você já pode baixar os arquivos agora mesmo:
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-semibold text-xs text-slate-700">Pacote Adquirido:</span>
                <span className="font-bold text-xs text-rose-600 uppercase">
                  {selectedPlan === 'essencial' ? 'Opção 1 · Essencial' : 'Opção 2 · Kit Completo'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-medium text-slate-800 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-rose-600" />
                    Apresentação Outubro Rosa 2026 (.pptx editável 16:9)
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">Pronto</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-medium text-slate-800 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Versão em PDF de Alta Resolução para Projetor
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">Pronto</span>
                </div>

                {selectedPlan === 'completo' && (
                  <div className="flex items-center justify-between text-xs bg-rose-50/70 p-2.5 rounded-lg border border-rose-200">
                    <span className="font-medium text-rose-900 flex items-center gap-1.5">
                      <Gift className="w-4 h-4 text-rose-600" />
                      Kit Completo: Folheto + 20 Perguntas + Certificado Institucional
                    </span>
                    <span className="text-[11px] font-mono text-rose-600 font-bold">Pronto</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadDemo}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Baixar Apresentação e Arquivos Agora
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium rounded-xl text-sm transition-all"
              >
                Concluir
              </button>
            </div>

            <p className="text-[11px] text-slate-600">
              Precisa de ajuda ou nota fiscal? Nosso time responde em minutos via WhatsApp.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
