import { motion, type HTMLMotionProps } from 'motion/react';
import { useRef, useState, type MouseEvent } from 'react';

type Position = { x: number; y: number };

type MagneticButtonProps = HTMLMotionProps<'div'> & {
  magneticStrength?: number;
};

const MagneticButton = ({
  children,
  magneticStrength = 1,
  ...rest // all other motion.div props (variants, initial, animate, etc.)
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);

    setPosition({
      x: middleX * magneticStrength,
      y: middleY * magneticStrength,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ position: 'relative' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
