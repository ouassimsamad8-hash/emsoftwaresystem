import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-light focus-visible:ring-offset-surface';

const variants = {
  primary: 'bg-primary text-heading hover:bg-primary-light shadow-soft',
  secondary: 'bg-surface text-heading border border-primary hover:bg-primary-dark/40',
  ghost: 'bg-transparent text-heading hover:bg-surface/60'
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = {
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  to?: string;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  as = 'button',
  href,
  to,
  variant = 'primary',
  className
}: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
