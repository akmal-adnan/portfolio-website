import images from '@/assets/images';
import styles from '@/components/Posts/styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HorizontalCardList, {
  type CardProps,
} from '@/components/HorizontalCardList/HorizontalCardList';

gsap.registerPlugin(ScrollTrigger);

const cardListItem: CardProps[] = [
  {
    cardTitle: 'Pokemon Memory Card Game',
    cardDescription: 'A project created for fun and love',
    cardStackList: 'React, Vite, Typescript, Sass, Graphql, PokemonAPI',
    sourceLink: 'www.github.com',
    cardImages: images.pkmcg,
  },
  {
    cardTitle: 'Pokemon Memory Card Game',
    cardDescription: 'A project created for fun and love',
    cardStackList: 'React, Vite, Typescript, Sass, Graphql, PokemonAPI',
    sourceLink: 'www.github.com',
    cardImages: images.pkmcg,
  },
];

const Posts = () => {
  return (
    <section id="scroll-section" className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Projects.</h1>
      </div>

      <HorizontalCardList cardList={cardListItem} />
    </section>
  );
};

export default Posts;
