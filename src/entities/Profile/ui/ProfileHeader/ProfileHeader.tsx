import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { ProfileHeaderProps } from './ProfileHeaderProps';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { saveProfile } from '../../model/services/saveProfile/saveProfile';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import styles from './ProfileHeader.module.scss';

export function ProfileHeader(props: ProfileHeaderProps) {
  const { className = '' } = props;
  const { t } = useTranslation('profile_page');
  const readonly = useAppSelector(getProfileReadonly);
  const { initialData, formData } = useAppSelector(getProfileData);
  const dispatch = useAppDispatch();

  const toggleEdit = useCallback(() => {
    dispatch(profileActions.toggleReadonly());
  }, [dispatch]);

  const toggleCancel = useCallback(() => {
    dispatch(profileActions.toggleReadonly());
    dispatch(profileActions.resetFormDataToInitial());
  }, [dispatch]);

  const toggleSave = useCallback(() => {
    dispatch(profileActions.toggleReadonly());
    dispatch(saveProfile());
  }, [dispatch]);

  const isSaveBtnDisabled = useMemo(() => {
    return JSON.stringify(initialData) === JSON.stringify(formData);
  }, [initialData, formData]);

  return (
    <div className={classNames(styles, 'profile-header', {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button theme={'outlined'} onClick={toggleEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={styles['btns']}>
          <Button disabled={isSaveBtnDisabled} theme={'outlined'} onClick={toggleSave}>
            {t('Cохранить')}
          </Button>
          <Button theme={'cancel'} onClick={toggleCancel}>
            {t('Сбросить')}
          </Button>
        </div>
      )}
    </div>
  );
}
