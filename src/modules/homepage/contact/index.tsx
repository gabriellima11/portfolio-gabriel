import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const EMAIL = "gabrielflimadev@gmail.com";

const socials = [
    { label: "LinkedIn", handle: "/in/limaf-gabriel", href: "https://www.linkedin.com/in/limaf-gabriel/", icon: FaLinkedinIn },
    { label: "GitHub", handle: "@gabriellima11", href: "https://github.com/gabriellima11", icon: FaGithub },
];

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container">
                <SectionHeading index="05" title="Contato" subtitle="vamos conversar?" />

                <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                    <Reveal>
                        <div className="relative h-full overflow-hidden rounded-2xl border bg-card/70 p-8 backdrop-blur md:p-10">
                            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" />
                            <p className="font-mono text-xs uppercase tracking-widest text-primary">e-mail</p>
                            <h3 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                                Tem um projeto ou oportunidade em mente?
                            </h3>
                            <p className="mt-3 max-w-md text-muted-foreground">
                                Me mande uma mensagem — respondo assim que possível.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                >
                                    <Mail className="size-4" /> {EMAIL}
                                </a>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                                >
                                    {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
                                    {copied ? "copiado!" : "copiar"}
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid gap-5">
                        {socials.map((s, i) => (
                            <Reveal key={s.label} delay={(i + 1) * 80}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex h-full items-center gap-4 rounded-2xl border bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
                                >
                                    <span className="flex size-12 items-center justify-center rounded-xl border bg-background/60 transition-colors group-hover:border-primary/40 group-hover:text-primary">
                                        <s.icon className="size-5" />
                                    </span>
                                    <span className="flex-1">
                                        <span className="block font-medium">{s.label}</span>
                                        <span className="block font-mono text-xs text-muted-foreground">{s.handle}</span>
                                    </span>
                                    <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
