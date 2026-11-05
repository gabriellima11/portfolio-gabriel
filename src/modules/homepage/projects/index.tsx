import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { TechBadge } from '@/components/tech-badge';
import { projects, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

const filters: { value: ProjectCategory | 'todos'; label: string }[] = [
    { value: 'todos', label: 'todos' },
    { value: 'fullstack', label: 'fullstack' },
    { value: 'front-end', label: 'front-end' },
];

export const Projects = () => {
    const [filter, setFilter] = useState<ProjectCategory | 'todos'>('todos');

    const visible = projects.filter((p) => filter === 'todos' || p.category === filter);

    return (
        <section id="projects" className="py-24 md:py-32">
            <div className="container">
                <SectionHeading index="03" title="Projetos" subtitle="o que andei construindo" />

                <Reveal className="mb-10 flex flex-wrap gap-2" >
                    {filters.map((f) => {
                        const count = projects.filter((p) => f.value === 'todos' || p.category === f.value).length;
                        const active = filter === f.value;
                        return (
                            <button
                                key={f.value}
                                type="button"
                                onClick={() => setFilter(f.value)}
                                aria-pressed={active}
                                className={cn(
                                    'rounded-full border px-4 py-1.5 font-mono text-xs transition-colors',
                                    active
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                                )}
                            >
                                {f.label} <span className="opacity-60">· {count}</span>
                            </button>
                        );
                    })}
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((project, i) => (
                        <Reveal key={project.name} as="article" delay={(i % 3) * 80}>
                            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                                <div className="relative aspect-video overflow-hidden border-b">
                                    <img
                                        src={project.image}
                                        alt={`Captura de tela do projeto ${project.name}`}
                                        loading="lazy"
                                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute left-3 top-3 rounded-md border bg-background/80 px-2 py-0.5 font-mono text-[11px] backdrop-blur">
                                        <span className="text-primary">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                                        <span className="text-muted-foreground"> · {project.category}</span>
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="font-display text-xl font-semibold tracking-tight">{project.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {project.stack.map((id) => (
                                            <TechBadge key={id} id={id} />
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center gap-4 pt-5 font-mono text-sm">
                                        <a
                                            href={project.gitHub}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <FaGithub className="size-4" /> código
                                        </a>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                                            >
                                                demo <ArrowUpRight className="size-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-10 text-center">
                    <a
                        href="https://github.com/gabriellima11?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        ver todos no GitHub <ArrowUpRight className="size-4" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
};
