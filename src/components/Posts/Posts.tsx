import images from '@/assets/images';
import { type CardProps } from '@/components/common/HorizontalCardList/HorizontalCardList';
import styles from '@/components/Posts/styles.module.scss';
import { motion } from 'motion/react';
import { useRef } from 'react';
import CardPosts from '../common/CardPosts/CardPosts';

const cardListItem: CardProps[] = [
  {
    cardTitle: 'AI Gen Website',
    cardDescription: 'A project about AI gen created with Express and React',
    cardStackList:
      'React, Express, Typescript, Postgres, Neon, Clerk, Gemini API, Hugging Face API, ',
    sourceLink: 'https://quick-ai-chi-five.vercel.app/',
    cardImages: images.aiGenWeb,
    githubLink: 'https://github.com/akmal-adnan/quick-ai-fullstack',
  },
  {
    cardTitle: 'Shazam Mobile App Clone',
    cardDescription: 'React-native project that is still in progress',
    cardStackList: 'React Native, Reanimated, Expo, Typescript, Redux toolkit',
    sourceLink: 'https://github.com/akmal-adnan/rn-shazam-clone-expo',
    cardImages: images.shazamApp,
    githubLink: 'https://github.com/akmal-adnan/rn-shazam-clone-expo',
  },
  {
    cardTitle: 'Pokemon Memory Card Game',
    cardDescription: 'A project created for fun and love',
    cardStackList: 'React, Vite, Typescript, Sass, Graphql, PokemonAPI',
    sourceLink: 'https://pmcg.netlify.app/',
    cardImages: images.pkmcg,
    githubLink: 'https://github.com/akmal-adnan/memory-card-game',
  },
  {
    cardTitle: 'Airbnb Clone',
    cardDescription:
      'A project that clone some of the function for research purpose',
    cardStackList:
      'NextJs, React, Typescript, Tailwind, Prisma, Bcrypt, Zustand',
    sourceLink: 'https://airbns-clone.vercel.app/',
    cardImages: images.airbnbWeb,
    githubLink: 'https://github.com/akmal-adnan/airbnb_clone',
  },
  {
    cardTitle: 'Sushi Landing Page',
    cardDescription: 'A project created with education in mind',
    cardStackList: 'HTML, CSS, Vanilla Javascript',
    sourceLink: 'https://sushi-website-example.netlify.app/',
    cardImages: images.sushiWeb,
    githubLink: 'https://github.com/akmal-adnan/sushi-website',
  },
  {
    cardTitle: 'Zentry Landing Page Clone',
    cardDescription:
      'A project that clone some of the function for research purpose and fun',
    cardStackList: 'React, Vite, Typescript, Tailwind, GSAP',
    sourceLink: 'https://zentryzz.netlify.app/',
    cardImages: images.zentryWeb,
    githubLink: 'https://github.com/akmal-adnan/zentry-clone',
  },
];

const Posts = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="posts" className={styles.sectionContainer} ref={targetRef}>
      <div className={styles.titleContainer}>
        <h1>Projects.</h1>
        <p>And more upcoming soon</p>
      </div>

      <motion.div className={styles.cardGridContainer}>
        {cardListItem.map((item, i) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -120 : 120,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              // viewport={{ once: true }}
            >
              <CardPosts key={i} item={item} i={i} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Posts;
