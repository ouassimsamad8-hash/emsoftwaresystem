import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { navigationLinks } from '../data/navigation';
import { Button } from '../components/Button';

export function MainLayout() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background text-body">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 text-heading">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-heading shadow-glow">
              E&M
            </span>
            <span className="hidden text-lg font-semibold md:block">E&M Software System</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx('transition-colors hover:text-heading', isActive ? 'text-heading' : 'text-muted')
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-heading md:hidden"
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
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-2 px-6 py-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx('rounded-2xl px-4 py-3 transition-colors', isActive ? 'bg-primary text-heading' : 'text-muted hover:text-heading')
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

      <main className="mx-auto flex max-w-6xl flex-1 flex-col gap-24 px-6 py-16 md:gap-32 md:py-24">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-surface/60 py-12 text-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-heading font-semibold">E&M Software System</p>
            <p className="text-muted">Solutions logicielles sur mesure pour les organisations ambitieuses.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
            <a href="/mentions-legales" className="hover:text-heading">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="hover:text-heading">
              Politique de confidentialité
            </a>
            <p className="text-muted">© {new Date().getFullYear()} E&M Software System. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
