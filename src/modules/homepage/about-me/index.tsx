import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const facts = [
    { label: "nome", value: "Gabriel Lima" },
    { label: "atuação", value: "Desenvolvedor Fullstack" },
    { label: "foco", value: "React · Next.js · Node.js" },
    { label: "método", value: "Ágil / SCRUM" },
]

/* tiny syntax-highlight helpers for the code card */
const K = ({ children }: { children: string }) => <span className="text-primary">{children}</span>
const S = ({ children }: { children: string }) => <span className="text-emerald-500 dark:text-emerald-400">{children}</span>
const P = ({ children }: { children: string }) => <span className="text-sky-600 dark:text-sky-300">{children}</span>

export const AboutMe = () => {
    return (
        <section id="about-me" className="py-24 md:py-32">
            <div className="container">
                <SectionHeading index="01" title="Sobre mim" subtitle="quem está por trás do código" />

                <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
                    <Reveal className="min-w-0 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        <p>
                            Sou <strong className="font-medium text-foreground">Desenvolvedor FullStack</strong> com
                            experiência em diversas tecnologias. Tenho uma verdadeira paixão por criar{" "}
                            <strong className="font-medium text-foreground">componentes reutilizáveis e eficientes</strong>,
                            sempre buscando melhorar a experiência do usuário e a performance das aplicações.
                        </p>
                        <p>
                            Possuo conhecimento em gerenciamento de projetos com{" "}
                            <strong className="font-medium text-foreground">metodologias ágeis</strong>, o que facilita a
                            colaboração em equipe e a entrega de soluções de qualidade.
                        </p>
                        <p>
                            Comprometido com a evolução constante, busco sempre aprender novas ferramentas e técnicas que
                            me mantenham alinhado às melhores práticas do mercado.
                        </p>

                        <dl className="!mt-10 divide-y border-y font-mono text-sm">
                            {facts.map((f) => (
                                <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 py-3">
                                    <dt className="text-muted-foreground/70">{f.label}</dt>
                                    <dd className="text-foreground">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    <Reveal delay={150} className="min-w-0">
                        <div className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-black/5">
                            <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-3">
                                <span className="size-2.5 rounded-full bg-red-400/80" />
                                <span className="size-2.5 rounded-full bg-yellow-400/80" />
                                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                                <span className="ml-3 font-mono text-xs text-muted-foreground">about.ts</span>
                            </div>
                            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
                                <code>
                                    <span className="text-muted-foreground/60">{"// "}olá, mundo 👋</span>{"\n"}
                                    <K>const</K> dev = {"{"}{"\n"}
                                    {"  "}<P>nome</P>: <S>"Gabriel Lima"</S>,{"\n"}
                                    {"  "}<P>cargo</P>: <S>"Desenvolvedor Fullstack"</S>,{"\n"}
                                    {"  "}<P>frontend</P>: [<S>"React"</S>, <S>"Next.js"</S>, <S>"TypeScript"</S>],{"\n"}
                                    {"  "}<P>backend</P>: [<S>"Node.js"</S>, <S>"PHP"</S>],{"\n"}
                                    {"  "}<P>bancos</P>: [<S>"PostgreSQL"</S>, <S>"MongoDB"</S>],{"\n"}
                                    {"  "}<P>aprendendo</P>: <K>true</K>,{"\n"}
                                    {"}"};{"\n"}
                                    {"\n"}
                                    <K>export default</K> dev;
                                </code>
                            </pre>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
