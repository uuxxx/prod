import { useCallback, useRef, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from '@/shared/lib';
import { ProfileCardProps } from './ProfileCardProps';
import { Text } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { profileActions } from '../../model/slice/profileSlice';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Select, SelectOption } from '@/shared/ui/Select';
import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';
import { fetchProfile } from '../../model/services/fetchProfile/fetchProfile';
import styles from './ProfileCard.module.scss';

const selectCountry: SelectOption[] = Object.keys(Country).map((value) => ({
  value,
}));
const selectCurrency: SelectOption[] = Object.keys(Currency).map((value) => ({
  value,
}));

export function ProfileCard(props: ProfileCardProps) {
  const {
    className = '',
    data: { error, isLoading, readonly, formData },
  } = props;

  const { name, surname, age, city, currency, country, photoURL } = formData;

  const { t } = useTranslation('profile_page');

  const dispatch = useAppDispatch();
  const uploadAvatarInputRef = useRef<HTMLInputElement>(null);

  const setName = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 15) {
          return;
        }
        dispatch(profileActions.setFormData({ name: value }));
      },
      [dispatch],
  );

  const setSurname = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 15) {
          return;
        }
        dispatch(profileActions.setFormData({ surname: value }));
      },
      [dispatch],
  );

  const setAge = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 3) {
          return;
        }
        dispatch(profileActions.setFormData({ age: value }));
      },
      [dispatch],
  );

  const setCity = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 15) {
          return;
        }
        dispatch(profileActions.setFormData({ city: value }));
      },
      [dispatch],
  );

  const setCountry = useCallback(
      (value: string) => {
        dispatch(profileActions.setFormData({ country: value as Country }));
      },
      [dispatch],
  );

  const setCurrency = useCallback(
      (value: string) => {
        dispatch(profileActions.setFormData({ currency: value as Currency }));
      },
      [dispatch],
  );

  const onTryAgainButton = useCallback(() => {
    dispatch(profileActions.resetAll());
    dispatch(fetchProfile());
  }, [dispatch]);

  const onAvatarClick = useCallback(() => {
    uploadAvatarInputRef.current?.click();
  }, []);

  const onChangeAvatar = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
          const file = files[0];
          if (!file.type.includes('image')) return;
          dispatch(profileActions.setFormData({ photoURL: URL.createObjectURL(file) }));
        }
      },
      [dispatch],
  );

  if (isLoading) {
    return (
      <div className={classNames(styles, 'profile-card', {}, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles, 'profile-card', {}, [className])}>
        <Text align="center" theme={'error'} title={t(error)} />
        <Button className={styles['try-again-button']} onClick={onTryAgainButton}>
          {t('Попробовать еще раз')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles, 'profile-card', {}, [className])}>
      <Avatar
        maskText={readonly ? undefined : 'Загрузить фото'}
        onClick={onAvatarClick}
        src={photoURL || undefined}
      />
      {!readonly && (
        <Input
          ref={uploadAvatarInputRef}
          onChange={onChangeAvatar}
          type={'file'}
          className={styles.hidden}
        />
      )}
      <div className={styles.inputs}>
        <Input value={name || ''} onChange={setName} placeholder={t('Имя')} readOnly={readonly} />
        <Input
          value={surname || ''}
          onChange={setSurname}
          placeholder={t('Фамилия')}
          readOnly={readonly}
        />
        <Input value={age || ''} onChange={setAge} placeholder={t('Возраст')} readOnly={readonly} />
        <Input value={city || ''} onChange={setCity} placeholder={t('Город')} readOnly={readonly} />
        <Select
          name={t('Страна')}
          value={country}
          onChange={setCountry}
          options={selectCountry}
          disabled={readonly}
        />
        <Select
          name={t('Валюта')}
          value={currency}
          onChange={setCurrency}
          options={selectCurrency}
          disabled={readonly}
        />
      </div>
    </div>
  );
}
