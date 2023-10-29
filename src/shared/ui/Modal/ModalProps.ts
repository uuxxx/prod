import { PropsWithChildren } from 'react';
import { TimeoutProps } from 'react-transition-group/Transition';

export type ModalProps = {
  className?: string;
  close: () => void;
} & PropsWithChildren &
  TimeoutProps<HTMLDivElement>;
