import images from '@/assets/images';
import HorizontalCardList, {
  type CardProps,
} from '@/components/common/HorizontalCardList/HorizontalCardList';
import styles from '@/components/Posts/styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardListItem: CardProps[] = [
  {
    cardTitle: 'AI Gen Website',
    cardDescription: 'A project about AI gen created with Express and React',
    cardStackList:
      'React, Express, Typescript, Postgres, Neon, Clerk, Gemini API, Hugging Face API, ',
    sourceLink: 'https://quick-ai-chi-five.vercel.app/',
    cardImages: images.aiGenWeb,
  },
  {
    cardTitle: 'Pokemon Memory Card Game',
    cardDescription: 'A project created for fun and love',
    cardStackList: 'React, Vite, Typescript, Sass, Graphql, PokemonAPI',
    sourceLink: 'https://pmcg.netlify.app/',
    cardImages: images.pkmcg,
  },
  {
    cardTitle: 'Airbnb Clone',
    cardDescription:
      'A project that clone some of the function for research purpose',
    cardStackList:
      'NextJs, React, Typescript, Tailwind, Prisma, Bcrypt, Zustand',
    sourceLink: 'https://airbns-clone.vercel.app/',
    cardImages: images.airbnbWeb,
  },
  {
    cardTitle: 'Sushi Landing Page',
    cardDescription: 'A project created with education in mind',
    cardStackList: 'HTML, CSS, Vanilla Javascript',
    sourceLink: 'https://sushi-website-example.netlify.app/',
    cardImages: images.sushiWeb,
  },
  {
    cardTitle: 'Zentry Landing Page Clone',
    cardDescription:
      'A project that clone some of the function for research purpose and fun',
    cardStackList: 'React, Vite, Typescript, Tailwind, GSAP',
    sourceLink: 'https://zentryzz.netlify.app/',
    cardImages: images.zentryWeb,
  },
];

const Posts = () => {
  return (
    <section id="posts" className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Projects.</h1>
      </div>

      <HorizontalCardList cardList={cardListItem} />
    </section>
  );
};

export default Posts;
