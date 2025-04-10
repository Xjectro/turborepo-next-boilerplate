import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-1 aria-invalid:ring-destructive-500",
  {
    variants: {
      variant: {
        default:
          "border border-primary-800 bg-primary-500 text-primary-foreground hover:bg-primary-700",
        destructive:
          "border border-destructive-800 bg-destructive-500 text-white hover:bg-destructive-700",
        outline:
          "border border-surface-300 bg-surface-100 hover:bg-surface-200 hover:ring-4 hover:ring-surface-300 hover:border-surface-500 text-typography-300 hover:text-typography-50",
        secondary:
          "bg-surface-200 border border-surface-300 hover:bg-surface-300 text-typography-300 hover:text-typography-50",
        ghost:
          "text-typography-500 hover:bg-ghost-500 hover:text-typography-50",
        link: "text-primary-500 underline-offset-4 hover:underline",
      },
      size: {
        sm: "gap-1.5 px-3 py-1.5 has-[>svg]:px-2.5",
        md: "px-4 py-2 has-[>svg]:px-3",
        lg: "py-3 px-6 has-[>svg]:px-4",
        icon: "p-2",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "square",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
