import React from 'react';

const Navbar = () => {
  return (
    <div className=" bg-base-200 bg-opacity-25  p-4 z-0">
      <div className="flex flex-nowrap flex-row z-20 ">
        <div className="w-1/3 grow">
          <a className="mx-2 text-xl text-white font-medium">Your Puneeth</a>
        </div>
        <div className="w-2/3   grow inline-flex justify-end">
          <div className="nav-item">
            <p>About</p>
          </div>
          <div className="nav-item">
            <p>Projects</p>
          </div>
          <div className="nav-item">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
