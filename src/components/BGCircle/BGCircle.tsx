import images from '@/assets/images';
import styles from '@/components/BGCircle/styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  defaultSpeed?: number;
};

const BGCircle = ({ defaultSpeed = 0.05 }: Props) => {
  const circleRef = useRef<HTMLImageElement>(null);

  const angleRef = useRef(0);
  const speedRef = useRef(0);
  const baseSpeed = defaultSpeed;
  const lastDirectionRef = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: true,
      start: 0,
      end: '+=99999',
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const clampedVelocity = gsap.utils.clamp(-300, 300, velocity);

        // Record direction (negative = scroll up)
        if (clampedVelocity !== 0) {
          lastDirectionRef.current = clampedVelocity > 0 ? 1 : -1;
        }

        const scrollBoost = clampedVelocity * 0.001;
        speedRef.current = scrollBoost + baseSpeed * lastDirectionRef.current;
      },
    });

    const animate = () => {
      // Decay speed to directional idle base speed
      const targetSpeed = baseSpeed * lastDirectionRef.current;
      speedRef.current = gsap.utils.interpolate(
        speedRef.current,
        targetSpeed,
        0.2
      );

      angleRef.current += speedRef.current;

      if (circleRef.current) {
        gsap.set(circleRef.current, { rotate: angleRef.current });
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [baseSpeed]);

  return (
    <div id="circleBg" className={styles.cirleContainer}>
      <img ref={circleRef} src={images.bgCircle} />
    </div>
  );
};

export default BGCircle;
