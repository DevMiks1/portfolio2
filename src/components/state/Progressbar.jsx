import React, { useState, useEffect } from 'react';

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight - windowHeight;
      const newProgress = (scrollPosition / pageHeight) * 100;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary z-50"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export default Progressbar;
