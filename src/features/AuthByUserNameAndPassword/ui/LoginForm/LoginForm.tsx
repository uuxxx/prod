import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginFormProps } from './LoginFormProps';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import styles from './LoginForm.module.scss';

export function LoginForm(props: LoginFormProps) {
  const { className = '' } = props;
  const { t } = useTranslation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classNames(styles, 'login-form', {}, [className])}>
      <Input
        value={login}
        onChange={setLogin}
        autoFocus={true}
        type="text"
        placeholder={t('Логин')}
      />
      <Input value={password} onChange={setPassword} type="password" placeholder={t('Пароль')} />
      <Button className={styles['signin-btn']}>{t('Войти')}</Button>
    </div>
  );
}
