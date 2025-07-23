import styles from '@/components/MarqueeText/styles.module.scss';

type Props = {
  item: string[];
  direction?: 'forwards' | 'reverse';
  speed?: number;
  classContainer?: string;
  classTextContainer?: string;
};

const MarqueeText = ({
  item,
  direction = 'forwards',
  speed = 10,
  classContainer,
  classTextContainer,
}: Props) => {
  const animationVariable = {
    '--direction': `${direction}`,
    '--speed': `${speed}s`,
  } as React.CSSProperties;

  return (
    <div
      style={animationVariable}
      className={`${styles.marqueeContainer} ${classContainer}`}
    >
      <div className={styles.marqueeTextTrack}>
        {item.map((currentText, i) => (
          <p key={i} className={`${styles.marqueeText} ${classTextContainer}`}>
            {currentText}
          </p>
        ))}

        {item.map((currentText, i) => (
          <p
            aria-hidden="true"
            key={i}
            className={`${styles.marqueeText} ${classTextContainer}`}
          >
            {currentText}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
