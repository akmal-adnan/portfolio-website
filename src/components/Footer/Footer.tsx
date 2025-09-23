import VelocityScrollText from '@/components/common/VelocityScrollText/VelocityScrollText';
import styles from '@/components/Footer/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiArrowLeftDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from '@remixicon/react';

import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion, type Variants } from 'motion/react';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const NavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Posts', href: '#posts' },
  { label: 'Services', href: '#services' },
];

const hoverWipeVariants: Variants = {
  rest: {
    width: '0%',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hover: {
    width: '100%',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const Footer = () => {
  return (
    <footer className={styles.sectionContainer} id="more">
      <VelocityScrollText
        sliderContainerStyle={styles.textSlider}
        reverse
        textContent="• Overcome • Adapt • Improvise"
        defaultSpeed={0.03}
      />

      <div className={styles.itemContainer}>
        <div className={styles.menuGroup}>
          <div className={styles.menuContainer}>
            <h4>Main Menu</h4>

            {NavLinks.map((item) => {
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={styles.buttonList}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <p>{item.label}</p>

                  <motion.span
                    className={styles.hoverBg}
                    variants={hoverWipeVariants}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </motion.a>
              );
            })}
          </div>

          <div className={styles.menuContainer}>
            <h4>Social Media</h4>

            <motion.a
              href="https://github.com/akmal-adnan"
              target="_blank"
              className={styles.iconContainer}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <RiGithubFill />
              <p>Github</p>
              <motion.span
                className={styles.hoverBg}
                variants={hoverWipeVariants}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/akmal578"
              target="_blank"
              className={styles.iconContainer}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <RiLinkedinBoxFill />
              <p>Linkedin</p>
              <motion.span
                className={styles.hoverBg}
                variants={hoverWipeVariants}
              />
            </motion.a>
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
