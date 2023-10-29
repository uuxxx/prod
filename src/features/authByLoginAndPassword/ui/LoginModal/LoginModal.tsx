import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { LoginModalProps } from './LoginModalProps';
import { classNames } from '@/shared/lib';
import { LoginFormLazy } from '../LoginForm';
import { Loader } from '@/shared/ui/Loader';
import styles from './LoginModal.module.scss';

export function LoginModal(props: LoginModalProps) {
  const { open, onClose, className = '' } = props;

  return (
    <Modal
      timeout={300}
      in={open}
      close={onClose}
      mountOnEnter
      unmountOnExit
      className={classNames(styles, 'login-modal', {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccessLogin={onClose} />
      </Suspense>
    </Modal>
  );
}
