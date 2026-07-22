"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion, useScroll } from "motion/react"

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
]

export function SiteNav() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const [active, setActive] = useState<string>("")

  // Scroll-spy: highlight the nav link for whichever section owns the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

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
          {links.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative block whitespace-nowrap px-1 py-1 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/50 group-hover:text-foreground"
                    }`}
                  >
                    ./
                  </span>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-1 -bottom-px h-px bg-foreground"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Scroll-progress rule — the page's read-position, in the terminal's white. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground/70"
        style={{ scaleX: reduce ? 1 : scrollYProgress }}
      />
    </motion.header>
  )
}
