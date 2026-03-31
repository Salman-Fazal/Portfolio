function CTASection() {
  return (
    <section className="px-5 pb-8 pt-2 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-gradient-to-r from-electric via-sky-500 to-cyan-500 px-6 py-10 text-center text-white shadow-glow">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
          Let's build something amazing together.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-50 md:text-base">
          If you need a frontend developer who can improve product quality, speed, and user trust, let us connect.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-bold text-electric transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default CTASection;
