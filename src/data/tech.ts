import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDocker, FaPhp, FaGitAlt, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
    SiJavascript, SiTypescript, SiJquery, SiShadcnui, SiSequelize, SiMongodb,
    SiPostgresql, SiSocketdotio, SiStyledcomponents, SiPrisma, SiExpress,
    SiDrizzle, SiVitest, SiVercel,
} from "react-icons/si";

export type Tech = {
    name: string;
    icon: IconType;
    /** brand color — omitted for monochrome logos (they follow the text color) */
    color?: string;
};

export const tech = {
    html: { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    css: { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    jquery: { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    react: { name: "React", icon: FaReact, color: "#61DAFB" },
    next: { name: "Next.js", icon: RiNextjsFill },
    tailwind: { name: "Tailwind", icon: RiTailwindCssFill, color: "#38BDF8" },
    bootstrap: { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    styled: { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
    shadcn: { name: "shadcn/ui", icon: SiShadcnui },
    node: { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    express: { name: "Express", icon: SiExpress },
    php: { name: "PHP", icon: FaPhp, color: "#777BB4" },
    socket: { name: "Socket.io", icon: SiSocketdotio },
    prisma: { name: "Prisma", icon: SiPrisma },
    sequelize: { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
    mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    drizzle: { name: "Drizzle ORM", icon: SiDrizzle, color: "#C5F74F" },
    vitest: { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
    vercel: { name: "Vercel", icon: SiVercel },
    docker: { name: "Docker", icon: FaDocker, color: "#2496ED" },
    git: { name: "Git", icon: FaGitAlt, color: "#F05032" },
    github: { name: "GitHub", icon: FaGithub },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;

export const stackGroups: { title: string; command: string; items: TechKey[] }[] = [
    {
        title: "Front-end",
        command: "interfaces",
        items: ["html", "css", "javascript", "typescript", "react", "next", "jquery", "tailwind", "bootstrap", "styled", "shadcn"],
    },
    {
        title: "Back-end",
        command: "apis & servidores",
        items: ["node", "express", "php", "socket"],
    },
    {
        title: "Banco de dados",
        command: "dados & ORMs",
        items: ["postgres", "mongodb", "prisma", "sequelize", "drizzle"],
    },
    {
        title: "Ferramentas",
        command: "workflow",
        items: ["git", "github", "docker", "vitest", "vercel"],
    },
];

/** order of the icons in the scrolling strip under the hero */
export const marqueeTech: TechKey[] = [
    "react", "next", "typescript", "javascript", "node", "tailwind", "postgres",
    "mongodb", "docker", "prisma", "php", "jquery", "git", "socket", "html", "css",
];
