import images from '@/assets/images';
import MagneticButton from '@/components/common/MagneticButton/MagneticButton';
import styles from '@/components/Hero/styles.module.scss';
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
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const springVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <section className={styles.sectionContainer} id="home">
      <div className={styles.itemContainer}>
        <motion.div
          className={styles.profileImagesContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
        >
          <img
            className={styles.profileImages}
            src={images.ProfileImg}
            alt="profile image"
            loading="lazy"
          />
        </motion.div>

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
              <a
                href="https://github.com/akmal-adnan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roundIconContainer}
                title="View GitHub Profile"
              >
                <RiGithubLine size={30} />
              </a>
            </AnimatedButton>
          </MagneticButton>

          <MagneticButton variants={springVariants}>
            <AnimatedButton>
              <a
                href="https://www.linkedin.com/in/akmal578"
                target="_blank"
                rel="noopener noreferrer"
                title="View LinkedIn Profile"
                className={styles.roundIconContainer}
              >
                <RiLinkedinFill size={30} />
              </a>
            </AnimatedButton>
          </MagneticButton>

          <MagneticButton variants={springVariants}>
            <AnimatedButton>
              <a
                href="/akmal-resume-oct-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View Resume"
                className={styles.roundIconContainer}
              >
                <RiFileDownloadLine size={30} />
              </a>
            </AnimatedButton>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
