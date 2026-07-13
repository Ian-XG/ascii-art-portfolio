"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

/** Fixed grid layer that drifts with scroll at a fraction of the page speed,
    giving a subtle parallax depth. Tiled pattern → shifting background-position
    never leaves gaps. Sits behind all content. */
export function GridBackground() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Grid moves up ~0.35x as fast as the content scrolls.
  const bgY = useTransform(scrollY, (v) => `${v * -0.35}px`)

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 grid-lines"
      style={reduce ? undefined : { backgroundPositionY: bgY }}
    />
  )
}
