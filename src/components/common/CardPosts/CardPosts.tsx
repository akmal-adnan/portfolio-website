import AnimatedButton from '@/components/common/AnimatedButton/AnimatedButton';
import styles from '@/components/common/CardPosts/styles.module.scss';
import type { CardProps } from '@/components/common/HorizontalCardList/HorizontalCardList';
import { RiArrowRightLine, RiGithubLine } from '@remixicon/react';

type Props = {
  item: CardProps;
  i: number;
};

const CardPosts = ({ item, i }: Props) => {
  return (
    <div key={i} className={styles.cardItem}>
      <div className={styles.cardTextContainer}>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div className={styles.cardImageContainer}>
            <img
              src={item.cardImages}
              alt="project images"
              loading="lazy"
              width={100}
              height={100}
            />
          </div>

          <div className={styles.cardTitleGroup}>
            <h2>{item.cardTitle}</h2>
            <p>{item.cardDescription}</p>
          </div>
        </div>

        <div className={styles.cardDescription}>
          <h3>Created with:</h3>
          <p>{item.cardStackList}</p>

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

            <a
              target="_blank"
              href={item.githubLink}
              className={styles.buttonGithubLink}
            >
              <RiGithubLine size={23} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPosts;
