import styles from '@/components/common/VelocityScrollText/styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  defaultSpeed?: number; // base idle speed
  clampedSpeed?: number; // speed tied to scroll
  sliderContainerStyle?: string;
  textContent: string;
  reverse?: boolean;
};

const VelocityScrollText = ({
  defaultSpeed = 0.05,
  clampedSpeed = 500,
  sliderContainerStyle,
  textContent,
  reverse = false,
}: Props) => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);

  const xRef = useRef(0); // current xPercent position
  const speedRef = useRef(0);
  const baseSpeed = defaultSpeed;
  const lastDirectionRef = useRef(1); // current direction

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: true,
      start: 0,
      end: '+=99999',
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const clampedVelocity = gsap.utils.clamp(
          -clampedSpeed,
          clampedSpeed,
          velocity
        );

        // If reverse, flip the direction logic
        let direction = 1;
        if (clampedVelocity !== 0) {
          if (reverse) {
            direction = clampedVelocity > 0 ? -1 : 1;
          } else {
            direction = clampedVelocity > 0 ? 1 : -1;
          }
          lastDirectionRef.current = direction;
        }

        // Scroll boost speed (scaled down)
        const scrollBoost = Math.abs(clampedVelocity) * 0.001;
        speedRef.current =
          scrollBoost * lastDirectionRef.current +
          baseSpeed * lastDirectionRef.current;
      },
    });

    const animate = () => {
      // Smoothly interpolate toward idle speed in the current direction
      const targetSpeed = baseSpeed * lastDirectionRef.current;
      speedRef.current = gsap.utils.interpolate(
        speedRef.current,
        targetSpeed,
        0.2
      );

      // Apply movement
      xRef.current += speedRef.current;

      // Wrap text seamlessly (-100% to 0%)
      if (xRef.current < -100) xRef.current = 0;
      if (xRef.current > 0) xRef.current = -100;

      // Apply xPercent to both text blocks
      gsap.set(firstText.current, { xPercent: xRef.current });
      gsap.set(secondText.current, { xPercent: xRef.current });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [baseSpeed, clampedSpeed, reverse]);

  return (
    <div className={`${styles.sliderContainer} ${sliderContainerStyle}`}>
      <div className={styles.slider}>
        <p ref={firstText}>{textContent}</p>
        <p ref={secondText}>{textContent}</p>
      </div>
    </div>
  );
};

export default VelocityScrollText;
