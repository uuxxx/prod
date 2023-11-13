import { Text } from '@/shared/ui/Text';
import { ArticleTextBlockProps } from './ArticleTextBlockProps';
import styles from './ArticleTextBlock.module.scss';

export function ArticleTextBlock(props: ArticleTextBlockProps) {
  const { title, paragraphs } = props;
  return (
    <div className={styles['margin-top']}>
      <Text title={title} />
      {paragraphs.map((text, i) => (
        <Text className={styles['margin-top']} key={i} text={text} />
      ))}
    </div>
  );
}
