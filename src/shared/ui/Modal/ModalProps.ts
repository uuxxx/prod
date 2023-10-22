import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  lazy?: boolean;
  removeFromDOMWhenClosed?: boolean;
  open: boolean;
  onClose: () => void;
}
