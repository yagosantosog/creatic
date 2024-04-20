import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AboutUsDetails from './pages/aboutUsDetails/AboutUsDetails';
import OurServices from './pages/ourServicesAll/OurServicesAll';
import WhyUs from './pages/whyUsDetails/WhyUsDetails';
import TestimonialAll from './pages/testimonialAll/TestimonialsAll';
import { AnimationObserver, MouseFollow, ScrollToAnchor } from './components';


function Layout() {
  return (
      <>
        <AnimationObserver >
          <Outlet />
          <ScrollToAnchor />
        </AnimationObserver>
        <MouseFollow />
      </>
  );
}


const router = createBrowserRouter([
{
  element: <Layout/>,
  errorElement: <PageNotFound />,
  children: [
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
    element: <OurServices />,
    errorElement: <PageNotFound />
  },
  {
    path: '/whyUs',
    element: <WhyUs />,
    errorElement: <PageNotFound />
  },
  {
    path: '/testimonials',
    element: <TestimonialAll />,
    errorElement: <PageNotFound />
  },
  {
    path: '/*/*/*',
    element: <PageNotFound />
  }
]}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


