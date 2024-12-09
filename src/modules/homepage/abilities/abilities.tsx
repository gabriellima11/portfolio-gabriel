//ICONS
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaSquareGithub, FaDocker } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiPrisma, SiTypescript, SiShadcnui, SiSequelize, SiMongodb, SiPostgresql, SiSocketdotio } from "react-icons/si";

import { ReactNode } from 'react';

interface Ability {
    name: string;
    image: ReactNode; // Pode ser JSX.Element se preferir, mas ReactNode é mais geral
}

export const abilitiesIcons: Ability[] = [
    {
        name: 'HTML',
        image: <FaHtml5 className="size-20"/>
    },
    {
        name: 'CSS',
        image: <FaCss3Alt className="size-20"/>
    },
    {
        name: 'JavaScript',
        image: <IoLogoJavascript className="size-20"/>
    },
    {
        name: 'Typescript',
        image: <SiTypescript className="size-20"/>
    },
    {
        name: 'React',
        image: <FaReact className="size-20"/>
    },
    {
        name: 'Nodejs',
        image: <FaNodeJs className="size-20"/>
    },
    {
        name: 'Prisma',
        image: <SiPrisma className="size-20"/>
    },
    {
        name: 'MongoDB',
        image: <SiMongodb className="size-20"/>
    },
    {
        name: 'Postgres',
        image: <SiPostgresql className="size-20"/>
    },
    {
        name: 'Docker',
        image: <FaDocker className="size-20"/>
    },
    {
        name: 'Prisma',
        image: <SiPrisma className="size-20"/>
    },
    {
        name: 'Sequelize',
        image: <SiSequelize className="size-20"/>
    },
    {
        name: 'WebSocket',
        image: <SiSocketdotio className="size-20"/>
    },
    {
        name: 'Tailwind',
        image: <RiTailwindCssFill className="size-20"/>
    },
    {
        name: 'CSS-in-JS',
        image: <SiStyledcomponents className="size-20"/>
    },
    {
        name: 'Shadcn/ui',
        image: <SiShadcnui className="size-16"/>
    },
    {
        name: 'GitHub',
        image: <FaSquareGithub className="size-20"/>
    },
    {
        name: 'Git',
        image: <FaGitAlt className="size-20"/>
    },
    

]