import { RouteObject } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFound } from '@/pages/NotFound';

export const PAGES: RouteObject[] = [
  { path: '', element: <MainPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: '*', element: <NotFound /> },
];
