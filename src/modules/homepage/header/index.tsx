import { ModeToggle } from "@/components/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import { Link } from 'react-scroll';

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full h-auto p-4 bg-white dark:bg-bgheader shadow-md shadow-black dark:shadow-purple-900 fixed z-10">
            <div>
                <h1 className="text-4xl font-bold cursor-pointer"><span className="text-purple-800">GFL</span>DEV</h1>
            </div>

            <nav className="md:hidden">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-4">
                        <NavigationMenuItem>
                            <Link to='start' spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:border-b-2 border-black dark:border-purple-900">Início</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to='about-me' spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:border-b-2 border-black dark:border-purple-900">Sobre</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to='abilities' spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:border-b-2 border-black dark:border-purple-900">Habilidades</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:border-b-2 border-black dark:border-purple-900">Projetos</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            <div>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><Button className="mr-4 px-5 transition ease-in duration-300 hover:scale-110 dark:bg-purple-800 text-white">Contato</Button></Link>
                <ModeToggle />
            </div>
        </header >
    )
}