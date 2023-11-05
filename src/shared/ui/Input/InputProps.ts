import { InputHTMLAttributes } from 'react';

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends HTMLInputProps {
  value?: string;
}
