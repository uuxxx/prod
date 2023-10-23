import { Outlet } from 'react-router-dom';
import { useTheme } from './providers/theme';
import { Suspense, useEffect } from 'react';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/SideBar';
import { AppFallback } from '@/widgets/AppFallback';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { useAppDispatch } from '@/shared/lib';
import { userActions } from '@/entities/User';

export const App = () => {
  const { theme } = useTheme();
  const dispactch = useAppDispatch();

  useEffect(() => {
    dispactch(userActions.initAuthData());
  }, [dispactch]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Suspense fallback={<AppFallback />}>
          <div className="page-wrapper">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </div>
        </Suspense>
      </div>
    </div>
  );
};
