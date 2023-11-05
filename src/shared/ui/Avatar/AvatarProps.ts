import { ImgHTMLAttributes, PropsWithChildren } from 'react';

export interface AvatarProps extends PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>> {
  className?: string;
  src?: string;
  size?: number;
  bordered?: boolean;
  maskText?: string;
}
