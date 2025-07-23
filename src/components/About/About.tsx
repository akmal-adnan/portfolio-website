import images from '@/assets/images';
import styles from '@/components/About/styles.module.scss';
import MarqueeText from '../MarqueeText/MarqueeText';

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
  return (
    <section className={styles.sectionContainer}>
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
            <h1>5+</h1>
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
