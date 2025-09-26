import images from '@/assets/images';
import styles from '@/components/About/styles.module.scss';
import MarqueeText from '@/components/common/MarqueeText/MarqueeText';
import { useDarkMode } from '../common/DarkMode/useDarkMode';

const nameStack = [
  { text: 'AKMAL' },
  { text: 'ADNAN' },
  { text: 'AKMAL' },
  { text: 'ADNAN' },
];

const stackList = [
  { text: 'Javascript', icon: 'js' },
  { text: 'Typescript', icon: 'typescript' },
  { text: 'React', icon: 'react' },
  { text: 'NextJs', icon: 'nextjs2' },
  { text: 'AstroJs', icon: 'astro' },
  { text: 'React Native', icon: 'react' },
  { text: 'Redux', icon: 'redux' },
  { text: 'TailwindCSS', icon: 'tailwindcss' },
  { text: 'NodeJs', icon: 'nodejs' },
  { text: 'Copilot', icon: 'copilotgithub' },
];

const stackList2 = [
  { text: 'HTML5', icon: 'html5' },
  { text: 'SASS', icon: 'sass' },
  { text: 'CSS', icon: 'css3' },
  { text: 'Vue', icon: 'vuejs' },
  { text: 'Angular', icon: 'angular' },
  { text: 'Figma', icon: 'figma' },
  { text: 'AdobeXd', icon: 'xd' },
  { text: 'Framer', icon: 'framer' },
  { text: 'GSAP', icon: 'gsap' },
  { text: 'Threejs', icon: 'threejs' },
  { text: 'Mongodb', icon: 'mongodb' },
];

const EXPERIENCE_YEARS = 4;

export const About = () => {
  const { dark } = useDarkMode();

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
            alt="profile-image"
            loading="lazy"
          />
        </div>

        <div className={styles.gridBox} style={{ gridArea: 'box2' }}>
          <img
            src={images.bgStar}
            alt="star"
            className={styles.backgroundStar}
            loading="lazy"
          />
          <div className={styles.codingContainer}>
            <p>Currently</p>
            <h3>Working with</h3>
          </div>
          <div className={styles.centerContainer}>
            <img
              src={images.reazonLogo}
              alt="reazon-logo"
              className={`${styles.reazonLogo} ${dark && styles.addFilter}`}
              loading="lazy"
            />
            <img
              src={images.menuLogo}
              alt="reazon-logo"
              className={`${styles.reazonLogo} ${dark && styles.addFilter}`}
              loading="lazy"
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
              alt="code-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className={`${styles.gridBox} ${styles.centerContainer}`}>
          <div className={styles.experienceText}>
            <h1>{EXPERIENCE_YEARS}+</h1>
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
