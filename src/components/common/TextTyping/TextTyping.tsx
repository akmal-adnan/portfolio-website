import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type JSX } from 'react';

type Props = {
  text: string;
  speed?: number;
  runOnce?: boolean; // new prop
};

export const TextTyping: React.FC<Props> = ({
  text,
  speed = 30,
  runOnce = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: runOnce, amount: 'all' });
  const [displayedParts, setDisplayedParts] = useState<
    (string | JSX.Element)[]
  >([]);

  useEffect(() => {
    if (isInView) {
      setDisplayedParts([]);
      let index = 0;

      const interval = setInterval(() => {
        if (index >= text.length) {
          clearInterval(interval);
          return;
        }

        const char = text[index];

        if (char === '\r' && text[index + 1] === '\n') {
          setDisplayedParts((prev) => [...prev, <br key={index} />]);
          index += 2;
          return;
        }

        if (char === '\n') {
          setDisplayedParts((prev) => [...prev, <br key={index} />]);
          index++;
          return;
        }

        setDisplayedParts((prev) => [...prev, char]);
        index++;
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isInView, text, speed]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayedParts}
    </motion.span>
  );
};
