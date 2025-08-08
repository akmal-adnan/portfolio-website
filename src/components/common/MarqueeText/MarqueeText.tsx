import styles from '@/components/common/MarqueeText/styles.module.scss';
import StackIcon from 'tech-stack-icons';

type MarqueeItem = {
  text: string;
  icon?: string; // name for StackIcon
};

type Props = {
  item: MarqueeItem[];
  direction?: 'forwards' | 'reverse';
  speed?: number;
  classContainer?: string;
  classTextContainer?: string;
  classIconContainer?: string;
};

const MarqueeText = ({
  item,
  direction = 'forwards',
  speed = 10,
  classContainer,
  classTextContainer,
  classIconContainer,
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
        {item.map((item, i) => (
          <div className={`${styles.marqueeText} ${classTextContainer}`}>
            {item.icon && (
              <div className={`${styles.iconContainer} ${classIconContainer}`}>
                <StackIcon name={item.icon} />
              </div>
            )}

            <p key={i}>{item.text}</p>
          </div>
        ))}

        {item.map((item, i) => (
          <div className={`${styles.marqueeText} ${classTextContainer}`}>
            {item.icon && (
              <div className={`${styles.iconContainer} ${classIconContainer}`}>
                <StackIcon name={item.icon} />
              </div>
            )}
            <p aria-hidden="true" key={i}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
