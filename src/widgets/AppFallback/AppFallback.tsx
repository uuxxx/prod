import { AppFallbackProps } from './AppFallbackProps';
import { classNames } from '@/shared/lib';
import styles from './AppFallback.module.scss';
import { Loader } from '@/shared/ui/Loader';

export function AppFallback(props: AppFallbackProps) {
  const { className = '' } = props;
  return (
    <div className={classNames(styles, 'app-fallback', {}, [className])}>
      <Loader />
    </div>
  );
}
