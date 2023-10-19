import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppLinkProps } from './AppLinkProps';
import { AppLinkTheme } from './AppLinkTheme';
import { classNames } from '@/shared/lib';
import styles from './AppLink.module.scss';

export function AppLink(props: PropsWithChildren<AppLinkProps>) {
  const { className = '', children, theme = AppLinkTheme.PRIMARY, ...other } = props;

  return (
    <Link className={classNames(styles, 'link', { [theme]: true }, [className])} {...other}>
      {children}
    </Link>
  );
}
