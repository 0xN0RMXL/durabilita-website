import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "motion/react"

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-graphite-black text-white hover:bg-neural-orange border border-transparent shadow-md hover:shadow-lg transition-all",
      secondary: "bg-white text-graphite-black border border-medical-gray hover:shadow-lg clinical-shadow transition-all group",
      outline: "bg-transparent text-graphite-black border border-medical-gray hover:border-graphite-black",
      ghost: "bg-transparent text-deep-neural-gray hover:text-graphite-black hover:bg-black/5"
    }

    const sizes = {
      sm: "h-9 px-6 text-[10px] font-semibold tracking-widest uppercase",
      md: "h-12 px-8 text-[11px] font-semibold tracking-widest uppercase",
      lg: "h-14 px-10 text-[11px] font-bold tracking-widest uppercase"
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neural-orange focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
