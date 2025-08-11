import images from '@/assets/images';
import MagneticButton from '@/components/common/MagneticButton/MagneticButton';
import styles from '@/components/NavigationBar/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiArrowRightUpLine,
  RiCloseLargeLine,
  RiMenu3Line,
} from '@remixicon/react';
import { motion, type Variants } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AnimatedButton from '../common/AnimatedButton/AnimatedButton';

import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DarkMode } from '../common/DarkMode/DarkMode';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const NavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Posts', href: '#posts' },
  { label: 'Services', href: '#services' },
  { label: 'More', href: '#more' },
];

const containerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1.3, duration: 0.3, ease: 'easeOut' },
  },
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  const scrollToSection = (target: string) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true);
    }
  };

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const styleActive = useMemo(
    () => (isMenuOpen ? styles.active : ''),
    [isMenuOpen]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };

    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    NavLinks.forEach(({ href }) => {
      const trigger = ScrollTrigger.create({
        trigger: href,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(href),
        onEnterBack: () => setActiveSection(href),
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const handleMobileButton = (href: string) => {
    scrollToSection(href);
    setTimeout(() => {
      closeMenu();
    }, 600);
  };

  const mobileNavigation = () => (
    <>
      <div
        className={`${styles.mobileBackdrop} ${styleActive}`}
        onClick={closeMenu}
      />

      <div className={`${styles.mobileMenu} ${styleActive}`}>
        <button className={styles.closeBtn} aria-label="Close mobile menu">
          <RiCloseLargeLine size={30} onClick={closeMenu} />
        </button>

        <ul className={styles.mobileNav}>
          {NavLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => handleMobileButton(href)}
                className={styles.navText}
              >
                <h1>{label}</h1>
                {activeSection === href && (
                  <motion.div
                    layoutId="nav-tab-mobile"
                    transition={{ type: 'tween', duration: 0.2 }}
                    className={styles.navIndicator}
                  />
                )}
              </button>
              <div className={styles.mobileNavBorder} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <header className={styles.headerContainer}>
        <nav style={{ position: 'relative' }}>
          <motion.button
            onClick={() => scrollToSection('#home')}
            className={styles.logoContainer}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <img src={images.logo} alt="logo" className={styles.logo} />
            <h2>AKMAL.</h2>
          </motion.button>

          <motion.div
            className={styles.navGroupContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className={styles.navGroup}>
              {NavLinks.map(({ label, href }) => (
                <li key={label}>
                  <motion.button
                    onClick={() => scrollToSection(href)}
                    className={styles.navText}
                    variants={buttonVariants}
                  >
                    {label}
                    {activeSection === href && (
                      <motion.div
                        layoutId="nav-tab"
                        transition={{ type: 'tween', duration: 0.4 }}
                        className={styles.navIndicator}
                      />
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <MagneticButton>
              <AnimatedButton containerClassName={styles.contactContainer}>
                <button
                  onClick={() => scrollToSection('#more')}
                  className={styles.contactButton}
                >
                  <p>Contact</p>
                  <RiArrowRightUpLine color={COLOR.BLACK} size={18} />
                </button>
              </AnimatedButton>
            </MagneticButton>
          </motion.div>

          <button className={styles.menuButton} onClick={openMenu}>
            <RiMenu3Line size={30} />
          </button>

          <div style={{ position: 'absolute', right: '-70px' }}>
            <DarkMode />
          </div>
        </nav>
      </header>

      {mobileNavigation()}
    </>
  );
};

export default NavigationBar;
