import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** delay in ms, useful for staggering lists */
    delay?: number;
    as?: "div" | "li" | "article";
};

/** Fades + slides its content in the first time it enters the viewport. */
export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const style: CSSProperties = { transitionDelay: `${delay}ms` };

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Tag ref={ref as any} data-visible={visible} style={style} className={cn("reveal", className)}>
            {children}
        </Tag>
    );
};
