import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useLayoutEffect, useRef, type ReactNode } from 'react';

gsap.registerPlugin(ScrollSmoother);

type Props = {
  children: ReactNode;
};

const ScrollSmootherLayout = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="wrapper" ref={wrapperRef}>
      <div id="content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherLayout;
