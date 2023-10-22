import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './app/providers/theme';
import { StoreProvider } from './app/providers/store';
import { router } from './app/providers/router';
import '@/shared/config/i18n';
import '@/app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <StoreProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </StoreProvider>
    </React.StrictMode>,
);
