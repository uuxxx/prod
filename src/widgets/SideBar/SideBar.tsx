import { useState } from 'react';
import { classNames } from '@/shared/lib';
import { SideBarProps } from './SideBarProps';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { SidebareItemType, SidebarItem } from './SidebarItem';
import styles from './SideBar.module.scss';

const SIDEBAR_ITEMS: SidebareItemType[] = [
  { name: 'Главная', path: '/', SVGIcon: MainIcon },
  {
    name: 'О сайте',
    path: '/about',
    SVGIcon: AboutIcon,
  },
  { name: 'Профиль', path: '/profile', SVGIcon: ProfileIcon },
];

export function Sidebar(props: SideBarProps) {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles, 'sidebar', { collapsed }, [className])}
    >
      <div className={classNames(styles, 'links')}>
        {SIDEBAR_ITEMS.map(({ path, name, SVGIcon }) => (
          <SidebarItem key={name} path={path} name={name} SVGIcon={SVGIcon} collapsed={collapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>

      <Button
        className={classNames(styles, 'toggle-btn')}
        size={'large'}
        onClick={toggleCollapse}
        data-testid="sidebar-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
}
