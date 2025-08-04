import images from '@/assets/images';
import styles from '@/components/Services/styles.module.scss';
import { COLOR } from '@/utils/color';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';

const TextList = [
  {
    name: 'Web Development',
    description: [
      'Web development and deployment',
      'Single Page Applications (SPAs)',
      'Landing pages and business websites',
      'Portfolio websites',
      'AI implementation',
    ],
  },
  {
    name: 'Mobile Development',
    description: [
      'Mobile-friendly web apps',
      'React Native mobile apps',
      'App development and release',
    ],
  },
  {
    name: 'UI/UX Design Prototyping',
    description: [
      'UI design with Figma & Adobe XD',
      'UX research & improvements',
      'Prototyping for websites & mobile apps',
    ],
  },
];

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const groupRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>What I do.</h1>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.cardGroup} ref={groupRef}>
          {TextList.map((item, i) => {
            const selected = selectedIndex == i;

            return (
              <button
                key={i}
                className={styles.cardContainer}
                onClick={() => setSelectedIndex(i)}
              >
                <h2 style={{ color: selected ? COLOR.WHITE : COLOR.BLACK }}>
                  {item.name}
                </h2>

                {selected && (
                  <motion.div
                    layoutId="pill-tab"
                    transition={{ type: 'spring', duration: 0.5 }}
                    className={styles.cardIndicator}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          className={styles.contentContainer}
          layout
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
        >
          <img
            src={images.bgStar}
            alt="star"
            className={styles.backgroundStar}
          />

          <div className={styles.contentTitle}>
            <h3>{TextList[selectedIndex].name}</h3>
          </div>

          <div className={styles.contentDescription}>
            {TextList[selectedIndex].description.map((text, i) => (
              <p key={i}>• {text}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
