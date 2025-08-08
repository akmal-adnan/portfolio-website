import images from '@/assets/images';
import styles from '@/components/About/styles.module.scss';
import MarqueeText from '@/components/common/MarqueeText/MarqueeText';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const nameStack = ['AKMAL', 'ADNAN', 'AKMAL', 'ADNAN', 'AKMAL', 'ADNAN'];

const stackList = [
  'Javascript',
  'Typescript',
  'React',
  'React Native',
  'NextJs',
  'AstroJs',
  'Redux',
  'TailwindCSS',
  'ExpressJs',
];

const stackList2 = [
  'HTML',
  'SASS',
  'Vue',
  'Angular',
  'ShadCn',
  'GSAP',
  'ThreeJs',
  'ShadCN',
];

const About = () => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: 5,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play reset play reset',
      },
      onUpdate: () => {
        el.innerText = Math.floor(obj.val).toString();
      },
    });
  }, []);

  return (
    <section className={styles.sectionContainer} id="about">
      <div className={styles.titleContainer}>
        <h1>About Me.</h1>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.gridBox} style={{ gridArea: 'box1' }}>
          <div className={styles.titleIntroText}>
            <h2>Front-End Developer</h2>
            <h3>
              with a love for a clean UI <br /> and fast apps
            </h3>
          </div>

          <div>
            <MarqueeText
              item={nameStack}
              speed={20}
              classContainer={styles.mqContainer}
              classTextContainer={styles.mqText}
            />
          </div>

          <img
            className={styles.profileImages}
            src={images.ProfileImg}
            alt="profile image"
          />
        </div>

        <div className={styles.gridBox} style={{ gridArea: 'box2' }}>
          <img
            src={images.bgStar}
            alt="star"
            className={styles.backgroundStar}
          />
          <div className={styles.codingContainer}>
            <p>Currently</p>
            <h3>Working with</h3>
          </div>
          <div className={styles.centerContainer}>
            <img
              src={images.reazonLogo}
              alt="reazon-logo"
              className={styles.reazonLogo}
            />
          </div>
        </div>

        <div
          className={`${styles.gridBox} ${styles.gradientColor}`}
          style={{ gridArea: 'box3' }}
        >
          <div className={styles.codingContainer}>
            <p>What I do</p>
            <h3>Design & Code</h3>
            <img
              className={styles.codeImage}
              src={images.codingDark}
              alt="code image"
            />
          </div>
        </div>

        <div className={`${styles.gridBox} ${styles.centerContainer}`}>
          <div className={styles.experienceText}>
            <h1>
              <span ref={numberRef}>0</span>+
            </h1>
            <h3>Years of Experience</h3>
          </div>
        </div>

        <div className={styles.gridBox} style={{ gridArea: 'box5' }}>
          <div className={styles.codingContainer}>
            <h3>Tech stack I used</h3>
            <p>And many more still learning</p>
          </div>

          <div className={styles.marqueeContainer}>
            <MarqueeText
              item={stackList}
              speed={18}
              classContainer={styles.marqueeItem}
            />
            <MarqueeText item={stackList2} speed={18} direction="reverse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
