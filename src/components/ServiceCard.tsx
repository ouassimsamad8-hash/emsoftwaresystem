import type { Service } from '../types/content';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group flex flex-col gap-6 rounded-3xl bg-surface p-8 shadow-soft transition-transform duration-200 hover:-translate-y-2">
      <div className="text-4xl" aria-hidden>
        {service.icone}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-heading">{service.titre}</h3>
        <p className="mt-3 text-muted">{service.description}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-body">
        {service.avantages.map((avantage) => (
          <li key={avantage} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
            <span>{avantage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
