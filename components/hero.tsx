"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"

const COMMAND = "whoami"
const ease = [0.16, 1, 0.3, 1] as const
// next/image doesn't prefix basePath onto unoptimized static-export src,
// so resolve the asset path ourselves for GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/** Types out the shell command one character at a time. */
function useTyped(text: string, enabled: boolean, speed = 85) {
  const [out, setOut] = useState(enabled ? "" : text)
  useEffect(() => {
    if (!enabled) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, enabled, speed])
  return out
}

export function Hero() {
  const reduce = useReducedMotion()
  const typed = useTyped(COMMAND, !reduce)
  const done = typed === COMMAND

  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 min-w-0 md:order-1">
          <p className="mb-5 text-sm text-muted-foreground">
            <span className="text-foreground">guest@ian</span>
            <span className="text-muted-foreground">:~$</span>{" "}
            <span className={`text-foreground ${!done ? "caret" : ""}`}>{typed}</span>
          </p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: reduce ? 0 : 0.6 }}
          >
            <h1 className="text-balance text-[2.6rem] font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
              Ian Gonzalez
            </h1>
            <p className="mt-3 text-base text-foreground/90 sm:text-lg">
              <span className="text-muted-foreground">&gt;</span>{" "}
              Full-Stack Dev <span className="text-muted-foreground">·</span> Ethical Hacker
              <span className="caret text-foreground" aria-hidden="true" />
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Founder of{" "}
              <a
                href="https://workforce-os.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Workforce OS
              </a>{" "}
              and{" "}
              <a
                href="https://terminal-zero-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Terminal Zero
              </a>
              . I build for web and mobile with Next.js and React Native, and work
              as an ethical hacker in Kali Linux.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={buttonVariants({ size: "lg" })}>
                view_projects
              </a>
              <a
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                get_in_touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex min-w-0 justify-center md:order-2"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <figure className="w-full max-w-[340px] overflow-hidden rounded-md border border-border bg-card shadow-[0_0_0_1px_oklch(1_0_0/6%),0_24px_60px_-24px_oklch(0_0_0/80%)]">
            <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-foreground/25" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-foreground/45" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-foreground/70" aria-hidden="true" />
              <span className="ml-2 truncate text-xs text-muted-foreground">
                portrait.ascii
              </span>
            </div>
            <div className="p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/portrait.png`}
                alt="Portrait of Ian Gonzalez rendered in dithered black-and-white ASCII style"
                width={620}
                height={600}
                className="h-auto w-full rounded-sm grayscale contrast-[1.08]"
              />
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
