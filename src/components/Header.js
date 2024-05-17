import React from 'react';
import Navbar from './Navbar';
import Resume from '../assets/Resume-Puneeth-N.pdf';
import { FaArrowAltCircleDown } from 'react-icons/fa';
const Header = () => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center h-full  bg-fixed bg-hero ">
      <Navbar />

      <div className="mb-4 my-10 mx-5 p-10 h-2/3 bg-gray-950 opacity-85  text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl dark:text-white animate-wiggle ">
          Hi, I'm Puneeth
        </h1>
        <div className="text-center ">
          <p className="via-purple-100  text-xl sm:px-14 sm:m-5 dark:text-white m-10  ">
            Greetings!🙏🏼, I'm a passionate full-stack web developer with over
            eight years of hands-on experience in designing new features from
            ideation to production, implementation of wireframes and design
            flows into high performance software applications. I take into
            consideration the user experience while writing reusable and
            efficient code. I passionately combine good design, technology, and
            innovation in all my projects, which I like to accompany from the
            first idea to release. Currently I'm looking for new opportunities…
          </p>
          <div className="flex justifiy-center cursor-pointer items-center animate-bounce  mx-[42%] mt-5">
            <FaArrowAltCircleDown className="m-2" />
            <a href={Resume} download={Resume} target="_blank" rel="noreferrer">
              <h2 className="text-xl font-light text-white py-3">profile</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
