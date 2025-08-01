import styles from '@/components/common/AnimatedButton/styles.module.scss';
import { motion, useAnimation, type Variants } from 'framer-motion';
import { useRef } from 'react';

type AnimatedButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  circleClassName?: string;
};

const AnimatedButton = ({
  children,
  circleClassName,
  ...props
}: AnimatedButtonProps) => {
  const controls = useAnimation();
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    controls.start('enter');
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      controls.start('exit').then(() => {
        controls.set('initial');
      });
    }, 100);
  };

  const circleVariants: Variants = {
    initial: {
      top: '100%',
      width: '150%',
    },
    enter: {
      top: '-25%',
      width: '110%',
      transition: {
        duration: 0.4,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    exit: {
      top: '-150%',
      width: '150%',
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div
      className={styles.roundedButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={`${styles.circle} ${circleClassName}`}
        variants={circleVariants}
        initial="initial"
        animate={controls}
      />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default AnimatedButton;
