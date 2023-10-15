import { ErrorProps } from './ErrorProps';
import { classNames } from '@/shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import styles from './Error.module.scss';

export function Error(props: ErrorProps) {
  const { className = '' } = props;
  const { t } = useTranslation('error_page');
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(styles, 'error', {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
}
