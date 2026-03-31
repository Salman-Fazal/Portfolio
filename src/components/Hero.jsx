import React from "react";
import cvFile from "../assets/M_Salman_Fazal_Resume.pdf";

const  Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pt-24"
    >
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.2),_transparent_45%),radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_45%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Content */}
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-electric dark:border-blue-900 dark:bg-blue-950/50">
            Available for frontend roles
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-ink dark:text-white md:text-5xl lg:text-6xl">
            Frontend Developer who turns complex ideas into high-converting
            product experiences.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            I am M Salman Fazal, a React-focused Frontend Developer with 2+
            years of experience shipping production applications. I specialize
            in responsive UI, debugging difficult issues, and improving
            performance that directly impacts user adoption.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            
            {/* Contact */}
            <a
              href="#contact"
              className="rounded-lg bg-electric px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Let's Talk
            </a>

            <a
              href={cvFile}
              download
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-electric hover:text-electric dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Download CV
            </a>

          </div>
        </div>

        {/* Right Code Card */}
        <div className="animate-floaty rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-700">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-auto text-xs font-semibold text-slate-500">
              developer-profile.tsx
            </span>
          </div>

          <pre className="overflow-x-auto text-xs leading-7 text-slate-700 dark:text-slate-300">
            <code>
{`const developer = {
  name: "M Salman Fazal",
  role: "Frontend Developer",
  experience: "2+ years",
  strengths: ["React", "Debugging", "UI/UX"],
  focus: "Business impact + clean code"
};`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;