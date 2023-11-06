import { memo, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoginFormProps } from './LoginFormProps';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { authByUsernameAndPassword } from '../../model/services/authByUsername/authByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { Text } from '@/shared/ui/Text';
import { getLogin } from '../../model/selectors/getLogin/getLogin';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getError } from '../../model/selectors/getError/getError';
import { getLoadingStatus } from '../../model/selectors/getLoadingStatus/getLoadingStatus';
import { WithAsyncReduxReducer } from '@/shared/lib/WithAsyncReduxReducer';
import styles from './LoginForm.module.scss';

export default memo(function LoginForm(props: LoginFormProps) {
  const { className = '', onSuccessLogin } = props;

  const { t } = useTranslation('login_modal');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = useAppSelector(getLogin);
  const password = useAppSelector(getPassword);
  const error = useAppSelector(getError);
  const isLoading = useAppSelector(getLoadingStatus);

  const setLogin = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(loginActions.setUsername(value));
      },
      [dispatch],
  );
  const setPassword = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(loginActions.setPassword(value));
      },
      [dispatch],
  );

  const onSubmit = useCallback(async () => {
    const result = await dispatch(authByUsernameAndPassword({ email: login, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccessLogin();
      navigate('/profile');
    }
  }, [dispatch, login, password, onSuccessLogin, navigate]);

  return (
    // @ts-ignore
    <WithAsyncReduxReducer removeAfterUnmount reducers={{ loginForm: loginReducer }}>
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
    </WithAsyncReduxReducer>
  );
});
