import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function AnimationObserver({ children }) {

  let location = useLocation()
  useEffect(() => {
    const animationOnScroll = document.querySelectorAll('.animation');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        } 
      });
    }, { threshold: 0.25});

    animationOnScroll.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animationOnScroll.forEach((element) => {
        observer.unobserve(element);
      });
      
    };
  }, [location]);

  return <>{children}</>;
}

export default AnimationObserver;
