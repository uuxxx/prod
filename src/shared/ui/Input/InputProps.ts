import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export interface InputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
}
