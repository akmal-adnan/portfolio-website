import styles from '@/components/Footer/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiArrowLeftDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from '@remixicon/react';

export const Footer = () => {
  return (
    <footer className={styles.sectionContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.menuGroup}>
          <div className={styles.menuContainer}>
            <h4>Main Menu</h4>
            <p>Home</p>
            <p>About</p>
            <p>Post</p>
            <p>Service</p>
          </div>

          <div className={styles.menuContainer}>
            <h4>Social Media</h4>

            <div className={styles.iconContainer}>
              <RiGithubFill color={COLOR.LIGHT_GRAY} />
              <p>Github</p>
            </div>
            <div className={styles.iconContainer}>
              <RiLinkedinBoxFill color={COLOR.LIGHT_GRAY} />
              <p>Linkedin</p>
            </div>
          </div>
        </div>

        <div className={styles.nameGroup}>
          <div className={styles.arrowContainer}>
            <RiArrowLeftDownLine color={COLOR.WHITE} size={40} />
          </div>

          <h1>Let's work together</h1>
          <p>
            &copy; {new Date().getFullYear()} Akmal Adnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
