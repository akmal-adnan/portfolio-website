import { motion } from 'framer-motion';
import { useEffect, useState, type JSX } from 'react';

type Props = {
  text: string;
  speed?: number;
};

export const TextTyping: React.FC<Props> = ({ text, speed = 50 }) => {
  const [displayedParts, setDisplayedParts] = useState<
    (string | JSX.Element)[]
  >([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (text[index] === '\n') {
        setDisplayedParts((prev) => [...prev, <br key={index} />]);
        index++;
      } else if (index < text.length) {
        setDisplayedParts((prev) => [...prev, text.charAt(index)]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedParts}
    </motion.span>
  );
};
