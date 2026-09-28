import React from 'react';
import { X, ShieldCheck, Mail, MessageCircle, FileText } from 'lucide-react';

export type InfoModalType = 'termos' | 'privacidade' | 'contato' | null;

interface InfoModalsProps {
  activeModal: InfoModalType;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            {activeModal === 'termos' && <FileText className="w-5 h-5 text-rose-600" />}
            {activeModal === 'privacidade' && <ShieldCheck className="w-5 h-5 text-rose-600" />}
            {activeModal === 'contato' && <Mail className="w-5 h-5 text-rose-600" />}
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              {activeModal === 'termos' && 'Termos de Uso'}
              {activeModal === 'privacidade' && 'Política de Privacidade'}
              {activeModal === 'contato' && 'Fale Conosco & Suporte'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-sm text-slate-600 leading-relaxed max-h-[70vh] overflow-y-auto space-y-4">
          {activeModal === 'termos' && (
            <>
              <p>
                <strong>1. Natureza do Material:</strong> Este produto é composto por arquivos digitais (.pptx e .pdf) desenvolvidos com fins educativos e de conscientização sobre a campanha Outubro Rosa.
              </p>
              <p>
                <strong>2. Não Substituição Médica:</strong> O conteúdo apresentado não constitui diagnóstico médico, consulta terapêutica ou prescrição clínica. Trata-se de material informativo fundamentado em diretrizes públicas de saúde (como INCA e Ministério da Saúde).
              </p>
              <p>
                <strong>3. Licença de Uso:</strong> Ao adquirir, o comprador tem direito de apresentar os slides em suas equipes, empresas, escolas, igrejas ou eventos institucionais. É vedada a revenda não autorizada ou redistribuição pública dos arquivos originais como produto comercial próprio.
              </p>
              <p>
                <strong>4. Garantia Incondicional de 7 Dias:</strong> Caso o material não atenda suas expectativas, você poderá solicitar o reembolso integral em até 7 dias corridos após a compra.
              </p>
            </>
          )}

          {activeModal === 'privacidade' && (
            <>
              <p>
                <strong>1. Coleta de Informações:</strong> Coletamos apenas os dados essenciais para o processamento da compra e envio dos links de download (nome, e-mail e telefone de contato).
              </p>
              <p>
                <strong>2. Segurança dos Dados:</strong> Seus dados não são comercializados ou cedidos a terceiros. As transações financeiras são processadas sob criptografia bancária padrão de mercado.
              </p>
              <p>
                <strong>3. Comunicação:</strong> Enviamos apenas o e-mail de entrega dos arquivos e comunicações estritamente pertinentes ao seu pedido.
              </p>
            </>
          )}

          {activeModal === 'contato' && (
            <div className="space-y-4">
              <p>
                Precisa de suporte com o download, emissão de recibo para sua empresa ou tem alguma dúvida antes de comprar?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20a%20apresentação%20de%20Outubro%20Rosa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-xs">WhatsApp Suporte</div>
                    <div className="text-[11px] text-emerald-700">Atendimento ágil em horário comercial</div>
                  </div>
                </a>

                <a
                  href="mailto:suporte@outubrorosa.exemplo"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 hover:bg-rose-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <div className="font-bold text-xs">E-mail</div>
                    <div className="text-[11px] text-rose-700">suporte@outubrorosa.exemplo</div>
                  </div>
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Horário de atendimento: Segunda a Sexta, das 08h às 19h (horário de Brasília).
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
