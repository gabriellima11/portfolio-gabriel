import React from 'react'
import { Briefcase } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TechBadge } from '@/components/tech-badge'
import { experiences } from '@/data/experiences'
import { cn } from '@/lib/utils'

export const Experiences: React.FC = () => {
	return (
		<section id="experiences" className="py-24 md:py-32">
			<div className="container">
				<SectionHeading index="04" title="Experiência" subtitle="trajetória até aqui" />

				<ol className="relative ml-3 border-l border-dashed md:ml-[188px]">
					{experiences.map((exp, i) => (
						<Reveal key={exp.id} as="li" delay={i * 80} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
							{/* marker */}
							<span
								className={cn(
									'absolute -left-[9px] top-1.5 flex size-4 items-center justify-center rounded-full border-2 bg-background',
									exp.current ? 'border-primary' : 'border-border'
								)}
							>
								{exp.current && <span className="size-1.5 rounded-full bg-primary" />}
							</span>

							{/* period on the left on desktop */}
							<p className="mb-2 font-mono text-xs text-muted-foreground md:absolute md:-left-[188px] md:top-1.5 md:mb-0 md:w-40 md:text-right">
								{exp.period}
							</p>

							<div className="rounded-2xl border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/40">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<div>
										<h3 className="font-display text-xl font-semibold tracking-tight">{exp.role}</h3>
										<p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
											<Briefcase className="size-3.5" /> {exp.company}
										</p>
									</div>
									{exp.current && (
										<span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
											atual
										</span>
									)}
								</div>
								<p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
								{exp.stack && (
									<div className="mt-4 flex flex-wrap gap-1.5">
										{exp.stack.map((id) => (
											<TechBadge key={id} id={id} />
										))}
									</div>
								)}
							</div>
						</Reveal>
					))}
				</ol>
			</div>
		</section>
	)
}

export default Experiences
