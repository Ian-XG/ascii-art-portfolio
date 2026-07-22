import { TerminalWindow } from "@/components/terminal-window"
import { Reveal } from "@/components/motion-primitives"

const groups = [
  {
    label: "languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "frontend",
    items: ["React", "Next.js", "Tailwind", "Vite"],
  },
  {
    label: "backend",
    items: ["Node.js", "Postgres", "Redis", "GraphQL"],
  },
  {
    label: "mobile",
    items: ["React Native", "Expo"],
  },
  {
    label: "security",
    items: ["Kali Linux", "Pen Testing", "Nmap"],
  },
  {
    label: "tooling",
    items: ["Docker", "Git", "Linux", "CI/CD"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="mb-6 text-sm text-muted-foreground">
          <span className="text-foreground">$</span> cat skills.json
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <TerminalWindow title="skills.json">
          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-sm text-foreground">
                  <span className="text-muted-foreground">{"//"}</span> {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-secondary px-2.5 py-1 text-sm text-foreground/90 transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  )
}
