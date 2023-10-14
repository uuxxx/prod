import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './app/providers/theme';
import { router } from './app/providers/router';
import '@/shared/config/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeContextProvider>
        <RouterProvider router={router}/>
      </ThemeContextProvider>
    </React.StrictMode>,
);
