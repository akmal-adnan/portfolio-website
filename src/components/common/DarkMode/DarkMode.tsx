import styles from '@/components/common/DarkMode/styles.module.scss';
import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useDarkMode } from './useDarkMode';

export const DarkMode = () => {
  const { dark, toggleDark } = useDarkMode();

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDark}
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
