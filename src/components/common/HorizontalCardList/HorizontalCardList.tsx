import styles from '@/components/common/HorizontalCardList/styles.module.scss';
import { RiArrowRightLine, RiGithubLine } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

export type CardProps = {
  cardTitle: string;
  cardDescription: string;
  cardStackList: string;
  sourceLink: string;
  cardImages: string;
  githubLink: string;
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
        trigger: '#posts',
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

              <div className={styles.cardDescription}>
                <h3>Created with:</h3>
                <p>{item.cardStackList}</p>

                <a
                  target="_blank"
                  href={item.githubLink}
                  className={styles.buttonGithubLink}
                >
                  <RiGithubLine size={20} color="white" />
                </a>

                <div className={styles.buttonSourceContainer}>
                  <AnimatedButton>
                    <a
                      className={styles.buttonSourceCode}
                      target="_blank"
                      href={item.sourceLink}
                    >
                      <h3>View Now</h3>
                      <RiArrowRightLine />
                    </a>
                  </AnimatedButton>
                </div>
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
