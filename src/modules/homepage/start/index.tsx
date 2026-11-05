import type { CSSProperties } from 'react'
import { Link } from 'react-scroll'
import { ArrowRight, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { tech, marqueeTech, type Tech, type TechKey } from '@/data/tech'
import { projects } from '@/data/projects'

const floating: { id: TechKey; className: string; delay: string }[] = [
    { id: 'react', className: '-left-6 top-10', delay: '0s' },
    { id: 'typescript', className: '-right-5 top-24', delay: '1.2s' },
    { id: 'node', className: '-left-4 bottom-20', delay: '2.1s' },
    { id: 'next', className: '-right-6 bottom-8', delay: '0.6s' },
]

const totalTech = Object.keys(tech).length

const TechIconTile = ({ id, className, style }: { id: TechKey; className?: string; style?: CSSProperties }) => {
    const { icon: Icon, color, name }: Tech = tech[id]
    return (
        <div
            title={name}
            style={style}
            className={`flex size-12 items-center justify-center rounded-xl border bg-card/90 shadow-lg shadow-black/5 backdrop-blur ${className ?? ''}`}
        >
            <Icon className="size-6" style={{ color }} aria-hidden />
        </div>
    )
}

export const Start = () => {
    return (
        <section id="start" className="relative overflow-hidden pt-28 md:pt-36">
            {/* soft glow behind the hero */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

            <div className="container grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                        </span>
                        atualmente dev frontend @ South TI
                    </span>

                    <p className="mt-8 font-mono text-sm text-muted-foreground">
                        <span className="text-primary">~</span> $ whoami
                    </p>
                    <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        Gabriel <span className="text-gradient">Lima</span>
                    </h1>
                    <p className="mt-4 font-mono text-lg text-foreground/90 sm:text-xl">
                        <span className="text-primary">{'>'}</span> desenvolvedor fullstack
                        <span className="ml-1 inline-block h-5 w-2.5 translate-y-0.5 animate-blink bg-primary" />
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Construo interfaces rápidas e acessíveis e as APIs que dão vida a elas — de componentes
                        reutilizáveis em React e Next.js a back-ends em Node.js.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild size="lg" className="group rounded-full px-6">
                            <Link to="projects" smooth offset={-72} duration={500} className="cursor-pointer">
                                Ver projetos
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full bg-card/60 px-6 backdrop-blur">
                            <a href="/cv.pdf" download="CV Gabriel Lima - FullStack.pdf">
                                <Download className="mr-2 size-4" />
                                Baixar CV
                            </a>
                        </Button>
                    </div>

                    <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-6">
                        <div>
                            <dt className="font-mono text-xs text-muted-foreground">projetos</dt>
                            <dd className="mt-1 font-display text-2xl font-semibold">{projects.length}+</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs text-muted-foreground">tecnologias</dt>
                            <dd className="mt-1 font-display text-2xl font-semibold">{totalTech}+</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs text-muted-foreground">base</dt>
                            <dd className="mt-1 font-display text-2xl font-semibold">BR</dd>
                        </div>
                    </dl>
                </div>

                <div className="relative mx-auto w-full max-w-[290px] animate-in sm:max-w-sm fade-in zoom-in-95 duration-700 lg:max-w-md">
                    <div className="overflow-hidden rounded-3xl border bg-card/80 shadow-2xl shadow-primary/10 backdrop-blur">
                        <div className="flex items-center gap-2 border-b px-4 py-3">
                            <span className="size-2.5 rounded-full bg-red-400/80" />
                            <span className="size-2.5 rounded-full bg-yellow-400/80" />
                            <span className="size-2.5 rounded-full bg-emerald-400/80" />
                            <span className="ml-3 font-mono text-xs text-muted-foreground">gabriel.png</span>
                        </div>
                        <a
                            href="https://github.com/gabriellima11"
                            target="_blank"
                            rel="noreferrer"
                            className="relative block aspect-square bg-[radial-gradient(circle_at_50%_70%,hsl(var(--primary)/0.45),transparent_65%)]"
                        >
                            <img
                                src="/gabriel.png"
                                alt="Foto de Gabriel Lima"
                                className="absolute inset-0 size-full object-contain object-bottom"
                            />
                        </a>
                        <div className="flex items-center justify-between border-t px-4 py-3 font-mono text-xs text-muted-foreground">
                            <span>@gabriellima11</span>
                            <span className="text-primary">fullstack</span>
                        </div>
                    </div>

                    {floating.map((f) => (
                        <TechIconTile
                            key={f.id}
                            id={f.id}
                            className={`absolute animate-float ${f.className}`}
                            style={{ animationDelay: f.delay }}
                        />
                    ))}
                </div>
            </div>

            {/* infinite tech strip */}
            <div className="marquee-mask mt-24 overflow-hidden border-y bg-card/40 py-5 backdrop-blur">
                <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
                    {[...marqueeTech, ...marqueeTech].map((id, i) => {
                        const { icon: Icon, name, color }: Tech = tech[id]
                        return (
                            <span
                                key={i}
                                aria-hidden={i >= marqueeTech.length}
                                style={{ '--brand': color ?? 'currentColor' } as CSSProperties}
                                className="group flex items-center gap-2.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <Icon className="size-6 transition-colors group-hover:text-[color:var(--brand)]" />
                                {name}
                            </span>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
