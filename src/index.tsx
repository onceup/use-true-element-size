import { RefObject, useEffect, useRef, useState } from 'react';

export const useTrueElementSize = (elementRef: RefObject<HTMLElement>) => {
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [elementHeight, setElementHeight] = useState<number>(0);

  const observer = useRef<ResizeObserver>(
    new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setElementWidth(width);
      setElementHeight(height);
    })
  );

  useEffect(() => {
    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }

    return () => {
      elementRef.current && observer.current.unobserve(elementRef.current);
    };
  }, [elementRef, observer]);

  return { elementWidth, elementHeight };
};
