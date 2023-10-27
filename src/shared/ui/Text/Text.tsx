import { TextProps } from './TextProps';
import { classNames } from '@/shared/lib';
import styles from './Text.module.scss';

export function Text(props: TextProps) {
  const { title, text, className = '', theme = 'primary' } = props;

  return (
    <div className={classNames(styles, 'text', { [theme]: true }, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}