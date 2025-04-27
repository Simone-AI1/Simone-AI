import { useEffect } from 'react';

type UseIntersectionObserverProps = {
  targetRefs: React.RefObject<HTMLElement>[];
  onIntersect: (entry: IntersectionObserverEntry) => void;
  threshold?: number;
  rootMargin?: string;
};

export const useIntersectionObserver = ({
  targetRefs,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      targetRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [targetRefs, onIntersect, threshold, rootMargin]);
};