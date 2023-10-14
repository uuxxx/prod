import { classNames } from '@/shared/lib';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const { t } = useTranslation('not_found_page');
  return <div className={classNames(styles, 'not-found-page')}>{t('Страница не найдена')}</div>;
};
