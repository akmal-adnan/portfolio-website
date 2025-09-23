import images from '@/assets/images';
import AnimatedButton from '@/components/common/AnimatedButton/AnimatedButton';
import MagneticButton from '@/components/common/MagneticButton/MagneticButton';
import styles from '@/components/NavigationBar/styles.module.scss';
import {
  RiArrowRightUpLine,
  RiCloseLargeLine,
  RiMenu3Line,
} from '@remixicon/react';

import { DarkMode } from '@/components/common/DarkMode/DarkMode';
import { COLOR } from '@/utils/color';
import { motion, type Variants } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
          <>
            <DarkMode />

            {NavLinks.map(({ label, href }) => (
              <li key={label}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px',
                  }}
                >
                  <a className={styles.navText} href={href}>
                    <h1>{label}</h1>
                  </a>
                  {activeSection === href && (
                    <motion.div
                      layoutId="nav-tab-mobile"
                      transition={{ type: 'tween', duration: 0.2 }}
                      className={styles.navIndicator}
                    />
                  )}
                </div>

                <div className={styles.mobileNavBorder} />
              </li>
            ))}
          </>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <header className={styles.headerContainer}>
        <nav style={{ position: 'relative' }}>
          <motion.a
            href="#home"
            className={styles.logoContainer}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <img src={images.logo} alt="logo" className={styles.logo} />
            <h2>AKMAL.</h2>
          </motion.a>

          <motion.div
            className={styles.navGroupContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className={styles.navGroup}>
              {NavLinks.map(({ label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
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
                  </motion.a>
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
                <a
                  href="https://www.linkedin.com/in/akmal578"
                  target="_blank"
                  className={styles.contactButton}
                >
                  <p>Contact</p>
                  <RiArrowRightUpLine color={COLOR.BLACK} size={18} />
                </a>
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
