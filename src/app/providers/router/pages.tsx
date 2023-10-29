import { RouteObject } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';

export const PAGES: RouteObject[] = [
  { path: '', element: <MainPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'profile', element: <ProfilePage /> },
  { path: '*', element: <NotFound /> },
];
