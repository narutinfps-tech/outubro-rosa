export interface SlideInfo {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  category: 'intro' | 'dados' | 'sinais' | 'exames' | 'prevencao' | 'encerramento';
  highlights: string[];
  statNumber?: string;
  statLabel?: string;
  keyTakeaway: string;
  accentColor?: string;
}

export const SLIDES_DATA: SlideInfo[] = [
  {
    id: 1,
    title: "Outubro Rosa: Conscientização e Cuidado",
    subtitle: "Uma conversa necessária sobre prevenção, diagnóstico precoce e vida.",
    badge: "Slide 01 · Abertura",
    category: "intro",
    highlights: [
      "Apresentação pronta para empresas, escolas e instituições",
      "Linguagem acolhedora, clara e embasada em diretrizes de saúde",
      "Formato 16:9 de alto impacto visual"
    ],
    keyTakeaway: "Cuidar de você e de quem você ama começa pela informação.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 2,
    title: "Boas-vindas e Propósito Deste Encontro",
    subtitle: "Por que estamos reunidos hoje e qual o objetivo desta conversa?",
    badge: "Slide 02 · Propósito",
    category: "intro",
    highlights: [
      "Desmistificar medos e tabus sobre o câncer de mama",
      "Incentivar o diálogo aberto entre colegas, amigos e familiares",
      "Transformar conscientização em ações práticas e exames em dia"
    ],
    keyTakeaway: "A informação correta salva vidas e combate o medo do desconhecido.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "A Origem do Movimento Outubro Rosa",
    subtitle: "Como uma corrida em Nova York inspirou o mundo todo.",
    badge: "Slide 03 · História",
    category: "intro",
    highlights: [
      "Iniciado na década de 1990 pela Fundação Susan G. Komen",
      "O laço rosa como símbolo global de solidariedade e esperança",
      "A adesão do Brasil a partir de 2002 com a iluminação de monumentos"
    ],
    keyTakeaway: "Um símbolo internacional que lembra a urgência do autocuidado diário.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 4,
    title: "Câncer de Mama em Números",
    subtitle: "O panorama no Brasil e a importância de olhar para as estatísticas.",
    badge: "Slide 04 · Dados Reais",
    category: "dados",
    highlights: [
      "Tipo de câncer mais incidente entre mulheres no Brasil (após pele não melanoma)",
      "Estimativa de mais de 73 mil novos casos anuais (INCA)",
      "Maior prevalência após os 50 anos, exigindo vigilância regular"
    ],
    statNumber: "73.610",
    statLabel: "novos casos estimados por ano no Brasil (INCA)",
    keyTakeaway: "Não são apenas estatísticas frias: são vidas que podem ser preservadas.",
    accentColor: "from-pink-600 to-rose-700"
  },
  {
    id: 5,
    title: "O Que É o Câncer de Mama?",
    subtitle: "Compreendendo o desenvolvimento celular de forma simples.",
    badge: "Slide 05 · Biologia",
    category: "dados",
    highlights: [
      "Multiplicação desordenada de células anormais da mama",
      "Formação de um nódulo ou alteração estrutural no tecido",
      "Diferentes subtipos que exigem abordagens terapêuticas personalizadas"
    ],
    keyTakeaway: "Identificar no estágio inicial é a chave para o sucesso do tratamento.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 6,
    title: "Fatores Associados ao Risco",
    subtitle: "O que aumenta a probabilidade e como agir preventivamente?",
    badge: "Slide 06 · Fatores",
    category: "dados",
    highlights: [
      "Idade (mais comum a partir dos 50 anos)",
      "Histórico reprodutivo (primeira menstruação precoce ou menopausa tardia)",
      "Densidade do tecido mamário e predisposição genética (BRCA1 e BRCA2)"
    ],
    keyTakeaway: "Ter fatores de risco não significa ter a doença, mas exige acompanhamento atento.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 7,
    title: "Fatores Modificáveis vs Não Modificáveis",
    subtitle: "O que está sob nosso controle diário e o que devemos vigiar.",
    badge: "Slide 07 · Controle",
    category: "prevencao",
    highlights: [
      "Não modificáveis: idade, genética hereditária e histórico familiar",
      "Modificáveis: alimentação equilibrada, sedentarismo, sobrepeso e álcool",
      "Cerca de 30% dos casos podem ser evitados com hábitos saudáveis"
    ],
    statNumber: "Até 30%",
    statLabel: "dos casos podem ser prevenidos com estilo de vida",
    keyTakeaway: "Nossas escolhas diárias atuam diretamente como escudo protetor.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 8,
    title: "Sinais Que Merecem Atenção",
    subtitle: "Mudanças físicas na mama que devem ser avaliadas por um médico.",
    badge: "Slide 08 · Sinais",
    category: "sinais",
    highlights: [
      "Nódulo (caroço) fixo e geralmente indolor na mama ou axila",
      "Pele da mama avermelhada ou com aspecto de casca de laranja",
      "Alterações no mamilo (retração, inversão ou secreção espontânea)"
    ],
    keyTakeaway: "Qualquer alteração persistente deve ser examinada sem pânico.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 9,
    title: "O Autocuidado: Conhecendo Seu Corpo",
    subtitle: "A importância da auto-observação em momentos cotidianos.",
    badge: "Slide 09 · Autocuidado",
    category: "sinais",
    highlights: [
      "Não substitui a mamografia, mas desenvolve intimidade com o próprio corpo",
      "Realizar a palpação e inspeção visual no banho ou ao se vestir",
      "Percebeu algo diferente? Busque uma unidade de saúde imediatamente"
    ],
    keyTakeaway: "Quem se conhece percebe primeiro as pequenas mudanças.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 10,
    title: "Mamografia: O Exame Padrão-Ouro",
    subtitle: "A tecnologia capaz de detectar lesões milimétricas antes de serem palpáveis.",
    badge: "Slide 10 · Exames",
    category: "exames",
    highlights: [
      "Capaz de identificar microcalcificações e tumores em fase subclínica",
      "Procedimento rápido, seguro e realizado por técnica especializada",
      "Principal ferramenta de rastreamento populacional indicada pelo Ministério da Saúde"
    ],
    keyTakeaway: "A mamografia descobre o que os olhos e as mãos ainda não conseguem sentir.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 11,
    title: "Quando e Com Que Frequência Fazer?",
    subtitle: "Diretrizes recomendadas para cada faixa etária.",
    badge: "Slide 11 · Periodicidade",
    category: "exames",
    highlights: [
      "Mulheres de 50 a 69 anos: mamografia a cada 2 anos (rastreamento SUS)",
      "Sociedades médicas recomendam a partir dos 40 anos anualmente",
      "Histórico de câncer em parentes de primeiro grau: acompanhamento mais precoce"
    ],
    keyTakeaway: "Consulte sua ginecologista ou médico de família para definir seu calendário.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 12,
    title: "Exames Complementares: Ultrassom e Ressonância",
    subtitle: "Quando outros métodos diagnósticos são indicados.",
    badge: "Slide 12 · Diagnóstico",
    category: "exames",
    highlights: [
      "Ultrassonografia mamária: ideal para mamas densas e diferenciação de cistos",
      "Ressonância Magnética: indicada para alto risco genético e monitoramento",
      "Biópsia: o único exame que confirma a natureza benigna ou maligna"
    ],
    keyTakeaway: "Os exames trabalham juntos para fornecer um diagnóstico seguro e preciso.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 13,
    title: "Mitos e Verdades Desmistificados",
    subtitle: "Separando fake news e tabus da evidência científica comprovada.",
    badge: "Slide 13 · Mitos e Verdades",
    category: "dados",
    highlights: [
      "Mito: Desodorante antitranspirante ou sutiã com aro causam câncer (Falso)",
      "Verdade: Homens também podem ter câncer de mama (1% do total de casos)",
      "Mito: Todo nódulo na mama é maligno (Cerca de 80% são alterações benignas)"
    ],
    keyTakeaway: "Desarmar fake news traz tranquilidade e encoraja a busca por exames reais.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 14,
    title: "Diagnóstico Precoce: Até 95% de Cura",
    subtitle: "O impacto decisivo do tempo no tratamento e prognóstico.",
    badge: "Slide 14 · Diagnóstico Precoce",
    category: "dados",
    highlights: [
      "Tratamentos muito menos invasivos e com recuperação mais rápida",
      "Menor necessidade de quimioterapia agressiva ou mastectomia total",
      "Preservação da qualidade de vida e bem-estar emocional"
    ],
    statNumber: "Até 95%",
    statLabel: "de chance de cura com diagnóstico precoce",
    keyTakeaway: "Tempo é saúde: quanto antes você descobre, maiores as chances de cura.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 15,
    title: "Hábitos de Prevenção e Cuidado Diário",
    subtitle: "Práticas saudáveis que reduzem o risco de inúmeras doenças crônicas.",
    badge: "Slide 15 · Hábitos",
    category: "prevencao",
    highlights: [
      "Praticar atividade física regular (mínimo de 150 minutos por semana)",
      "Manter o peso corporal adequado ao longo da vida e pós-menopausa",
      "Evitar o tabagismo e limitar severamente o consumo de bebidas alcoólicas"
    ],
    keyTakeaway: "A prevenção primária é um investimento de autocuidado em longo prazo.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 16,
    title: "Alimentação Saudável e Amamentação",
    subtitle: "Como a nutrição e o aleitamento protegem o organismo feminino.",
    badge: "Slide 16 · Nutrição",
    category: "prevencao",
    highlights: [
      "Dieta rica em frutas, legumes, verduras e cereais integrais",
      "Redução no consumo de ultraprocessados, embutidos e açúcares refinados",
      "Amamentar o máximo de tempo possível promove renovação protetora do tecido"
    ],
    keyTakeaway: "Alimento de verdade é combustível e medicamento preventivo para o corpo.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 17,
    title: "Saúde Emocional e Gerenciamento do Estresse",
    subtitle: "O equilíbrio psicológico como pilar fundamental da imunidade.",
    badge: "Slide 17 · Bem-estar",
    category: "prevencao",
    highlights: [
      "O estresse crônico altera neurotransmissores e respostas inflamatórias",
      "A importância do sono reparador e de pausas restaurativas no dia a dia",
      "Práticas de conexão social, momentos de lazer e apoio mútuo"
    ],
    keyTakeaway: "Cuidar da mente é parte inseparável de cuidar da saúde física.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 18,
    title: "Como Apoiar Quem Recebeu o Diagnóstico?",
    subtitle: "Empatia prática, escuta ativa e presença na jornada de tratamento.",
    badge: "Slide 18 · Acolhimento",
    category: "encerramento",
    highlights: [
      "Evite frases como 'seja forte' ou comparações com outros casos",
      "Ofereça ajuda prática: caronas, apoio nas tarefas domésticas, companhia",
      "Esteja presente para ouvir sem julgar os momentos de fragilidade"
    ],
    keyTakeaway: "O amor, o respeito e a escuta sem julgamento aceleram a cura emocional.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 19,
    title: "Direitos da Paciente no Brasil",
    subtitle: "Garantias legais para agilidade no diagnóstico e início da terapia.",
    badge: "Slide 19 · Direitos",
    category: "dados",
    highlights: [
      "Lei dos 60 Dias: início do tratamento pelo SUS em até 60 dias após laudo",
      "Lei dos 30 Dias: realização de exames diagnósticos em até um mês",
      "Direito à reconstrução mamária gratuita pelo SUS e convênios particulares"
    ],
    keyTakeaway: "Conhecer a legislação é essencial para exigir atendimento digno e ágil.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 20,
    title: "Orientações Práticas para a Sua Rotina",
    subtitle: "Checklist simplificado para colocar a saúde em primeiro lugar.",
    badge: "Slide 20 · Orientações",
    category: "encerramento",
    highlights: [
      "Agende ainda este mês sua consulta ginecológica anual",
      "Verifique se suas amigas e familiares com mais de 40/50 anos fizeram o exame",
      "Compartilhe conhecimento em suas redes, empresas e grupos de WhatsApp"
    ],
    keyTakeaway: "Uma conversa sincera hoje pode salvar a vida de alguém amanhã.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 21,
    title: "O Que Levar Desta Palestra",
    subtitle: "As mensagens essenciais que devem permanecer com você.",
    badge: "Slide 21 · Síntese",
    category: "encerramento",
    highlights: [
      "Prevenção é atitude diária (alimentação, movimento, sobriedade)",
      "Diagnóstico precoce transforma o desfecho: até 95% de cura",
      "Solidariedade e empatia salvam tanto quanto a medicina"
    ],
    keyTakeaway: "Não adie sua saúde. O melhor momento para se cuidar é agora.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 22,
    title: "Canais de Apoio e Onde Buscar Ajuda",
    subtitle: "Contatos e instituições públicas para atendimento e orientação.",
    badge: "Slide 22 · Contatos Úteis",
    category: "encerramento",
    highlights: [
      "Disque Saúde SUS: 136 (Informações gratuitas sobre UBS e unidades)",
      "INCA (Instituto Nacional de Câncer): www.gov.br/inca",
      "ONGs de apoio à mulher: FEMAMA, Américas Amigas e Instituto Vencer o Câncer"
    ],
    keyTakeaway: "Você nunca está sozinha nesta caminhada. Peça ajuda sempre que precisar.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 23,
    title: "Cuidar de Si É um Ato de Coragem e Amor",
    subtitle: "Agradecemos a atenção de todos. Vamos espalhar essa mensagem!",
    badge: "Slide 23 · Encerramento",
    category: "encerramento",
    highlights: [
      "Espalhe a mensagem de conscientização para suas equipes e família",
      "Palestra concluída com clareza, empatia e compromisso com a vida",
      "Apresentação pronta para projetores, telas corporativas e impressões"
    ],
    keyTakeaway: "Outubro é Rosa, mas a prevenção deve acontecer o ano inteiro.",
    accentColor: "from-rose-500 to-pink-500"
  }
];

export const HIGHLIGHT_SLIDES = [
  {
    index: 4, // Câncer de mama em números
    title: "Câncer de mama em números",
    tag: "Estatísticas INCA",
    summary: "Dados epidemiológicos organizados em infográfico para projetor.",
    badge: "Slide 04"
  },
  {
    index: 8, // Sinais que merecem atenção
    title: "Sinais que merecem atenção",
    tag: "Auto-observação",
    summary: "Ilustrações e explicações didáticas dos sinais e alertas no corpo.",
    badge: "Slide 08"
  },
  {
    index: 6, // Fatores associados ao risco
    title: "Fatores associados ao risco",
    tag: "Genética & Ambiente",
    summary: "Diferenciação clara entre predisposição e riscos comportamentais.",
    badge: "Slide 06"
  },
  {
    index: 10, // Mamografia
    title: "Mamografia",
    tag: "Rastreamento",
    summary: "Explicação do padrão-ouro de diagnóstico e periodicidade recomendada.",
    badge: "Slide 10"
  },
  {
    index: 13, // Mitos e verdades
    title: "Mitos e verdades",
    tag: "Desmistificação",
    summary: "Perguntas comuns da plateia respondidas com respaldo médico.",
    badge: "Slide 13"
  },
  {
    index: 15, // Hábitos de cuidado
    title: "Hábitos de cuidado",
    tag: "Prevenção Prática",
    summary: "30% dos casos preveníveis através de escolhas diárias saudáveis.",
    badge: "Slide 15"
  },
  {
    index: 14, // Diagnóstico precoce
    title: "Diagnóstico precoce",
    tag: "Até 95% de Cura",
    summary: "O gráfico de impacto do diagnóstico em fases iniciais da doença.",
    badge: "Slide 14"
  },
  {
    index: 21, // O que levar desta palestra
    title: "O que levar desta palestra",
    tag: "Conclusão & Ação",
    summary: "Resumo executivo em 3 lições para a plateia guardar e aplicar.",
    badge: "Slide 21"
  }
];
