import { useEffect, useRef, useState } from "react";

export const useObserve = () => {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = componentRef.current;

    if (!currentElement) {
      return;
    }

    const thresholds = Array.from({ length: 11 }, (_, i) => i * 0.1);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: thresholds,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  return { componentRef, isInView };
};
