import styles from '@/components/InfiniteMarquee/styles.module.scss';
import React from 'react';

type Props = {
  images: string[];
  width: number;
  height: number;
  reverse?: boolean;
  duration?: number;
};

const InfiniteMarquee = ({
  images,
  width,
  height,
  reverse = false,
  duration = 20,
}: Props) => {
  const quantity = images.length;

  const sliderVars = {
    '--width': `${width}px`,
    '--height': `${height}px`,
    '--quantity': `${quantity}`,
    '--duration': `${duration}s`,
  } as React.CSSProperties;

  return (
    <div className={styles.slider} style={sliderVars} data-reverse={reverse}>
      <div className={styles.list}>
        {images.map((src, idx) => (
          <div
            className={styles.item}
            key={idx}
            style={{ '--position': idx + 1 } as React.CSSProperties}
          >
            <img src={src} alt={`slide-${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
