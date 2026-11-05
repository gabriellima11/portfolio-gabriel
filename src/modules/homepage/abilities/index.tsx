import type { CSSProperties } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stackGroups, tech, type Tech } from "@/data/tech";

export const Abilities: React.FC = () => {
    return (
        <section id="abilities" className="py-24 md:py-32">
            <div className="container">
                <SectionHeading index="02" title="Stack" subtitle="ferramentas que uso no dia a dia" />

                <div className="gap-5 md:columns-2">
                    {stackGroups.map((group, gi) => (
                        <Reveal key={group.title} delay={gi * 80} className="mb-5 break-inside-avoid">
                            <div className="group/card h-full rounded-2xl border bg-card/70 p-5 sm:p-6 backdrop-blur transition-colors hover:border-primary/40">
                                <div className="mb-5 flex items-center justify-between font-mono text-xs">
                                    <span className="uppercase tracking-widest text-primary">{group.title}</span>
                                    <span className="text-muted-foreground">
                                        {group.command} · {String(group.items.length).padStart(2, "0")}
                                    </span>
                                </div>

                                <ul className="grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))] gap-3">
                                    {group.items.map((id) => {
                                        const { icon: Icon, name, color }: Tech = tech[id];
                                        return (
                                            <li
                                                key={id}
                                                style={{ "--brand": color ?? "hsl(var(--foreground))" } as CSSProperties}
                                                className="group flex items-center gap-3 rounded-xl border bg-background/60 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                                            >
                                                <Icon
                                                    aria-hidden
                                                    className="size-6 shrink-0 text-[color:var(--brand)] transition-transform group-hover:scale-110"
                                                />
                                                <span className="text-sm font-medium leading-tight">{name}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
