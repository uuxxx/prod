import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginModalProps } from './LoginModalProps';
import { classNames } from '@/shared/lib';
import { LoginForm } from '../LoginForm';
import styles from './LoginModal.module.scss';

export function LoginModal(props: LoginModalProps) {
  const { open, onClose, className = '' } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      lazy
      className={classNames(styles, 'login-modal', {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
}
