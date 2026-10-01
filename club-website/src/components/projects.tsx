import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/site';
import SectionHeading from './section-heading';

const Projects = () => (
  <section id="projects" className="border-b-2 border-ink bg-peach py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Things we've built."
        lede="Designed, built, and run by students in the club."
      />

      <ul className="grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((project, i) => {
          const featured = i === 0;
          return (
            <li
              key={project.name}
              className={`sticker flex flex-col rounded-2xl p-7 sm:p-8 ${featured ? 'bg-ink text-cream lg:col-span-3' : 'bg-cream'}`}
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
                <span className={featured ? 'text-cream/60' : 'text-ink/60'}>{project.when}</span>
                {project.status && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-leaf px-3 py-1 text-cream">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cream" />
                    {project.status}
                  </span>
                )}
              </div>

              <h3
                className={`mt-4 font-display font-black ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}
              >
                {project.name}
              </h3>
              <p
                className={`mt-3 max-w-2xl leading-relaxed ${featured ? 'text-lg text-cream/80' : 'text-ink/75'}`}
              >
                {project.blurb}
              </p>

              <div className="mt-auto flex flex-col items-start gap-5 pt-7">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full border px-3 py-1 font-mono text-xs ${featured ? 'border-cream/40' : 'border-ink/40'}`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-ember"
                  >
                    {project.linkLabel ?? 'View on GitHub'}
                    <span className="sr-only">: {project.name}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Projects;
