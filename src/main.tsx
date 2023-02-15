import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './routes/root'
import Home from './routes/home'
import About from './routes/about'
import Projects from './routes/projects'
import Capabilities from './routes/capabilities'
import Contact from './routes/contact'
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/capabilities',
                element: <Capabilities />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
