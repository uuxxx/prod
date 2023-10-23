import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginFormProps } from './LoginFormProps';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { authByUsernameAndPassword } from '../../model/services/authByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import { Text } from '@/shared/ui/Text';
import { getLogin } from '../../model/selectors/getLogin';
import { getPassword } from '../../model/selectors/getPassword';
import { getError } from '../../model/selectors/getError';
import { getLoadingStatus } from '../../model/selectors/getLoadingStatus';
import styles from './LoginForm.module.scss';

export const LoginForm = memo(function LoginForm(props: LoginFormProps) {
  const { className = '' } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const login = useAppSelector(getLogin);
  const password = useAppSelector(getPassword);
  const error = useAppSelector(getError);
  const isLoading = useAppSelector(getLoadingStatus);

  const setLogin = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const setPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    dispatch(authByUsernameAndPassword({ email: login, password }));
  }, [dispatch, login, password]);

  return (
    <div className={classNames(styles, 'login-form', {}, [className])}>
      <Text title={t('Авторизация')} />
      {error && <Text text={error} theme={'error'} />}
      <Input
        value={login}
        onChange={setLogin}
        autoFocus={true}
        type="text"
        placeholder={t('Логин')}
      />
      <Input value={password} onChange={setPassword} type="password" placeholder={t('Пароль')} />
      <Button onClick={onSubmit} disabled={isLoading} className={styles['signin-btn']}>
        {t('Войти')}
      </Button>
    </div>
  );
});
