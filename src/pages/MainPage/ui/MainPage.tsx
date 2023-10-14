import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation('main_page');
  return <div>{t('Главная страница')}</div>;
}
