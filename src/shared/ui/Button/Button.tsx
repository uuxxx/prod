import { PropsWithChildren } from 'react';
import { ButtonProps } from './ButtonProps';
import { classNames } from '@/shared/lib';
import styles from './Button.module.scss';

export function Button(props: PropsWithChildren<ButtonProps>) {
  const {
    className = '',
    children,
    theme = 'clear',
    disabled = false,
    size = 'medium',
    ...other
  } = props;

  return (
    <button
      disabled={disabled}
      className={classNames(styles, 'button', { [theme]: true, [size]: true, disabled }, [
        className,
      ])}
      {...other}
    >
      <div className={styles.wrapper}>{children}</div>
    </button>
  );
}
