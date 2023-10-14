import { ReactNode } from 'react';
import { classNames } from '@/shared/lib';
import { NavbarProps } from './NavbarProps';
import { AppLink } from '@/shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

export function Navbar(props: NavbarProps) {
  const { className = '' } = props;

  const { t } = useTranslation();

  const links: { to: string; node: ReactNode }[] = [
    { to: '/', node: t('Главная') },
    { to: '/about', node: t('О сайте') },
  ];

  return (
    <nav className={classNames(styles, 'navbar', {}, [className])}>
      <div className={styles['links']}>
        {links.map(({ to, node }) => (
          <AppLink key={to} to={to}>
            {node}
          </AppLink>
        ))}
      </div>
    </nav>
  );
}
