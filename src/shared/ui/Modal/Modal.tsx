import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { classNames } from '@/shared/lib';
import { ModalProps } from './ModalProps';
import { useTheme } from '@/app/providers/theme';
import styles from './Modal.module.scss';

export function Modal(props: ModalProps) {
  const { className = '', children, open, onClose } = props;

  const { theme } = useTheme();

  const modalRef = useRef(null);

  return createPortal(
    <>
      <div onClick={onClose} className={classNames(styles, 'overlay', { open })}></div>
      <Transition in={open} timeout={300} nodeRef={modalRef}>
        {(state) => (
          <div
            ref={modalRef}
            className={classNames(styles, 'modal', { open, [state]: true }, [className, theme])}
          >
            {children}
          </div>
        )}
      </Transition>
    </>,
    document.getElementById('modals')!,
  );
}
