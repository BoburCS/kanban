import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

interface HeadingProps {
  children: ReactNode;
  variant: "xl" | "l" | "m" | "s";
  className?: string;
}

export default function Heading({
  children,
  className,
  variant,
}: HeadingProps) {
  return (
    <h1 className={cn(headingVariants({ variant }), className)}>{children}</h1>
  );
}

const headingVariants = cva(
  "font-PlusJakartaSans font-bold text-black dark:text-white",
  {
    variants: {
      variant: {
        xl: "text-2xl",
        l: "text-lg",
        m: "text-[15px]",
        s: "text-xs text-mediumGrey dark:text-mediumGrey tracking-[2.4px]",
      },
      defaultVariants: {
        variant: "xl",
      },
    },
  },
);
