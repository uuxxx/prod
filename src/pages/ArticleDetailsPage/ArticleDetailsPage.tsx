import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetailsPageProps } from './ArticleDetailsPageProps';
import { classNames, useAppSelector } from '@/shared/lib';
import { PrivateRoute } from '@/features/PrivateRoute/PrivateRoute';
import { getUserAuthData } from '@/entities/User';
import styles from './ArticleDetailsPage.module.scss';

function ArticleDetailsPage(props: ArticleDetailsPageProps) {
  const { className = '' } = props;
  const { t } = useTranslation('article_details_page');

  const user = useAppSelector(getUserAuthData);

  return (
    <PrivateRoute isAvailable={!!user}>
      <div className={classNames(styles, 'article-details-page', {}, [className])}>
        {t('ArticleDetailsPage')}
      </div>
    </PrivateRoute>
  );
}

export default memo(ArticleDetailsPage);
