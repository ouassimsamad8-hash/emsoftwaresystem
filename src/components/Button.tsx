import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const baseStyles =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:content-[\'\']';

const variants = {
  primary:
    'bg-gradient-to-r from-primary via-primary-light to-accent text-heading shadow-glow hover:shadow-card before:bg-gradient-to-r before:from-white/20 before:via-white/0 before:to-white/15 group-hover:before:opacity-100',
  secondary:
    'border border-primary/50 bg-transparent text-heading shadow-soft hover:border-primary hover:bg-primary/15',
  ghost: 'border border-transparent bg-transparent text-heading hover:border-border hover:bg-surface/70'
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
  const content = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return <button className={classes}>{content}</button>;
}
