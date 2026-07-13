import { TerminalWindow } from "@/components/terminal-window"
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives"

const projects = [
  {
    name: "workforce-os",
    description:
      "A workforce management platform for teams — scheduling, operations, and mobile access. Founder and full-stack developer.",
    stack: ["Next.js", "React Native", "Postgres"],
    link: "https://workforce-os.app",
    linkLabel: "→ visit workforce-os.app",
  },
  {
    name: "terminal-zero",
    description:
      "A terminal-inspired product I founded and built end to end, from concept to shipped app.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://terminal-zero-sigma.vercel.app/",
    linkLabel: "→ visit terminal-zero",
  },
  {
    name: "security-tooling",
    description:
      "Penetration testing workflows and security research using Kali Linux to harden applications against real-world threats.",
    stack: ["Kali Linux", "Bash", "Python"],
    link: "#",
    linkLabel: "→ learn more",
  },
  {
    name: "design-system",
    description:
      "A themeable component library with accessible primitives and documentation.",
    stack: ["React", "Storybook", "CSS"],
    link: "#",
    linkLabel: "→ view source",
  },
]

type Project = (typeof projects)[number]

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <TerminalWindow title={`${project.name}/`} className={className}>
      <div className="flex h-full flex-col">
        <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 text-xs text-foreground/90"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {project.linkLabel}
        </a>
      </div>
    </TerminalWindow>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="mb-6 text-sm text-muted-foreground">
          <span className="text-foreground">$</span> ls ./projects
        </h2>
      </Reveal>

      {/* Mobile: sticky "stacked windows" — each card pins under the nav and the
          next scrolls up to overlay it, leaving the terminal titlebar peeking.
          No transformed ancestors here, or position:sticky would break. */}
      <ul className="space-y-4 sm:hidden">
        {projects.map((project, i) => (
          <li
            key={project.name}
            className="sticky"
            style={{ top: `calc(4.75rem + ${i * 0.9}rem)` }}
          >
            <ProjectCard
              project={project}
              className="shadow-[0_-12px_44px_-16px_oklch(0_0_0/85%),0_10px_30px_-18px_oklch(0_0_0/80%)]"
            />
          </li>
        ))}
        {/* trailing space so the last card can settle before the next section */}
        <li aria-hidden="true" className="h-8" />
      </ul>

      {/* Desktop: two-column grid with staggered reveal + hover lift. */}
      <Stagger className="hidden gap-5 sm:grid sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem
            key={project.name}
            className="group h-full transition-transform duration-300 hover:-translate-y-1"
          >
            <ProjectCard
              project={project}
              className="h-full transition-colors duration-300 group-hover:border-foreground/30"
            />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
