import { classNames } from '@/shared/lib';
import styles from './Loader.module.scss';
import { LoaderProps } from './LoaderProps';

export function Loader(props: LoaderProps) {
  const { className = '' } = props;
  return <span className={classNames(styles, 'loader', {}, [className])}></span>;
}
