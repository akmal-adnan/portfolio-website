import styles from '@/components/HorizontalCardList/styles.module.scss';
import { COLOR } from '@/utils/color';
import { RiArrowRightLine } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export type CardProps = {
  cardTitle: string;
  cardDescription: string;
  cardStackList: string;
  sourceLink: string;
  cardImages: string;
};

type Props = {
  cardList: CardProps[];
};

gsap.registerPlugin(ScrollTrigger);

const HorizontalCardList = ({ cardList }: Props) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div
      id="cards-container"
      className={styles.cardContainer}
      ref={cardsContainerRef}
    >
      {cardList.map((item, i) => {
        return (
          <div key={i} className={`${styles.cardItem} card-item`}>
            <div className={styles.cardTextContainer}>
              <div className={styles.cardTitleGroup}>
                <h2>{item.cardTitle}</h2>
                <p>{item.cardDescription}</p>
              </div>

              <div>
                <h3>Stack Used</h3>
                <p>{item.cardStackList}</p>

                <button type="button" className={styles.buttonSourceCode}>
                  <h3>Source code</h3>
                  <RiArrowRightLine color={COLOR.PLUMP_PURPLE} />
                </button>
              </div>
            </div>

            <div className={styles.cardImageContainer}>
              <img src={item.cardImages} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalCardList;
