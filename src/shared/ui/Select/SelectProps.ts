import { SelectHTMLAttributes, OptionHTMLAttributes } from 'react';

export type SelectOption = OptionHTMLAttributes<HTMLOptionElement> & { value: string | number };

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  className?: string;
  options: SelectOption[];
  onChange?: (val: string) => void;
  value?: string;
}
