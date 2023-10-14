import { LinkProps } from 'react-router-dom';
import { AppLinkTheme } from './AppLinkTheme';

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
