import { navLinks } from '../data/portfolioData';

function Navbar({ }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight text-ink dark:text-white">
          M Salman Fazal
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-semibold text-slate-600 transition hover:text-electric dark:text-slate-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-lg bg-electric px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

