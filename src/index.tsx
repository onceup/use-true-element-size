import { RefObject, useEffect, useRef, useState } from 'react';

export const useTrueElementSize = (elementRef: RefObject<HTMLElement>) => {
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [elementHeight, setElementHeight] = useState<number>(0);

  let observer = useRef<ResizeObserver>(
    new ResizeObserver((entries) => {
      const { clientWidth, clientHeight } = entries[0].target;

      setElementWidth(clientWidth);
      setElementHeight(clientHeight);
    })
  );

  useEffect(() => {
    if (!elementRef.current || elementHeight || elementWidth) return;

    observer.current.observe(elementRef.current);
  });

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
