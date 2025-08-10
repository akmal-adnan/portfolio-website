import styles from '@/components/common/DarkMode/styles.module.scss';
import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useEffect, useState } from 'react';

export const DarkMode = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((prev) => !prev)}
      className={styles.buttonContainer}
    >
      {dark ? (
        <RiSunFill color="#FFD600" size={25} />
      ) : (
        <RiMoonFill color="#222" size={25} />
      )}
    </button>
  );
};
