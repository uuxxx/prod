import { useMemo, CSSProperties } from 'react';
import { classNames } from '@/shared/lib';
import { AvatarProps } from './AvatarProps';
import styles from './Avatar.module.scss';

export function Avatar(props: AvatarProps) {
  const {
    className = '',
    size = 200,
    bordered = true,
    src = 'https://placehold.co/200x200',
    maskText,
    onClick,
    ...other
  } = props;

  const wrapperStyles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      cursor: maskText ? 'pointer' : 'default',
      borderRadius: bordered ? `${size / 2}px` : 'none',
    };
  }, [size, maskText, bordered]);

  const maskStyles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size / 2}px`,
      ...(bordered ?
        { borderBottomLeftRadius: `${size / 2}px`, borderBottomRightRadius: `${size / 2}px` } :
        {}),
    };
  }, [size, bordered]);

  const imgStyles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: bordered ? `${size / 2}px` : 'none',
    };
  }, [size, bordered]);

  return (
    <div
      onClick={onClick}
      style={wrapperStyles}
      className={classNames(styles, 'wrapper', {}, [className])}
    >
      {maskText && (
        <div style={maskStyles} className={classNames(styles, 'mask')}>
          {maskText}
        </div>
      )}
      <img src={src} style={imgStyles} className={classNames(styles, 'img')} {...other} />
    </div>
  );
}
