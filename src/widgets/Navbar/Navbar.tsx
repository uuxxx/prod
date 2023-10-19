import { classNames } from '@/shared/lib';
import { NavbarProps } from './NavbarProps';

import styles from './Navbar.module.scss';

export function Navbar(props: NavbarProps) {
  const { className = '' } = props;

  return <nav className={classNames(styles, 'navbar', {}, [className])}></nav>;
}
