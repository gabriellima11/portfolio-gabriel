import { Reveal } from "./reveal";

type SectionHeadingProps = {
    index: string;
    title: string;
    subtitle: string;
};

export const SectionHeading = ({ index, title, subtitle }: SectionHeadingProps) => (
    <Reveal className="mb-12 md:mb-16">
        <p className="font-mono text-sm text-primary">
            <span className="text-muted-foreground">{index} ·</span> {title.toLowerCase()}
        </p>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
            <span className="text-primary">.</span>
        </h2>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{">"}</span> {subtitle}
        </p>
    </Reveal>
);
