import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionHeaderProps = {
  titre: string;
  sousTitre?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
  accent?: string;
};

export function SectionHeader({ titre, sousTitre, align = 'left', action, accent = 'E&M Software System' }: SectionHeaderProps) {
  return (
    <div className={clsx('flex flex-col gap-4', align === 'center' && 'items-center text-center')}>
      {accent ? (
        <div
          className={clsx(
            'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/70',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-10 bg-gradient-to-r from-primary to-accent" aria-hidden />
          <span>{accent}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" aria-hidden />
        </div>
      ) : null}
      <h2 className="section-title">
        <span className="bg-gradient-to-r from-heading via-heading to-heading/70 bg-clip-text text-transparent">{titre}</span>
      </h2>
      {sousTitre ? <p className="section-subtitle">{sousTitre}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
