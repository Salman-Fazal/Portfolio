import { useMemo, useState } from 'react';
import { projects } from '../data/portfolioData';

const filterOptions = ['All', 'Performance', 'Debugging', 'UX Upgrade', 'Data Flow'];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.badge === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="px-5 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">Projects</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
              Business-focused frontend projects with measurable impact.
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-electric hover:text-electric dark:border-slate-700 dark:text-slate-100"
          >
            Discuss Your Project
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setActiveFilter(option)}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                activeFilter === option
                  ? 'border-electric bg-electric text-white'
                  : 'border-slate-300 text-slate-600 hover:border-electric hover:text-electric dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{project.category}</p>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
                  {project.badge}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">{project.title}</h3>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  <span className="font-bold text-ink dark:text-white">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="font-bold text-ink dark:text-white">Solution:</span> {project.solution}
                </p>
                <p>
                  <span className="font-bold text-ink dark:text-white">Impact:</span> {project.impact}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-electric px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-electric hover:text-electric dark:border-slate-700 dark:text-slate-200"
                >
                  GitHub
                </a>
              </div>
              <p className="sr-only">{project.imageAlt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
