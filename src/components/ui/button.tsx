import { ReactNode, ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "l" | "m" | "s";
    className?: string;
}

export default function Button({
    children,
    className,
    variant,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(headingVariants({ variant }), className)}
            {...props}
        >
            {children}
        </button>
    );
}

const headingVariants = cva(
    "font-PlusJakartaSans font-bold rounded-full px-6 py-4 text-black dark:text-white",
    {
        variants: {
            variant: {
                primary: "bg-primary rounded-full hover:bg-primaryHover",
                l: "text-lg",
                m: "text-[15px]",
                s: "text-xs text-mediumGrey dark:text-mediumGrey tracking-[2.4px]",
            },
            defaultVariants: {
                variant: "primary",
            },
        },
    },
);
