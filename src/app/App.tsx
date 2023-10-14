import { Outlet } from 'react-router-dom';
import { useTheme } from './providers/theme';
import { Suspense } from 'react';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/SideBar';
import { AppFallback } from '@/widgets/AppFallback';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Suspense fallback={<AppFallback />}>
          <div className="page-wrapper">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};
