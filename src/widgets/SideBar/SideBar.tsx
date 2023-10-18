import { useState } from 'react';
import { classNames } from '@/shared/lib';
import { SideBarProps } from './SideBarProps';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import styles from './SideBar.module.scss';

export function Sidebar(props: SideBarProps) {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles, 'sidebar', { collapsed }, [className])}
    >
      <div className={styles.switchers}>
        <Button onClick={toggleCollapse} data-testid="sidebar-toggle">
          {t(collapsed ? 'Открыть' : 'Закрыть')}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
