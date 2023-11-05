import { memo } from 'react';
import { TextProps } from './TextProps';
import { classNames } from '@/shared/lib';
import styles from './Text.module.scss';

export const Text = memo(function Text(props: TextProps) {
  const { title, text, className = '', theme = 'primary', align = 'left' } = props;

  return (
    <div
      className={classNames(styles, 'text', { [theme]: true, [`align-${align}`]: true }, [
        className,
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
