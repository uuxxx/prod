import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { CreateAccountModalProps } from './CreateAccountModalProps';
import { classNames } from '@/shared/lib';
import { CreateAccountFormLazy } from '../CreateAccountForm';
import { Loader } from '@/shared/ui/Loader';
import styles from './CreateAccountModal.module.scss';

export function CreateAccountModal(props: CreateAccountModalProps) {
  const { open, onClose, className = '' } = props;

  return (
    <Modal
      timeout={300}
      in={open}
      close={onClose}
      mountOnEnter
      unmountOnExit
      className={classNames(styles, 'create-account-modal', {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <CreateAccountFormLazy onSuccessRegistration={onClose} />
      </Suspense>
    </Modal>
  );
}
