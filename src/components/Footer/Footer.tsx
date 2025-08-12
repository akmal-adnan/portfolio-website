import { useScrollToSection } from '@/components/common/ScrollToSection/useScrollToSection';
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
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const NavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Posts', href: '#posts' },
  { label: 'Services', href: '#services' },
];

export const Footer = () => {
  const scrollToSection = useScrollToSection();

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
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={styles.buttonList}
                >
                  <p>{item.label}</p>
                </button>
              );
            })}
          </div>

          <div className={styles.menuContainer}>
            <h4>Social Media</h4>

            <button className={styles.iconContainer}>
              <RiGithubFill />
              <p>Github</p>
            </button>

            <button className={styles.iconContainer}>
              <RiLinkedinBoxFill />
              <p>Linkedin</p>
            </button>
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
