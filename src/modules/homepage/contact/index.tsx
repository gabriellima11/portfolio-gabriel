import { HiOutlineMail } from "react-icons/hi";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export const Contact = () =>{
    return (
        <section id="contact">
            <hr className="mb-20" />
            <h2 className="text-4xl font-medium text-center">Contatos</h2>
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="flex justify-center md:flex-col gap-16 text-center">

                    <div className="flex flex-col items-center transition ease-in duration-300 hover:scale-110 cursor-pointer">
                        <HiOutlineMail size={70} className= "bg-black p-2 rounded-full  text-white dark:text-purple-800" />
                        <p className="font-medium text-xl mt-3">E-mail</p>
                        <p className="text-gray-500">gabrielflimadev@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center transition ease-in duration-300 hover:scale-110 cursor-pointer">
                        <a href="https://www.linkedin.com/in/limaf-gabriel/" target="_blank"><FaLinkedin size={70} className= "bg-black p-2 rounded-full  text-white dark:text-purple-800" /></a>
                        <p className="font-medium text-xl mt-3">LinkedIn</p>
                        <p className="text-gray-500">@limaf-gabriel</p>
                    </div>

                    <div className="flex flex-col items-center transition ease-in duration-300 hover:scale-110 cursor-pointer">
                        <a href="https://github.com/gabriellima11" target="_blank"><FaSquareGithub size={70} className= "bg-black p-2 rounded-full text-white dark:text-purple-800" /></a>
                        <p className="font-medium text-xl mt-3">GitHub</p>
                        <p className="text-gray-500">@gabriellima11</p>
                    </div>

                </div>
            </div>
        </section>
    )
}