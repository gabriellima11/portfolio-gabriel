//ICONS
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";

//IMAGES
import RickAndMortyImage from '../../../../public/projects/rick-and-morty-api.png'
import CepImage from '../../../../public/projects/cep.png'
import SnapClima from '../../../../public/projects/snapclima.png'

const rickAndMorty = {
    name: "Rick and Morty API",
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

export const ProjectList = [rickAndMorty, cep, snapClima]