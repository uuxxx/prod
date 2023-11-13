import { ArticleCodeBlockProps } from './ArticleCodeBlockProps';
import { Button } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import styles from './ArticleCodeBlock.module.scss';
import { Icon } from '@/shared/ui/Icon';

export function ArticleCodeBlock(props: ArticleCodeBlockProps) {
  const { code } = props;

  const onCopy = () => navigator.clipboard.writeText(code);

  return (
    <div className={styles.wrapper}>
      <Button onClick={onCopy} className={styles['copy-btn']}>
        <Icon Svg={CopyIcon} />
      </Button>
      <pre className={styles['code-block']}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
