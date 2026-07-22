import { TerminalWindow } from "@/components/terminal-window"
import { Reveal } from "@/components/motion-primitives"

const facts = [
  { key: "role", value: "Founder, Workforce OS + Terminal Zero" },
  { key: "focus", value: "Full-stack web & mobile" },
  { key: "security", value: "Ethical hacking · Kali Linux" },
  { key: "stack", value: "Next.js · React Native" },
  { key: "status", value: "building" },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="mb-6 text-sm text-muted-foreground">
          <span className="text-foreground">$</span> cat about.md
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <TerminalWindow title="about.md — readme">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="leading-relaxed text-foreground">
                I&apos;m Ian Gonzalez, a full-stack developer and the founder of
                Workforce OS and Terminal Zero. I build reliable products end to
                end — from database and API design to polished web and mobile
                interfaces.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I work primarily with Next.js on the web and React Native on
                mobile. I&apos;m also an ethical hacker, using Kali Linux for
                penetration testing and security research to build software
                that&apos;s resilient by design.
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              {facts.map((fact) => (
                <li key={fact.key} className="flex gap-2">
                  <span className="text-foreground">{fact.key}:</span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    {fact.key === "status" && (
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
                      </span>
                    )}
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  )
}
