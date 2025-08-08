import images from '@/assets/images';
import MagneticButton from '@/components/common/MagneticButton/MagneticButton';
import styles from '@/components/Hero/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiFileDownloadLine,
  RiGithubLine,
  RiLinkedinFill,
} from '@remixicon/react';
import { motion, type Variants } from 'motion/react';
import AnimatedButton from '../common/AnimatedButton/AnimatedButton';

const Hero = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each button
      },
    },
  };

  const springVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 12 },
    },
  };

  return (
    <section className={styles.sectionContainer} id="home">
      <div className={styles.itemContainer}>
        <div className={styles.profileImagesContainer}>
          <img
            className={styles.profileImages}
            src={images.ProfileImg}
            alt="profile image"
          />
        </div>

        <p className={styles.textIntro}>Nice to meet you 👋🏻</p>

        <h1 className={styles.textMainIntro}>
          I'M AKMAL, DEVELOPER <br /> BASED IN MALAYSIA
        </h1>

        <p className={styles.textDescription}>
          a product designer and visual developer based in Johor. I am skilled
          in visual development, responsive web design and UI/UX design.
        </p>

        <motion.div
          className={styles.roundIconGroup}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MagneticButton variants={springVariants}>
            <AnimatedButton>
              <button type="button" className={styles.roundIconContainer}>
                <RiGithubLine size={30} color={COLOR.BG_BLACK} />
              </button>
            </AnimatedButton>
          </MagneticButton>

          <MagneticButton variants={springVariants}>
            <AnimatedButton>
              <button type="button" className={styles.roundIconContainer}>
                <RiLinkedinFill size={30} color={COLOR.BG_BLACK} />
              </button>
            </AnimatedButton>
          </MagneticButton>

          <MagneticButton variants={springVariants}>
            <AnimatedButton>
              <button type="button" className={styles.roundIconContainer}>
                <RiFileDownloadLine size={30} color={COLOR.BG_BLACK} />
              </button>
            </AnimatedButton>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
