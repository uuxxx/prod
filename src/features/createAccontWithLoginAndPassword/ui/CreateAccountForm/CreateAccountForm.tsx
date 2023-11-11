import { memo, useCallback, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { WithAsyncReduxReducer } from '@/shared/lib/WithAsyncReduxReducer';
import { CreateAccountFormProps } from './CreateAccountFormProps';
import {
  createAccountFormActions,
  createAccountFormReducer,
} from '../../model/slice/createAccountFormSlice';
import { getEmail } from '../../model/selectors/getEmail/getEmail';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getReapeatedPassword } from '../../model/selectors/getReapeatedPassword/getReapeatedPassword';
import { createAccontWithEmailAndPassword } from '../../model/services/createAccountWithEmailAndPassword/createAccountWithEmailAndPassword';
import { getError } from '../../model/selectors/getError/getError';
import { getLoading } from '../../model/selectors/getLoading/getLoading';
import styles from './CreateAccountForm.module.scss';
import { Loader } from '@/shared/ui/Loader';
import { useNavigate } from 'react-router-dom';

export default memo(function CreateAccountForm(props: CreateAccountFormProps) {
  const { className = '', onSuccessRegistration = () => {} } = props;

  const { t } = useTranslation('create_account_modal');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(getEmail);
  const password = useAppSelector(getPassword);
  const reapeatedPassword = useAppSelector(getReapeatedPassword);
  const error = useAppSelector(getError);
  const isLoading = useAppSelector(getLoading);

  const onEmailChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(createAccountFormActions.setState({ email: value }));
      },
      [dispatch],
  );

  const onPasswordChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        dispatch(createAccountFormActions.setState({ password: value }));
      },
      [dispatch],
  );

  const onReapeatedPasswordChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        dispatch(createAccountFormActions.setState({ reapeatedPassword: value }));
      },
      [dispatch],
  );

  const onSubmitForm = useCallback(async () => {
    const res = await dispatch(createAccontWithEmailAndPassword());
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccessRegistration();
      navigate('/profile');
    }
  }, [dispatch, onSuccessRegistration, navigate]);

  return (
    <WithAsyncReduxReducer
      removeAfterUnmount
      // @ts-ignore
      reducers={{ createAccountForm: createAccountFormReducer }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classNames(styles, 'create-account-form', {}, [className])}>
          <Text title={t('Регистрация')} />
          {error && <Text theme="error" text={error} />}
          <Input value={email} onChange={onEmailChange} autoFocus={true} placeholder={t('Почта')} />
          <Input
            value={password}
            onChange={onPasswordChange}
            type="password"
            placeholder={t('Пароль')}
          />
          <Input
            value={reapeatedPassword}
            onChange={onReapeatedPasswordChange}
            type="password"
            placeholder={t('Повторите пароль')}
          />
          <Button onClick={onSubmitForm} className={styles['create-account-btn']}>
            {t('Зарегистрироваться')}
          </Button>
        </div>
      )}
    </WithAsyncReduxReducer>
  );
});
