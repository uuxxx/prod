import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'clear' | 'outlined' | 'cancel';
  size?: 'medium' | 'large' | 'x-large';
}
