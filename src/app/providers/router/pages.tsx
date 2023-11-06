import { RouteObject } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';

export const PAGES: RouteObject[] = [
  { path: '', element: <MainPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'profile', element: <ProfilePage /> },
  { path: 'articles', element: <ArticlesPage /> },
  { path: 'article_details:id', element: <ArticleDetailsPage /> },
  { path: '*', element: <NotFound /> },
];
