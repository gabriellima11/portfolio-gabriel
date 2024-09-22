//ICONS
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents, SiPrisma, SiMongodb } from "react-icons/si";

//IMAGES
import RickAndMortyImage from '../../../../public/projects/rick-and-morty-api.png'
import CepImage from '../../../../public/projects/cep.png'
import SnapClima from '../../../../public/projects/snapclima.png'
import RegisterUser from '../../../../public/projects/register-user.png'


const registerUsers = {
    name: "Registrar Usuários API",
    image: RegisterUser,
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
    image: RickAndMortyImage,
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
    image: CepImage,
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
    image: SnapClima,
    icons: <>
        <FaHtml5 size={30} className='text-red-400' />
        <FaCss3Alt size={30} className='text-blue-500' />
        <IoLogoJavascript size={30} className='text-yellow-400' />
    </>,
    link: "https://snap-clima.netlify.app",
    gitHub: "https://github.com/gabriellima11/snapclima"
}

export const ProjectList = [registerUsers, rickAndMorty, cep, snapClima]