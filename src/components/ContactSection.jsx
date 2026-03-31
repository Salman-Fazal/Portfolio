import { contacts } from '../data/portfolioData';

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-5 py-16 dark:bg-slate-900/60 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">Reach Out</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white">
            Let's connect and discuss opportunities.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Reach out for full-time roles, freelance collaborations, or product-focused frontend work. I usually respond within 24 hours.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${contacts.email}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-electric dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-electric dark:text-slate-100">
              {contacts.email}
            </p>
          </a>

          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-electric dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">LinkedIn</p>
            <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-electric dark:text-slate-100">
              View Profile
            </p>
          </a>

          <a
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-electric dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">GitHub</p>
            <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-electric dark:text-slate-100">
              Browse Repositories
            </p>
          </a>

          <a
            href={`https://wa.me/${contacts.phone.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-electric dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Phone / WhatsApp</p>
            <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-electric dark:text-slate-100">
              {contacts.phone}
            </p>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
