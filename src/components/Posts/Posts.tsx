import images from '@/assets/images';
import styles from '@/components/Posts/styles.module.scss';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Posts = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.card-item');
    const container = cardsContainerRef.current;
    const paddingOffset = window.innerWidth <= 768 ? 20 : 164;
    const totalScroll =
      container.scrollWidth - window.innerWidth + paddingOffset;

    gsap.set(cards, { opacity: 0 });

    // Horizontal scroll track
    const scrollTrack = gsap.to('#cards-container', {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: '#scroll-section',
        start: 'top top',
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
      },
    });

    // Fade-in each card during scroll
    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: 'left 98%',
          end: 'center 90%',
          scrub: true,
          containerAnimation: scrollTrack,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="scroll-section" className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Projects.</h1>
      </div>

      <div
        id="cards-container"
        className={styles.cardContainer}
        ref={cardsContainerRef}
      >
        <div className={`${styles.cardItem} card-item`}>
          <h1>Hello world</h1>
          <div className={styles.cardImageContainer}>
            <img src={images.project1} alt="" />
          </div>
        </div>
        <div className={`${styles.cardItem} card-item`}>
          {/* <img src={images.project2} alt="" /> */}
        </div>
        <div className={`${styles.cardItem} card-item`}>
          {/* <img src={images.project3} alt="" /> */}
        </div>
        <div className={`${styles.cardItem} card-item`}>
          {/* <img src={images.project4} alt="" /> */}
        </div>
        <div className={`${styles.cardItem} card-item`}>
          {/* <img src={images.project5} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Posts;
