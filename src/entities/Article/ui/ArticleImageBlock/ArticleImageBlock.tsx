import { ArticleImageBlockProps } from './ArticleImageBlockProps';
import { Text } from '@/shared/ui/Text';
import styles from './ArticleImageBlock.module.scss';

export function ArticleImageBlock(props: ArticleImageBlockProps) {
  const { src, title } = props;
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={title || 'some picture'} />
      <Text text={title} />
    </div>
  );
}
