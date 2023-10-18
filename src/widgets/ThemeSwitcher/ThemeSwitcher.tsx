import { ThemeSwitcherProps } from './ThemeSwitcherProps';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib';
import { useTheme } from '@/app/providers/theme';
import LightThemeIcon from '@/shared/assets/icons/theme-light.svg';
import DarkThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import { Theme } from '@/app/providers/theme';
import styles from './ThemeSwitcher.module.scss';

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className = '' } = props;

  const { toggleTheme, theme } = useTheme();

  const ThemeIcon = theme === Theme.LIGHT ? LightThemeIcon : DarkThemeIcon;

  return (
    <Button onClick={toggleTheme} className={classNames(styles, 'theme-switcher', {}, [className])}>
      <ThemeIcon />
    </Button>
  );
}
