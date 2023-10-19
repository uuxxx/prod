import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ButtonTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitcherProps } from './LangSwitcherProps';
import styles from './LangSwitcher.module.scss';

export function LangSwitcher(props: LangSwitcherProps) {
  const { className = '', short = false } = props;

  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const lang = t('Язык');

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(styles, 'lang-switcher', {}, [className])}
    >
      {short ? lang.substring(0, 2) : lang}
    </Button>
  );
}
