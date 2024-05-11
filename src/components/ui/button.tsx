import { ReactNode, ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
}

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(headingVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}

const headingVariants = cva(
  "font-PlusJakartaSans font-bold rounded-full px-6 py-4 text-black dark:text-white",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white rounded-full hover:bg-primaryHover",
        secondary: "bg-slate-200 rounded-full",
        destructive: "px-4 py-2 bg-destructive text-white rounded-full",
      },
      defaultVariants: {
        variant: "primary",
      },
    },
  },
);
