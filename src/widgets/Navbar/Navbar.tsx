import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib';
import { NavbarProps } from './NavbarProps';
import { LoginModal } from '@/features/AuthByUserNameAndPassword/ui/LoginModal';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

export function Navbar(props: NavbarProps) {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = useCallback(() => {
    setLoginModalOpen((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(styles, 'navbar', {}, [className])}>
      <LoginModal open={loginModalOpen} onClose={toggleLoginModal} />
      <Button onClick={toggleLoginModal}>{t('Войти')}</Button>
    </nav>
  );
}
