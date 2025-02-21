//ICONS
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { SiStyledcomponents, SiPrisma, SiMongodb, SiPostgresql, SiSequelize, SiSocketdotio  } from "react-icons/si";

import images from '../../../assets/index.ts'

const registerUsers = {
    name: "Registrar Usuários API",
    image: images.RegisterUser,
    icons: <>
        <FaReact size={30} className='text-cyan-400' />
        <SiStyledcomponents size={30} className='text-pink-500' />
        <FaNodeJs size={30} className='text-green-500'/>
        <SiPrisma size={30} className='text-white'/>
        <SiMongodb size={30} className='text-green-400' />
    </>,
    link: "",
    gitHub: "https://github.com/gabriellima11/project-register-user"
}

const rickAndMorty = {
    name: "Rick and Morty API Page",
    image: images.RickAndMortyImage,
    icons: <>
        <FaReact size={30} className='text-cyan-400' />
        <IoLogoJavascript size={30} className='text-yellow-400' />
        <SiStyledcomponents size={30} className='text-pink-500' />
    </>,
    link: "https://rick-and-morty-api-gfl.vercel.app",
    gitHub: "https://github.com/gabriellima11/rick-and-morty-api"
}

const cep = {
    name: "Procura CEP",
    image: images.CepImage,
    icons: <>
        <FaReact size={30} className='text-cyan-400' />
        <IoLogoJavascript size={30} className='text-yellow-400' />
        <SiStyledcomponents size={30} className='text-pink-500' />
    </>,
    link: "https://search-cep-gfl.vercel.app",
    gitHub: "https://github.com/gabriellima11/search-cep"
}

const snapClima = {
    name: "Snap Clima",
    image: images.SnapClima,
    icons: <>
        <FaHtml5 size={30} className='text-red-400' />
        <FaCss3Alt size={30} className='text-blue-500' />
        <IoLogoJavascript size={30} className='text-yellow-400' />
    </>,
    link: "https://snap-clima.netlify.app",
    gitHub: "https://github.com/gabriellima11/snapclima"
}

const devBurger = {
    name: "DevBurger",
    image: images.DevBurgerImage,
    icons: <>
        <FaReact size={30} className='text-cyan-400' />
        <SiStyledcomponents size={30} className='text-pink-500' />
        <FaNodeJs size={30} className='text-green-500'/>
        <SiPrisma size={30} className='text-white'/>
        <FaDocker size={30} className='text-blue-400'/>
        <SiMongodb size={30} className='text-green-400' />
        <SiPostgresql size={30} className='text-cyan-800' />
        <SiSequelize size={30} className='text-blue-600'/>
    </>,
    link: "",
    gitHub: "https://github.com/gabriellima11/devburger-interface"
}

const realTimeChat = {
    name: "Real Time Chat",
    image: images.RealTimeChat,
    icons: <>
        <FaReact size={30} className='text-cyan-400' />
        <SiStyledcomponents size={30} className='text-pink-500' />
        <FaNodeJs size={30} className='text-green-500'/>
        <SiSocketdotio size={30} className='text-gray-700'/>
    </>,
    link: "",
    gitHub: "https://github.com/gabriellima11/real-time-chat"
}

const pomodoroApp = {
    name: "Pomodoro App",
    image: images.PomodoroApp,
    icons: <>
        <RiNextjsFill size={30} className='text-gray-400' />
        <RiTailwindCssFill size={30} className='text-pink-500' />
    </>,
    link: "https://pomodoro-app-gfldev.vercel.app",
    gitHub: "https://github.com/gabriellima11/pomodoro-app"
}

export const ProjectList = [devBurger, realTimeChat, registerUsers, pomodoroApp, snapClima, cep, rickAndMorty]