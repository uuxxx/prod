import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about_page');

  return <div>{t('О сайте')}</div>;
}
