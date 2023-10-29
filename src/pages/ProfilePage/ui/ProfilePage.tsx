// import styles from './ProfilePage.module.scss';
import { WithAsyncReduxReducer } from '@/shared/lib/WithAsyncReduxReducer';
import { profileReducer } from '@/entities/Profile';
import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
  const { t } = useTranslation('profile_page');
  return (
    // @ts-ignore
    <WithAsyncReduxReducer reducers={{ profile: profileReducer }}>
      <div>{t('Профиль')}</div>
    </WithAsyncReduxReducer>
  );
}
