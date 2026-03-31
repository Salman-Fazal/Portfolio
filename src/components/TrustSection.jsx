import { companyLogos, stats } from '../data/portfolioData';

function TrustSection() {
  return (
    <section className="px-5 py-10 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4 dark:border-slate-800 dark:bg-slate-900">
          {stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-mist px-4 py-5 text-center dark:border-slate-700 dark:bg-slate-950">
              <p className="font-heading text-3xl font-extrabold text-electric">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {companyLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-400"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
