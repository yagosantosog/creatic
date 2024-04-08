import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AboutUsDetails from './pages/aboutUsDetails/AboutUsDetails';
import OurServices from './pages/ourServicesAll/OurServicesAll';
import WhyUs from './pages/whyUsDetails/WhyUsDetails';
import TestimonialAll from './pages/testimonialAll/TestimonialsAll';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: '/aboutUs',
    element: <AboutUsDetails />,
    errorElement: <PageNotFound />
  },
  {
    path: '/ourServices',
    element: <OurServices />
  },
  {
    path: '/whyUs',
    element: <WhyUs />
  },
  {
    path: '/testimonials',
    element: <TestimonialAll />
  },
  {
    path: '/*/*/*',
    element: <PageNotFound />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


