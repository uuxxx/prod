import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/App";
import { NotFound } from "../pages/NotFound/NotFound";



export const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <NotFound />,
    children: [
      {path: '', lazy: async () => {
        const {MainPage} = await import('../pages/MainPage/MainPage')
        return {
          Component: MainPage,
        }
      }},
      {path: 'about', lazy: async () => {
        const {AboutPage} = await import('../pages/AboutPage/AboutPage')
        return {
          Component: AboutPage,
        }
      }}
    ]
  },
])