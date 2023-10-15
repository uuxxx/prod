import { PropsWithChildren } from 'react';
import { ButtonProps } from './ButtonProps';
import { classNames } from '@/shared/lib';
import { ButtonTheme } from './ButtonTheme';
import styles from './Button.module.scss';

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { className = '', children, theme = ButtonTheme.CLEAR, ...other } = props;

  return (
    <button className={classNames(styles, 'button', {}, [className, theme])} {...other}>
      {children}
    </button>
  );
}
