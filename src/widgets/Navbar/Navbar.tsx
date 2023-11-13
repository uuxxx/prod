import { useCallback, useState } from 'react';
import { classNames, useAppDispatch, useAppSelector } from '@/shared/lib';
import { NavbarProps } from './NavbarProps';
import { LoginModal } from '@/features/authByLoginAndPassword/ui/LoginModal';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, userActions } from '@/entities/User';
import styles from './Navbar.module.scss';
import { CreateAccountModal } from '@/features/createAccontWithLoginAndPassword';

export function Navbar(props: NavbarProps) {
  const { className = '' } = props;
  const user = useAppSelector(getUserAuthData);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);

  const toggleLoginModal = useCallback(() => {
    setLoginModalOpen((prev) => !prev);
  }, []);

  const toggleCreateAccountModal = useCallback(() => {
    setCreateAccountModalOpen((prev) => !prev);
  }, []);

  const onSignout = useCallback(() => {
    dispatch(userActions.signout());
  }, [dispatch]);

  if (user) {
    return (
      <nav className={classNames(styles, 'navbar', {}, [className])}>
        <Button onClick={onSignout}>{t('Выйти')}</Button>
      </nav>
    );
  }

  return (
    <nav className={classNames(styles, 'navbar', {}, [className])}>
      <LoginModal open={loginModalOpen} onClose={toggleLoginModal} />
      <CreateAccountModal open={createAccountModalOpen} onClose={toggleCreateAccountModal} />
      <Button onClick={toggleCreateAccountModal} className={styles['create-account-btn']}>
        {t('Зарегистрироваться')}
      </Button>
      <Button onClick={toggleLoginModal}>{t('Войти')}</Button>
    </nav>
  );
}
