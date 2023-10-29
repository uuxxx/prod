import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarItemProps } from './SidebarItemProps';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib';
import styles from './SidebarItem.module.scss';

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
  const { SVGIcon, name, path, collapsed = false } = props;
  const { t } = useTranslation();
  return (
    <AppLink to={path} className={classNames(styles, 'link', { collapsed })}>
      <SVGIcon className={classNames(styles, 'link-icon')} />
      <span className={classNames(styles, 'link-text')}>{t(name)}</span>
    </AppLink>
  );
});
