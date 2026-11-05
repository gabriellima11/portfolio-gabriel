import type { TechKey } from "./tech";

export type Experience = {
    id: string;
    company: string;
    role: string;
    period: string;
    current?: boolean;
    description: string;
    stack?: TechKey[];
};

export const experiences: Experience[] = [
    {
        id: "1",
        company: "South TI",
        role: "Desenvolvedor Frontend",
        period: "Mai 2026 — Atual",
        current: true,
        description:
            "Desenvolvimento e manutenção de aplicações web com PHP, JavaScript/jQuery, Bootstrap e Next.js. Criação de interfaces responsivas, funcionalidades interativas, integração com APIs e otimização de performance. Versionamento com Git e rotina ágil SCRUM: dailies, planejamento de sprints e acompanhamento de demandas em equipe.",
        stack: ["php", "javascript", "jquery", "bootstrap", "next", "git"],
    },
    {
        id: "2",
        company: "South TI",
        role: "Analista de Suporte Júnior",
        period: "Mar 2025 — Mai 2026",
        description:
            "Atendimento helpdesk e presencial para empresas clientes, com foco em resolução de incidentes e manutenção da infraestrutura de TI. Suporte de hardware, software e configuração de estações, acompanhamento de chamados e documentação de procedimentos.",
    },
    {
        id: "3",
        company: "Hospital Evandro Ribeiro",
        role: "Estágio de Suporte T.I",
        period: "Nov 2022 — Dez 2023",
        description:
            "Rotinas de solução de problemas no setor de TIC e Telecom, em conformidade com normas internas. Apoio no controle da fila de chamados e no cronograma de atendimento a usuários, fornecedores e prestadores de serviço.",
    },
];
