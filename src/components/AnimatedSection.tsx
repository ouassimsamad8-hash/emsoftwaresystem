import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className' | 'style'>;

export function AnimatedSection({
  children,
  delay = 0,
  className,
  style,
  ...rest
}: AnimatedSectionProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const mergedStyle = prefersReducedMotion
    ? style
    : {
        ...style,
        transitionDelay: `${delay}ms`
      };

  return (
    <div
      ref={ref}
      className={clsx(
        'relative will-change-transform',
        !prefersReducedMotion &&
          'motion-safe:transform-gpu motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-bounce-smooth',
        !prefersReducedMotion &&
          (isVisible
            ? 'motion-safe:opacity-100 motion-safe:translate-y-0'
            : 'motion-safe:opacity-0 motion-safe:translate-y-12'),
        className
      )}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}
