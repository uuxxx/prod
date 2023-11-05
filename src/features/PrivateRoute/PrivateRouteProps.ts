import { PropsWithChildren } from 'react';

export interface PrivateRouteProps extends PropsWithChildren {
  isAvailable: boolean;
  redirectTo?: string;
  afterRedirect?: () => void;
}
