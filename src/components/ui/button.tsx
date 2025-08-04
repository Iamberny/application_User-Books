import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }