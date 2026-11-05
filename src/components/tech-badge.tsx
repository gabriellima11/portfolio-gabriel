import type { CSSProperties } from "react";
import { tech, type Tech, type TechKey } from "@/data/tech";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
    id: TechKey;
    size?: "sm" | "md";
    className?: string;
};

/** Icon + name chip. The icon picks up the brand color on hover. */
export const TechBadge = ({ id, size = "sm", className }: TechBadgeProps) => {
    const { name, icon: Icon, color }: Tech = tech[id];

    return (
        <span
            style={{ "--brand": color ?? "currentColor" } as CSSProperties}
            className={cn(
                "group/badge inline-flex items-center gap-2 rounded-md border bg-background/60 font-mono text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
                size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-2 text-sm",
                className
            )}
        >
            <Icon
                aria-hidden
                className={cn(
                    "shrink-0 transition-colors group-hover/badge:text-[color:var(--brand)]",
                    size === "sm" ? "size-3.5" : "size-5"
                )}
            />
            {name}
        </span>
    );
};
