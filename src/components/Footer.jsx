import { navLinks } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-slate-800 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row dark:text-slate-300">
        <p>© {new Date().getFullYear()} M Salman Fazal. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="font-semibold hover:text-electric">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
