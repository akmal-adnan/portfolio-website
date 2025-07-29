import images from '@/assets/images';
import styles from '@/components/NavigationBar/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiArrowRightUpLine,
  RiCloseLargeLine,
  RiMenu3Line,
} from '@remixicon/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';

const NavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Posts', href: '#posts' },
  { label: 'Services', href: '#services' },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const mobileNavigation = () => {
    return (
      <>
        <div
          className={`${styles.mobileBackdrop} ${styleActive}`}
          onClick={closeMenu}
        />

        <div className={`${styles.mobileMenu} ${styleActive}`}>
          <button className={styles.closeBtn} aria-label="Close mobile menu">
            <RiCloseLargeLine
              color={COLOR.BLACK}
              size={30}
              onClick={closeMenu}
            />
          </button>

          <ul className={styles.mobileNav}>
            {NavLinks.map(({ label, href }) => (
              <li key={label}>
                <Link to={`/${href}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <nav>
          <Link to="/" className={styles.logoContainer}>
            <img src={images.logo} alt="logo" className={styles.logo} />
            <h2>AKMAL.</h2>
          </Link>

          <div className={styles.navGroupContainer}>
            <ul className={styles.navGroup}>
              {NavLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={`/${href}`} className={styles.navText}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className={styles.contactButton}>
            Contact
            <RiArrowRightUpLine color={COLOR.BLACK} size={18} />
          </Link>

          <button className={styles.menuButton} onClick={openMenu}>
            <RiMenu3Line color={COLOR.BLACK} size={30} />
          </button>
        </nav>
      </header>

      {mobileNavigation()}
    </>
  );
};

export default NavigationBar;
