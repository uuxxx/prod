import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { PAGES } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: PAGES,
  },
]);
