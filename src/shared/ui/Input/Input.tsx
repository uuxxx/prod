import { useState, forwardRef, memo } from 'react';
import { InputProps } from './InputProps';
import { classNames } from '@/shared/lib';
import styles from './Input.module.scss';

const ForwardRefInput = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    className = '',
    value = '',
    onChange,
    placeholder,
    autoFocus = false,
    readOnly = false,
    ...other
  } = props;

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
        {!readOnly && (
          <div
            className={classNames(styles, 'caret', { focused })}
            style={{ left: `${caretPos}px` }}
          ></div>
        )}
        <input
          ref={ref}
          readOnly={readOnly}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onSelect={onSelect}
          autoFocus={autoFocus}
          className={classNames(styles, 'input', { readonly: readOnly }, [className])}
          {...other}
        />
      </div>
    </div>
  );
});

export const Input = memo(ForwardRefInput);
