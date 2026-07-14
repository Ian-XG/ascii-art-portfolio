import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives"

// next/image doesn't prefix basePath onto unoptimized static-export src,
// so resolve screenshot paths ourselves for GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

type Project = {
  name: string
  description: string
  stack: string[]
  link: string
  linkLabel: string
  address: string
  shot?: string
  command?: string
}

const projects: Project[] = [
  {
    name: "workforce-os",
    description:
      "A workforce management platform for teams — scheduling, operations, and mobile access. Founder and full-stack developer.",
    stack: ["Next.js", "React Native", "Postgres"],
    link: "https://workforce-os.app",
    linkLabel: "→ visit workforce-os.app",
    address: "workforce-os.app",
    shot: "/shots/workforce-os.png",
  },
  {
    name: "terminal-zero",
    description:
      "A terminal-inspired product I founded and built end to end, from concept to shipped app.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://terminal-zero-sigma.vercel.app/",
    linkLabel: "→ visit terminal-zero",
    address: "terminal-zero-sigma.vercel.app",
    shot: "/shots/terminal-zero.png",
  },
  {
    name: "security-tooling",
    description:
      "Penetration testing workflows and security research using Kali Linux to harden applications against real-world threats.",
    stack: ["Kali Linux", "Bash", "Python"],
    link: "#",
    linkLabel: "→ learn more",
    address: "kali@localhost",
    command: "$ nmap -sV --script vuln 10.0.0.5",
  },
  {
    name: "design-system",
    description:
      "A themeable component library with accessible primitives and documentation.",
    stack: ["React", "Storybook", "CSS"],
    link: "#",
    linkLabel: "→ view source",
    address: "~/design-system",
    command: "$ storybook dev -p 6006",
  },
]

function Preview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
      {project.shot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE}${project.shot}`}
          alt={`Screenshot of the ${project.name} website`}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-[filter,transform] duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
      ) : (
        // No live site — an honest monochrome terminal panel, not a fake screenshot.
        <div className="grid-lines flex h-full w-full items-center justify-center p-5">
          <code className="rounded border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm sm:text-sm">
            <span className="text-foreground">{project.command}</span>
            <span className="caret text-foreground" aria-hidden="true" />
          </code>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-md border border-border bg-card ${className ?? ""}`}
    >
      {/* Browser-style title bar showing the address. */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-foreground/25" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-foreground/45" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-foreground/70" aria-hidden="true" />
        <span className="ml-2 truncate text-xs text-muted-foreground">{project.address}</span>
      </div>

      <Preview project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
    </div>
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
          next scrolls up to overlay it. No transformed ancestors here, or
          position:sticky would break. */}
      <ul className="space-y-4 sm:hidden">
        {projects.map((project, i) => (
          <li
            key={project.name}
            className="group sticky"
            style={{ top: `calc(4.75rem + ${i * 0.9}rem)` }}
          >
            <ProjectCard
              project={project}
              className="shadow-[0_-12px_44px_-16px_oklch(0_0_0/85%),0_10px_30px_-18px_oklch(0_0_0/80%)]"
            />
          </li>
        ))}
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
