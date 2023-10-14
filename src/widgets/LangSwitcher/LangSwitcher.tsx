import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ButtonTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitcherProps } from './LangSwitcherProps';

export function LangSwitcher(props: LangSwitcherProps) {
  const {
    className = '',
  } = props;

  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={toggle} theme={ButtonTheme.CLEAR}>{t('Язык')}</Button>
  );
}
