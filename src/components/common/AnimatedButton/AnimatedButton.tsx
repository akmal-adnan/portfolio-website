import styles from '@/components/common/AnimatedButton/styles.module.scss';
import { COLOR } from '@/utils/color';
import { motion, useAnimation, type Variants } from 'framer-motion';
import { useRef } from 'react';

type AnimatedButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  backgroundColor?: string;
};

const AnimatedButton = ({
  children,
  backgroundColor = COLOR.PLUMP_PURPLE,
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
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      top: '-150%',
      width: '150%',
      transition: {
        duration: 0.25,
        ease: [0.23, 1, 0.32, 1],
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
        className={styles.circle}
        style={{ backgroundColor }}
        variants={circleVariants}
        initial="initial"
        animate={controls}
      />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default AnimatedButton;
