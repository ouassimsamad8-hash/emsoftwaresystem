import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { navigationLinks } from '../data/navigation';
import { Button } from '../components/Button';
import { AuroraBackground } from '../components/AuroraBackground';

export function MainLayout() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-body">
      <AuroraBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link to="/" className="group flex items-center gap-3 text-heading transition-transform hover:scale-[1.01]">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-accent text-lg font-bold shadow-glow">
                <span className="relative z-10">E&M</span>
                <span className="absolute inset-0 translate-x-[-120%] bg-white/25 blur-md transition-transform duration-700 ease-out group-hover:translate-x-full" aria-hidden />
              </span>
              <span className="hidden text-lg font-semibold md:block">E&M Software System</span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'relative rounded-full px-4 py-2 transition-colors duration-200',
                      'hover:text-heading',
                      isActive
                        ? 'text-heading before:absolute before:inset-x-1/2 before:bottom-0 before:h-1 before:w-8 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-accent'
                        : 'text-muted'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button to="/contact" variant="primary">
                Discutons de votre projet
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 text-heading transition hover:border-primary/60 hover:text-primary md:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOuvert((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOuvert ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5'}
                />
              </svg>
            </button>
          </div>
          {menuOuvert ? (
            <div className="border-t border-border/70 bg-background/95 backdrop-blur md:hidden">
              <nav className="flex flex-col gap-2 px-6 py-4">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        'rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                        isActive ? 'bg-primary/20 text-heading' : 'text-muted hover:bg-surface/60 hover:text-heading'
                      )
                    }
                    onClick={() => setMenuOuvert(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button to="/contact" className="mt-2 w-full">
                  Discutons de votre projet
                </Button>
              </nav>
            </div>
          ) : null}
        </header>

        <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 py-16 md:gap-32 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] border border-white/5 bg-background/60 shadow-[0_40px_120px_rgba(8,15,40,0.55)] backdrop-blur-3xl" aria-hidden />
          <Outlet />
        </main>

        <footer className="border-t border-border/60 bg-surface/60 py-12 text-sm">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-heading font-semibold">E&M Software System</p>
              <p className="text-muted">Solutions logicielles sur mesure pour les organisations ambitieuses.</p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted/70">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>Disponibles à l’international</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-muted">
              <a href="/mentions-legales" className="transition hover:text-heading">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="transition hover:text-heading">
                Politique de confidentialité
              </a>
              <p className="text-muted">© {new Date().getFullYear()} E&M Software System. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
