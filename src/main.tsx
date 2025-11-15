import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Accueil } from './pages/Accueil';
import { APropos } from './pages/APropos';
import { Services } from './pages/Services';
import { Projets } from './pages/Projets';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import './styles/global.css';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Accueil /> },
      { path: '/a-propos', element: <APropos /> },
      { path: '/services', element: <Services /> },
      { path: '/projets', element: <Projets /> },
      { path: '/contact', element: <Contact /> },
      { path: '/blog', element: <Blog /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
