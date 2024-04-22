import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface TextProps {
    children: ReactNode;
    variant: "medium" | "bold";
    className?: string;
}

export default function Text({ children, className, variant }: TextProps) {
    return (
        <p className={cn(textVariants({ variant }), className)}>{children}</p>
    );
}

const textVariants = cva(
    "font-PlusJakartaSans font-medium text-darkGrey dark:text-white",
    {
        variants: {
            variant: {
                medium: "text-[13px] leading-[23px]",
                bold: "text-[12px] leading-[15px]",
            },
            defaultVariants: {
                variant: "medium",
            },
        },
    },
);
