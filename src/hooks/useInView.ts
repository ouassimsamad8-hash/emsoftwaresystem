import { MutableRefObject, useEffect, useRef, useState } from 'react';

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

type UseInViewReturn<T extends Element> = {
  ref: MutableRefObject<T | null>;
  isVisible: boolean;
};

export function useInView<T extends Element>(options: UseInViewOptions = {}): UseInViewReturn<T> {
  const { once = true, root, rootMargin, threshold } = options;
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observerInstance.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, root, rootMargin, threshold]);

  return { ref: elementRef, isVisible };
}
