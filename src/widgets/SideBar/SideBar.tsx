import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { SideBarProps } from './SideBarProps';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import styles from './SideBar.module.scss';

export function Sidebar(props: SideBarProps) {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles, 'sidebar', { collapsed }, [className])}
    >
      <div className={classNames(styles, 'links')}>
        <AppLink to={'/'} className={classNames(styles, 'link')}>
          <MainIcon className={classNames(styles, 'link-icon')} />
          <span className={classNames(styles, 'link-text')}>{t('Главная')}</span>
        </AppLink>
        <AppLink to={'/about'} className={classNames(styles, 'link')}>
          <AboutIcon className={classNames(styles, 'link-icon')} />
          <span className={classNames(styles, 'link-text')}>{t('О сайте')}</span>
        </AppLink>
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
