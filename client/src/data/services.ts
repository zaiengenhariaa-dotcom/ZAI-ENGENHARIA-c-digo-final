import { LucideIcon } from "lucide-react";
import { Shield, Home as HomeIcon, FileCheck, FileText, Flame, Leaf, Users, Calendar, Layers, Pencil, HardHat, Map, Ruler, FileBarChart, TrendingUp, ClipboardCheck, Wrench, Building2, Radio, Scale, Lightbulb, DollarSign, Palette, Search } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

export const services: Service[] = [
  {
    icon: Shield,
    title: "Vistoria Cautelar de Vizinhança",
    description: "Documentação e registro do estado de imóveis vizinhos antes de obras",
    details: "Realizamos vistoria técnica detalhada dos imóveis adjacentes antes do início de qualquer obra, documentando com fotos, vídeos e laudos o estado atual das edificações. Este serviço protege tanto o proprietário da obra quanto os vizinhos, evitando conflitos futuros sobre possíveis danos causados pela construção."
  },
  {
    icon: HomeIcon,
    title: "Habite-se e Regularização",
    description: "Regularização completa de imóveis junto aos órgãos competentes",
    details: "Cuidamos de todo o processo de regularização de imóveis, incluindo a obtenção do Habite-se (certificado de conclusão de obra), regularização de construções não legalizadas, averbação de áreas construídas e adequação às normas municipais vigentes. Garantimos que seu imóvel esteja em conformidade legal."
  },
  {
    icon: FileCheck,
    title: "Alvarás",
    description: "Adaptação, construção, demolição, reforma e regularização",
    details: "Elaboração e aprovação de alvarás para diversos tipos de intervenções: construção de novas edificações, reformas, ampliações, demolições, adaptações e regularizações. Acompanhamos todo o processo junto à prefeitura, desde a análise de viabilidade até a emissão do documento."
  },
  {
    icon: FileText,
    title: "Certidões",
    description: "Área construída, demolição, emplacamento, índices construtivos e acessibilidade",
    details: "Emissão de certidões técnicas necessárias para diversos fins: certidão de área construída para financiamentos, certidão de demolição, certidão de emplacamento, certidão de índices construtivos para análise de potencial construtivo e certidão de acessibilidade conforme normas da ABNT."
  },
  {
    icon: Flame,
    title: "Projeto de Combate a Incêndio (PCI)",
    description: "Execução completa de projetos de prevenção e combate a incêndio",
    details: "Desenvolvimento de projetos completos de prevenção e combate a incêndio conforme normas do Corpo de Bombeiros, incluindo dimensionamento de extintores, hidrantes, iluminação de emergência, saídas de emergência, sistemas de detecção e alarme. Acompanhamos a aprovação junto ao Corpo de Bombeiros."
  },
  {
    icon: Leaf,
    title: "Projeto de Logística Sustentável (PLS)",
    description: "Planejamento de logística com foco em sustentabilidade",
    details: "Elaboração de Plano de Logística Sustentável para empresas e empreendimentos, incluindo gestão de resíduos, eficiência energética, uso racional de água, mobilidade sustentável e práticas de construção verde. Adequação às certificações ambientais e legislação vigente."
  },
  {
    icon: Users,
    title: "Administração de Obras",
    description: "Gerenciamento completo de projetos e execução de obras",
    details: "Gestão completa de obras desde o planejamento até a entrega final, incluindo coordenação de equipes, controle de qualidade, gestão de fornecedores, acompanhamento de cronograma físico-financeiro, controle de custos e relatórios periódicos de andamento. Garantimos o sucesso do seu projeto."
  },
  {
    icon: Calendar,
    title: "Planejamento de Obra",
    description: "Cronogramas e planejamento estratégico de execução",
    details: "Elaboração de planejamento detalhado de obras com cronograma físico-financeiro, definição de etapas construtivas, sequenciamento de atividades, análise de caminhos críticos, dimensionamento de equipes e recursos. Utilizamos metodologias modernas de gestão de projetos para otimizar prazos e custos."
  },
  {
    icon: Layers,
    title: "Projetos em BIM",
    description: "Execução de projetos utilizando tecnologia Building Information Modeling",
    details: "Desenvolvimento de projetos utilizando a metodologia BIM (Building Information Modeling), que permite modelagem 3D inteligente, detecção de interferências, quantificação automática de materiais, simulações de desempenho e melhor coordenação entre disciplinas. Tecnologia de ponta para projetos mais precisos e eficientes."
  },
  {
    icon: Pencil,
    title: "Execução de Projetos",
    description: "Desenvolvimento de projetos em geral de engenharia",
    details: "Elaboração de projetos de engenharia civil em diversas especialidades: estrutural, arquitetônico, hidrossanitário, elétrico, fundações, contenções, pavimentação e infraestrutura. Projetos completos com memorial descritivo, especificações técnicas, plantas, cortes, detalhamentos e quantitativos."
  },
  {
    icon: HardHat,
    title: "Execução de Obra",
    description: "Construção e execução completa de obras civis",
    details: "Execução de obras civis residenciais, comerciais e industriais, desde a fundação até o acabamento final. Contamos com equipe técnica qualificada, fornecedores certificados e rigoroso controle de qualidade. Garantimos cumprimento de prazos, segurança do trabalho e excelência na execução."
  },
  {
    icon: Map,
    title: "Desmembramento e Desdobro",
    description: "Divisão legal de terrenos e lotes",
    details: "Serviços de desmembramento (divisão de terrenos em lotes menores com acesso a via pública) e desdobro (divisão de lotes já existentes). Inclui levantamento topográfico, projeto de parcelamento, análise de viabilidade, aprovação na prefeitura e registro em cartório."
  },
  {
    icon: Ruler,
    title: "Levantamento Topográfico",
    description: "Levantamentos planialtimétricos e cadastrais",
    details: "Execução de levantamentos topográficos planialtimétricos e cadastrais utilizando equipamentos de precisão (estação total, GPS geodésico, drone). Fornecemos plantas topográficas, curvas de nível, perfis longitudinais e transversais, cálculo de volumes e memorial descritivo para projetos e regularizações."
  },
  {
    icon: FileBarChart,
    title: "Laudo de Avaliação de Imóveis",
    description: "Avaliação técnica e comercial de propriedades",
    details: "Elaboração de laudos de avaliação de imóveis conforme normas da ABNT NBR 14653, para fins de compra/venda, financiamento, partilha, desapropriação, garantia de empréstimos ou processos judiciais. Avaliação técnica precisa considerando características do imóvel, localização, estado de conservação e mercado."
  },
  {
    icon: TrendingUp,
    title: "Avaliação pelo Método da Renda",
    description: "Avaliação de imóveis considerando potencial de renda",
    details: "Avaliação de imóveis utilizando o método da capitalização da renda, ideal para imóveis de investimento como edifícios comerciais, galpões industriais, shopping centers e empreendimentos que geram receita. Análise de fluxo de caixa, taxa de retorno e valor presente líquido."
  },
  {
    icon: ClipboardCheck,
    title: "Laudo de Reforma",
    description: "Documentação técnica para reformas em apartamentos",
    details: "Elaboração de laudo técnico detalhado para reformas em apartamentos, incluindo análise estrutural, verificação de interferências em elementos estruturais, avaliação de instalações existentes, projeto de modificações e ART (Anotação de Responsabilidade Técnica). Documento essencial para aprovação em condomínios."
  },
  {
    icon: Wrench,
    title: "Execução de Reformas",
    description: "Reformas residenciais e comerciais completas",
    details: "Execução de reformas completas ou parciais em imóveis residenciais e comerciais, incluindo demolições, alvenaria, revestimentos, pintura, instalações elétricas e hidráulicas, esquadrias, pisos e acabamentos. Equipe especializada com foco em qualidade, limpeza e cumprimento de prazos."
  },
  {
    icon: Building2,
    title: "Licença de Construção",
    description: "Obtenção de licenças e autorizações para construir",
    details: "Assessoria completa para obtenção de licenças de construção junto à prefeitura, incluindo análise de viabilidade, elaboração de projetos legais (arquitetônico, estrutural, instalações), preenchimento de formulários, protocolo de documentação e acompanhamento do processo de aprovação até a emissão do alvará."
  },
  {
    icon: Radio,
    title: "Alvará para Telefonia/Torres",
    description: "Aprovação de alvarás para telefonia móvel celular e torres de internet",
    details: "Elaboração de projetos e obtenção de alvarás para instalação de antenas de telefonia móvel celular, torres de internet, estações rádio-base (ERB) e equipamentos de telecomunicações. Inclui análise estrutural, projeto elétrico, estudo de impacto ambiental e aprovação nos órgãos competentes (Anatel, prefeitura)."
  },
  {
    icon: Layers,
    title: "Unificação de Lotes",
    description: "Processo de junção legal de terrenos adjacentes",
    details: "Serviço de unificação de lotes contíguos em uma única matrícula, incluindo levantamento topográfico unificado, memorial descritivo, projeto de unificação, aprovação na prefeitura, averbação no registro de imóveis e atualização de documentação. Simplifica a gestão e valoriza o imóvel."
  },
  {
    icon: Scale,
    title: "Laudos Técnicos Periciais",
    description: "Perícias técnicas e laudos especializados",
    details: "Elaboração de laudos técnicos periciais para processos judiciais e extrajudiciais, incluindo perícias de engenharia, avaliação de danos, análise de vícios construtivos, determinação de causas de patologias, avaliação de responsabilidades técnicas e arbitragem técnica. Profissionais habilitados como peritos judiciais."
  },
  {
    icon: Lightbulb,
    title: "Estudo de Viabilidade",
    description: "Análise técnica-financeira para viabilidade de obras",
    details: "Estudo completo de viabilidade técnica e econômica de empreendimentos, incluindo análise de potencial construtivo, restrições legais, custos estimados de construção, cronograma, análise de mercado, projeção de receitas, indicadores financeiros (VPL, TIR) e análise de sensibilidade. Fundamental para tomada de decisão em investimentos."
  },
  {
    icon: DollarSign,
    title: "Isenção de INSS",
    description: "Assessoria para isenção de INSS em obras",
    details: "Assessoria técnica e documental para obtenção de isenção de INSS sobre mão de obra em construção civil, conforme legislação vigente. Inclui elaboração de matrícula CEI, documentação técnica, acompanhamento do processo junto à Receita Federal e orientações para manutenção da isenção."
  },
  {
    icon: Leaf,
    title: "Obras Sustentáveis",
    description: "Execução de projetos com foco em sustentabilidade ambiental",
    details: "Desenvolvimento e execução de projetos de construção sustentável, incluindo eficiência energética, uso de materiais ecológicos, sistemas de captação de água da chuva, energia solar fotovoltaica, ventilação e iluminação natural, gestão de resíduos e certificações ambientais (LEED, AQUA). Construindo o futuro com responsabilidade."
  },
  {
    icon: Palette,
    title: "Design de Interiores",
    description: "Consultoria especializada em design e decoração",
    details: "Consultoria completa de design de interiores, incluindo projeto de ambientes, seleção de materiais e acabamentos, especificação de mobiliário, projeto de iluminação, paleta de cores, renderizações 3D e acompanhamento de execução. Criamos espaços funcionais, confortáveis e esteticamente agradáveis."
  },
  {
    icon: Wrench,
    title: "Manutenções Prediais",
    description: "Serviços de manutenção preventiva e corretiva",
    details: "Serviços de manutenção predial preventiva e corretiva para edifícios residenciais, comerciais e industriais. Inclui manutenção de instalações elétricas, hidráulicas, estruturas, fachadas, impermeabilizações, pintura, esquadrias e sistemas de segurança. Planos de manutenção personalizados para preservar o patrimônio."
  },
  {
    icon: Search,
    title: "Inspeção Predial",
    description: "Inspeções técnicas detalhadas de edificações",
    details: "Inspeção predial completa conforme norma ABNT NBR 16747, incluindo vistoria de todos os sistemas da edificação (estrutura, instalações, impermeabilização, fachada, cobertura), identificação de anomalias e falhas, classificação de riscos, recomendações técnicas e plano de manutenção. Essencial para segurança e valorização do imóvel."
  },
  {
    icon: Building2,
    title: "Assessoria Condominial",
    description: "Assessoria de engenharia para condomínios",
    details: "Assessoria técnica especializada para condomínios, incluindo análise de orçamentos de obras, fiscalização de serviços, elaboração de planos de manutenção, pareceres técnicos, acompanhamento de reformas, orientação sobre normas técnicas e legislação, suporte em assembleias e gestão de projetos de melhorias. Protegendo o patrimônio dos condôminos."
  }
];
