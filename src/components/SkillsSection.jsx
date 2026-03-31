import { skillGroups } from '../data/portfolioData';

function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-50 px-5 py-16 dark:bg-slate-900/60 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">Skills</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
          Tech stack focused on speed, maintainability, and product growth.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-heading text-xl font-bold text-ink dark:text-white">{group.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
