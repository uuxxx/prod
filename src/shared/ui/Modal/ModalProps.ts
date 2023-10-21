import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  open: boolean;
  onClose: () => void;
}
