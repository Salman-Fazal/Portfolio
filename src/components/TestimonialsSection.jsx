import { testimonials } from '../data/portfolioData';

function TestimonialsSection() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">Testimonials</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
          Feedback from teams I have built with.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <blockquote className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">"{item.quote}"</blockquote>
              <figcaption className="mt-4">
                <p className="font-heading text-lg font-bold text-ink dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
