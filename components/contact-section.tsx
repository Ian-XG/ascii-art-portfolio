import { TerminalWindow } from "@/components/terminal-window"
import { Reveal } from "@/components/motion-primitives"

const channels = [
  { key: "website", value: "workforce-os.app", href: "https://workforce-os.app" },
  { key: "email", value: "ian@workforce-os.app", href: "mailto:ian@workforce-os.app" },
  { key: "instagram", value: "@iangonzalez.ig", href: "https://instagram.com/iangonzalez.ig" },
  { key: "github", value: "github.com/ian-gonzalez", href: "https://github.com" },
  { key: "linkedin", value: "linkedin.com/in/ian-gonzalez", href: "https://linkedin.com" },
  { key: "x", value: "@iangonzalez", href: "https://x.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="mb-6 text-sm text-muted-foreground">
          <span className="text-foreground">$</span> ./contact.sh
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <TerminalWindow title="contact.sh">
          <p className="leading-relaxed text-foreground">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.key} className="min-w-0">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 items-center gap-2 rounded border border-border bg-secondary px-3 py-2.5 transition-colors hover:border-foreground/40"
                >
                  <span className="shrink-0 text-foreground">{channel.key}</span>
                  <span className="shrink-0 text-muted-foreground">→</span>
                  <span className="truncate text-muted-foreground">{channel.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </Reveal>
    </section>
  )
}
