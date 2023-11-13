import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesPageProps } from './ArticlesPageProps';
import { classNames, useAppSelector } from '@/shared/lib';
import { PrivateRoute } from '@/features/PrivateRoute/PrivateRoute';
import { getUserAuthData } from '@/entities/User';
import styles from './ArticlesPage.module.scss';

function ArticlesPage(props: ArticlesPageProps) {
  const { className = '' } = props;
  const { t } = useTranslation('articles_page');

  const user = useAppSelector(getUserAuthData);

  return (
    <PrivateRoute isAvailable={!!user}>
      <div className={classNames(styles, 'articles-page', {}, [className])}>
        {t('ArticlesPage')}
      </div>
    </PrivateRoute>
  );
}

export default memo(ArticlesPage);
