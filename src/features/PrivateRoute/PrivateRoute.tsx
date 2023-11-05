import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './PrivateRouteProps';

export function PrivateRoute(props: PrivateRouteProps) {
  const { isAvailable, redirectTo = '/', afterRedirect, children } = props;

  useEffect(() => {
    return () => {
      if (afterRedirect && !isAvailable) {
        afterRedirect();
      }
    };
  });

  if (!isAvailable) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
