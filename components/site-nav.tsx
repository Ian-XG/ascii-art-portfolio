"use client"

import { motion, useReducedMotion } from "motion/react"

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
]

export function SiteNav() {
  const reduce = useReducedMotion()
  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <a href="#top" className="text-sm font-bold tracking-tight text-foreground">
          ~/ian-gonzalez
        </a>
        <ul className="-mx-1 flex items-center gap-3 overflow-x-auto text-sm sm:mx-0 sm:gap-6">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="group relative whitespace-nowrap px-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-foreground/50 transition-colors group-hover:text-foreground">
                  ./
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
