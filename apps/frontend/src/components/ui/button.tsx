import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-light",
        outline: "border border-brand bg-white text-brand hover:bg-brand/5",
        ghost: "bg-transparent text-brand hover:bg-brand/10"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-3",
        lg: "h-14 px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
);

Button.displayName = "Button";
