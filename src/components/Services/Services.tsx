import images from '@/assets/images';
import styles from '@/components/Services/styles.module.scss';
import { COLOR } from '@/utils/color';
import { TextList } from '@/utils/posts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useDarkMode } from '../common/DarkMode/useDarkMode';
import VelocityScrollText from '../common/VelocityScrollText/VelocityScrollText';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { dark } = useDarkMode();

  const selectedColor = COLOR.TEXT_PRIMARY_LIGHT;
  const unselectedColor = dark
    ? COLOR.TEXT_MUTED_DARK
    : COLOR.TEXT_PRIMARY_DARK;

  return (
    <section className={styles.sectionContainer} id="services">
      <div className={styles.titleContainer}>
        <h1>What I do.</h1>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.cardGroup}>
          {TextList.map((item, i) => {
            const selected = selectedIndex === i;

            return (
              <button
                key={i}
                className={styles.cardContainer}
                onClick={() => setSelectedIndex(i)}
              >
                <h2
                  style={{ color: selected ? selectedColor : unselectedColor }}
                >
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
          transition={{ type: 'spring', duration: 0.5 }}
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

      <VelocityScrollText textContent={'Frontend Developer -'} />
    </section>
  );
};

export default Services;
