import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
    { to: "about-me", label: "sobre" },
    { to: "abilities", label: "stack" },
    { to: "projects", label: "projetos" },
    { to: "experiences", label: "experiência" },
    { to: "contact", label: "contato" },
]

const scrollProps = { spy: true, smooth: true, offset: -72, duration: 500 } as const

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
                scrolled || open
                    ? "border-border bg-background/75 backdrop-blur-xl"
                    : "border-transparent bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between gap-6">
                <Link
                    to="start"
                    {...scrollProps}
                    spy={false}
                    className="flex cursor-pointer items-baseline gap-2"
                    onClick={() => setOpen(false)}
                >
                    <span className="font-display text-xl font-bold tracking-tight">
                        gfl<span className="text-primary">.dev</span>
                    </span>
                    <span className="hidden font-mono text-xs text-muted-foreground sm:inline">~/fullstack</span>
                </Link>

                <nav className="hidden md:block" aria-label="Navegação principal">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    {...scrollProps}
                                    activeClass="!text-foreground after:!scale-x-100"
                                    className="relative cursor-pointer rounded-md px-3 py-2 font-mono text-[13px] text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/gabriellima11"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hidden size-9 items-center justify-center rounded-md border bg-background/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:inline-flex"
                    >
                        <FaGithub className="size-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/limaf-gabriel/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hidden size-9 items-center justify-center rounded-md border bg-background/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:inline-flex"
                    >
                        <FaLinkedinIn className="size-4" />
                    </a>
                    <ModeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex size-9 items-center justify-center rounded-md border bg-background/60 md:hidden"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                    >
                        {open ? <X className="size-4" /> : <Menu className="size-4" />}
                    </button>
                </div>
            </div>

            {open && (
                <nav className="border-t md:hidden" aria-label="Navegação mobile">
                    <ul className="container flex flex-col py-3">
                        {navItems.map((item, i) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    {...scrollProps}
                                    onClick={() => setOpen(false)}
                                    activeClass="!text-primary"
                                    className="flex cursor-pointer items-center gap-3 py-3 font-mono text-sm text-muted-foreground"
                                >
                                    <span className="text-xs text-primary/60">0{i + 1}</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}
