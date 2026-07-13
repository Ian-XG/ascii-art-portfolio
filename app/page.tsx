import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-dvh overflow-x-clip grid-lines">
      <SiteNav />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {[
              { label: "instagram", href: "https://instagram.com/iangonzalez.ig" },
              { label: "github", href: "https://github.com" },
              { label: "linkedin", href: "https://linkedin.com" },
              { label: "x", href: "https://x.com" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="text-foreground/50">./</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            <span className="text-foreground">$</span> echo &quot;built with next.js · ©{" "}
            {new Date().getFullYear()} Ian Gonzalez&quot;
          </p>
        </div>
      </footer>
    </main>
  )
}
