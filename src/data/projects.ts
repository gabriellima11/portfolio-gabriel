import images from "@/assets";
import type { TechKey } from "./tech";

export type ProjectCategory = "fullstack" | "front-end";

export type Project = {
    name: string;
    description: string;
    category: ProjectCategory;
    image: string;
    stack: TechKey[];
    link?: string;
    gitHub: string;
};

export const projects: Project[] = [
    {
        name: "DevBurger",
        description: "Sistema de pedidos para hamburgueria: interface em React e API Node.js com PostgreSQL, MongoDB e Docker.",
        category: "fullstack",
        image: images.DevBurgerImage,
        stack: ["react", "styled", "node", "prisma", "docker", "mongodb", "postgres", "sequelize"],
        gitHub: "https://github.com/gabriellima11/devburger-interface",
    },
    {
        name: "Real Time Chat",
        description: "Chat em tempo real com comunicação via WebSocket entre front-end React e servidor Node.js.",
        category: "fullstack",
        image: images.RealTimeChat,
        stack: ["react", "styled", "node", "socket"],
        gitHub: "https://github.com/gabriellima11/real-time-chat",
    },
    {
        name: "TaskOps",
        description: "Gerenciador de tarefas fullstack com interface em React e API Node.js persistindo dados no MongoDB.",
        category: "fullstack",
        image: images.TaskOps,
        stack: ["react", "styled", "node", "mongodb"],
        gitHub: "https://github.com/gabriellima11/TaskOps-interface",
    },
    {
        name: "Registrar Usuários API",
        description: "Cadastro de usuários com front-end em React consumindo uma API Node.js com Prisma e MongoDB.",
        category: "fullstack",
        image: images.RegisterUser,
        stack: ["react", "styled", "node", "prisma", "mongodb"],
        gitHub: "https://github.com/gabriellima11/project-register-user",
    },
    {
        name: "Pomodoro App",
        description: "Timer Pomodoro para foco e produtividade, construído com Next.js e Tailwind CSS.",
        category: "front-end",
        image: images.PomodoroApp,
        stack: ["next", "tailwind"],
        link: "https://pomodoro-app-gfldev.vercel.app",
        gitHub: "https://github.com/gabriellima11/pomodoro-app",
    },
    {
        name: "Snap Clima",
        description: "Consulta de previsão do tempo por cidade consumindo uma API de clima, em HTML, CSS e JavaScript puro.",
        category: "front-end",
        image: images.SnapClima,
        stack: ["html", "css", "javascript"],
        link: "https://snap-clima.netlify.app",
        gitHub: "https://github.com/gabriellima11/snapclima",
    },
    {
        name: "Procura CEP",
        description: "Busca de endereço a partir do CEP, consumindo uma API pública de consulta.",
        category: "front-end",
        image: images.CepImage,
        stack: ["react", "javascript", "styled"],
        link: "https://search-cep-gfl.vercel.app",
        gitHub: "https://github.com/gabriellima11/search-cep",
    },
    {
        name: "Rick and Morty",
        description: "Catálogo de personagens da série consumindo a Rick and Morty API.",
        category: "front-end",
        image: images.RickAndMortyImage,
        stack: ["react", "javascript", "styled"],
        link: "https://rick-and-morty-api-gfl.vercel.app",
        gitHub: "https://github.com/gabriellima11/rick-and-morty-api",
    },
];
