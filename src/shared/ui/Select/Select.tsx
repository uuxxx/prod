import { ChangeEvent, memo } from 'react';
import { SelectProps } from './SelectProps';
import { classNames } from '@/shared/lib';
import styles from './Select.module.scss';

export const Select = memo(function Select(props: SelectProps) {
  const {
    className = '',
    name,
    disabled = false,
    options,
    onChange: simplifiedOnChange,
    ...rest
  } = props;

  const onChange =
    simplifiedOnChange &&
    ((e: ChangeEvent<HTMLSelectElement>) => {
      simplifiedOnChange(e.target.value);
    });

  return (
    <label className={styles.label}>
      <span className={styles.name}>{`${name}>`}</span>
      <select
        onChange={onChange}
        className={classNames(styles, 'select', { disabled }, [className])}
        disabled={disabled}
        {...rest}
      >
        {options.map(({ value }) => {
          return (
            <option className={styles.option} key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
});
