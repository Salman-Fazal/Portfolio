function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl bg-gradient-to-br from-electric to-sky-500 p-1">
          <div className="flex h-full min-h-56 items-center justify-center rounded-[15px] bg-slate-950 text-center text-white">
            <p className="font-heading text-4xl font-extrabold">2+ YOE</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">About Me</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
            I build frontend systems that are fast, reliable, and easy for users to trust.
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            I focus on problem-solving over flashy visuals: diagnosing hard bugs, reducing UI friction, and translating product requirements into clean, scalable React architecture. My work blends debugging depth with strong UI/UX decisions.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Debugging First Mindset</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Identified and resolved complex state and rendering bugs across production products.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">UI/UX Impact</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Improved clarity and usability with responsive patterns, layout refinements, and interaction polishing.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Real-World Delivery</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Shipped business-critical features in food-tech, SaaS, and enterprise platforms.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Partnered with product, backend, and QA to deliver stable releases with reduced rework.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
