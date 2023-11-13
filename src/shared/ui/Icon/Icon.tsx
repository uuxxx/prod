import { IconProps } from './IconProps';
import styles from './Icon.module.scss';

export function Icon(props: IconProps) {
  const { Svg } = props;

  return <Svg className={styles.icon} />;
}
