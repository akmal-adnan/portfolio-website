import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useLayoutEffect, useRef, type ReactNode } from 'react';

gsap.registerPlugin(ScrollSmoother);

type Props = {
  children: ReactNode;
};

const SmoothScrollGsap = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0.9,
      effects: false,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScrollGsap;
