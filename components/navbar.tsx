import React, { useState, useEffect } from 'react';


const NavBar = () => {

  return (
    <nav
      className="static top-0 shadow-lg rounded-lg mx-10 bg-slate-100"
    >
      <div className="flex flex-row justify-end items-center p-10">
        <div>
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-2 pr-10">Projects</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-2 pr-10">Contact</button>
        </div>
        <div className="border-slate-500 border-solid border-4 rounded-xl">
          <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-2 pl-5 pr-5">Resume</button>
        </div>
      </div>
      <div>
        <h1 className="flex flex-row justify-start p-10 text-4xl font-bold font-cursive text-center text-sky-700 absolute top-2 ">Sergey Moraru</h1>
      </div>
    </nav>
  );
};

export default NavBar;
