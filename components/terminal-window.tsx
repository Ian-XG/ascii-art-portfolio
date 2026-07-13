import type { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title, children, className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-md border border-border bg-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-foreground/25" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-foreground/45" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-foreground/70" aria-hidden="true" />
        <span className="ml-2 truncate text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}
