import React from 'react';
import Gmail from '../assets/images/icons/gmail.png';
import Phone from '../assets/images/icons/phone-call.png';
import Linkdin from '../assets/images/icons/linkedin.png';
import Twitter from '../assets/images/icons/twitter.png';
import Map from '../assets/images/icons/map.png';
const Contact = () => {
  return (
    <div className="m-4">
      <div className=" card  bg-base-100 shadow-xl">
        <h2 className="mt-4 text-4xl text-center font-extrabold leading-none bg-gradient-to-r bg-gradient-to-r bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="m-3 text-center">
          <p className="text-2xl">
            Please use any way to get in touch with me at any time.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="md:grid-cols-1 sm:grid-cols-2 md:border-r-2 md:pr-10 border-blue-900">
              <p className="md:float-right sm:float-start">
                <img
                  src={Map}
                  alt="Type script"
                  width={36}
                  className="m-3 md:float-right "
                />
                <br />
                <span className=" md:float-right md:text-right sm:text-left sm:float-start text-xl">
                  #374, 17th cross, <br /> 1st main road, Aravindha nagara
                  <br />
                  Mysore 570023.
                </span>
              </p>
            </div>
            <ul className="md:grid-cols-1 ">
              <li className="flex m-2 justify-right items-center ">
                <img
                  src={Phone}
                  alt="Type script"
                  width={36}
                  className="m-3 float-right"
                />
                <p className="text-xl">+91 89705 85459</p>
              </li>
              <li className="flex m-2 justify-right items-center">
                <img
                  src={Gmail}
                  alt="puneeth Gmail"
                  width={36}
                  className="m-2"
                />
                <p className="text-xl">puneethnviraat@gmail.com</p>
              </li>
              <li className="flex m-2 justify-right items-center">
                <img
                  src={Linkdin}
                  alt="Type script"
                  width={36}
                  className="m-2"
                />
                <p className="text-xl cursor-pointer">
                  <a
                    className=""
                    href="
                  https://www.linkedin.com/in/puneeth-n-796630ab/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </li>
              <li className="flex m-2 justify-right items-center">
                <img
                  src={Twitter}
                  alt="Type script"
                  width={36}
                  className="m-2"
                />
                <p className="text-xl">Twitter</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
