import type { ReactNode } from 'react';

type SectionHeaderProps = {
  titre: string;
  sousTitre?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionHeader({ titre, sousTitre, align = 'left', action }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'text-center items-center' : ''}`}>
      <h2 className="section-title">{titre}</h2>
      {sousTitre ? <p className="section-subtitle">{sousTitre}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
