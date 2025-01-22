import FotoPerfil from '../../../../public/fotoperfil.png'

import { Button } from '@/components/ui/button'

import resume from '../../../../public/cv.pdf'

import { Link } from 'react-scroll';

export const Start = () => {
    return (
        <section id='start' className="w-full">
            <div className="h-screen flex justify-around items-center md:flex-col">
                <div className="md:mt-28">
                    <h2 className="text-5xl font-medium typewriter-text">Olá, eu sou o <br /><span className="text-purple-800">Gabriel Lima!</span></h2>
                    <h3 className="text-gray-500 font-normal text-xl md:text-center">Desenvolvedor FullStack</h3>
                    <div className='mt-4 flex gap-4 md:flex md:justify-center'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><Button className="rounded-full mr-4 px-5 transition ease-in duration-300 hover:scale-110 dark:bg-purple-800 text-white">Contato</Button></Link>
                        <Button className='w-1/3 rounded-full bg-transparent text-black dark:text-white border border-purple-800 hover:scale-110 transition ease-in duration-300'><a href={resume} download="CV Gabriel - FullStack">Baixar CV</a></Button>
                    </div>

                </div>
                <div >
                    <a href="https://github.com/gabriellima11" target='_blank'><img className='animate-updown md:mx-auto brightness-75 w-3/4 md:w-2/4 bg-gradient-to-tr from-purple-800 via-purple-850 to-purple-900 rounded-full cursor-pointer shadow-lg shadow-black dark:shadow-purple-950' src={FotoPerfil} alt="" /></a>
                </div>

            </div>
        </section>
    )
}