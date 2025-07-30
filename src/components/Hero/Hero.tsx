import images from '@/assets/images';
import MagneticButton from '@/components/common/MagneticButton/MagneticButton';
import styles from '@/components/Hero/styles.module.scss';
import { COLOR } from '@/utils/color';
import {
  RiFileDownloadLine,
  RiGithubLine,
  RiLinkedinFill,
} from '@remixicon/react';

const Hero = () => {
  return (
    <section className={styles.sectionContainer}>
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

        <div className={styles.roundIconGroup}>
          <MagneticButton>
            <button type="button" className={styles.roundIconContainer}>
              <RiGithubLine size={26} color={COLOR.BG_BLACK} />
            </button>
          </MagneticButton>
          <MagneticButton>
            <button type="button" className={styles.roundIconContainer}>
              <RiLinkedinFill size={26} color={COLOR.BG_BLACK} />
            </button>
          </MagneticButton>
          <MagneticButton>
            <button type="button" className={styles.roundIconContainer}>
              <RiFileDownloadLine size={30} color={COLOR.BG_BLACK} />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
