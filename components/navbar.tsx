import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isTop = scrollTop === 0;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const homeButtonClick = () => {
    const homeSection = document.getElementById('homeSection');
    if (homeSection) {
        window.scrollTo({
            top: homeSection.offsetTop,
            behavior: 'smooth',
        });
    }
    };


  return (
    <nav
      className={`fixed top-0 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ zIndex: isScrolled ? 999 : 'auto' }}
    >
      <div className="flex flex-row justify-center items-center relative">
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">Home</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">About</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">Projects</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">Resume</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
