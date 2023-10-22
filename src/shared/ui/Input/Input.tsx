import { memo, useState } from 'react';
import { InputProps } from './InputProps';
import { classNames } from '@/shared/lib';
import styles from './Input.module.scss';

export const Input = memo(function Input(props: InputProps) {
  const { className = '', value = '', onChange, placeholder, autoFocus = false, ...other } = props;

  const [focused, setFocused] = useState(autoFocus);
  const [caretPos, setCaretPos] = useState(0);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // eslint-disable-next-line
  const onSelect = (e: any) => {
    setCaretPos(e?.target?.selectionStart * 9 || 0);
  };

  return (
    <div className={styles['input-wrapper']}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles['caret-wrapper']}>
        <div
          className={classNames(styles, 'caret', { focused })}
          style={{ left: `${caretPos}px` }}
        ></div>
        <input
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange && ((e) => onChange(e.target.value))}
          onSelect={onSelect}
          autoFocus={autoFocus}
          className={classNames(styles, 'input', {}, [className])}
          {...other}
        />
      </div>
    </div>
  );
});
