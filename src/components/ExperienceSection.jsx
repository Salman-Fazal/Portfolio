import { experiences } from '../data/portfolioData';

function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 px-5 py-16 dark:bg-slate-900/60 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">Experience</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
          Proven delivery across real products and cross-functional teams.
        </h2>

        <div className="mt-8 space-y-4">
          {experiences.map((experience) => (
            <article key={experience.role} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-ink dark:text-white">{experience.role}</h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{experience.company}</p>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-electric dark:border-blue-900 dark:bg-blue-950/50">
                  {experience.duration}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span aria-hidden="true" className="mt-1 text-electric">
                      ●
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
