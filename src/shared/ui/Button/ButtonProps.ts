import { ButtonHTMLAttributes } from 'react';
import { ButtonTheme } from './ButtonTheme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}
