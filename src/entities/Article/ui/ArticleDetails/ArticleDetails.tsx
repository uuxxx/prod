import { useMemo, useEffect } from 'react';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { ArticleDetailsProps } from './ArticleDetailsProps';
import { fetchArticle } from '../../model/services/fetchArticle';
import { getArticleData, getArticleError, getArticleLoadingStatus } from '../../model/selectors';
import { Loader } from '@/shared/ui/Loader';
import { Text } from '@/shared/ui/Text';
import { WithAsyncReduxReducer } from '@/shared/lib/WithAsyncReduxReducer';
import { articleReducer } from '../../model/slice/ArticleSlice';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import styles from './ArticleDetails.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlockType } from '../../types/Article';
import { ArticleTextBlock } from '../ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock';

export function ArticleDetails(props: ArticleDetailsProps) {
  const { id, className = '' } = props;

  const dispatch = useAppDispatch();

  const data = useAppSelector(getArticleData);
  const isLoading = useAppSelector(getArticleLoadingStatus);
  const error = useAppSelector(getArticleError);

  useEffect(() => {
    dispatch(fetchArticle(id));
  }, [dispatch, id]);

  const articleBlocks = useMemo(() => {
    return data?.blocks?.map((el) => {
      switch (el.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlock key={el.code} code={el.code} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlock key={el.title} src={el.src} title={el.title} />;
        case ArticleBlockType.TEXT:
          return <ArticleTextBlock key={el.title} title={el.title} paragraphs={el.paragraphs} />;
        default:
          return null;
      }
    });
  }, [data]);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <Text title={error} theme={'error'} />;
  } else {
    content = (
      <>
        <Avatar src={data?.img} className={styles.avatar} />
        <Text title={data?.title} text={data?.subtitle} className={styles['article-header']} />
        <div className={styles.stats}>
          <Icon Svg={EyeIcon} />
          <Text text={data?.views} />
        </div>

        <div className={styles.stats}>
          <Icon Svg={CalendarIcon} />
          <Text text={data?.createdAt} />
        </div>

        <div className={styles.content}>{articleBlocks}</div>
      </>
    );
  }

  return (
    <WithAsyncReduxReducer
      removeAfterUnmount
      // @ts-ignore
      reducers={{ article: articleReducer }}
    >
      <div
        className={classNames(
            styles,
            'article-details',
            {
              ['center-items']: Boolean(isLoading || error),
            },
            [className],
        )}
      >
        {content}
      </div>
    </WithAsyncReduxReducer>
  );
}
