import React from 'react';
import JsIcons from '../assets/images/icons/JsIcon.png';
import Github from '../assets/images/icons/github.png';
import NodeJs from '../assets/images/icons/nodejs.png';
import Sass from '../assets/images/icons/SASS.png';
import Vscode from '../assets/images/icons/VSCode.png';
import Angular from '../assets/images/icons/angularjs.png';
import Bootstrap from '../assets/images/icons/bootstrap.png';
import ReactJS from '../assets/images/icons/react.png';
import CSS from '../assets/images/icons/css.png';
import Mongodb from '../assets/images/icons/mongodb.png';
import Html from '../assets/images/icons/html.png';
import Js from '../assets/images/icons/js.png';
const Skills = () => {
  return (
    <div className="my-5 mx-5 p-10 justify-center text-left ">
      <div class="grid lg:grid-cols-2 gap-1 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="card bg-base-100 shadow-xl">
          <h2 className="mt-3 text-3xl text-center font-extrabold leading-none bg-gradient-to-r bg-gradient-to-r bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="card-body text-center">
            <p className="text-2xl">
              These are the technologies in which I am proficient.
            </p>
            <ul className="flex flex-row flex-wrap text-center">
              <li className="flex m-3 justify-center items-center">
                <img src={Html} alt="Type script" width={48} className="" />
                <p className="text-xl">HTML</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={Js} alt="Type script" width={48} className="" />
                <p className="text-xl">Javascript</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={JsIcons} alt="Type script" width={48} className="" />
                <p className="text-xl">Type Script</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={ReactJS} alt="Type script" width={48} className="" />
                <p className="text-xl">React JS</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={CSS} alt="Type script" width={48} className="" />
                <p className="text-xl">CSS</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={Sass} alt="Type script" width={48} className="" />
                <p className="text-xl">SASS</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={Github} alt="Type script" width={48} className="" />
                <p className="text-xl">Github</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={NodeJs} alt="Type script" width={48} className="" />
                <p className="text-xl">Node Js</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={Angular} alt="Type script" width={48} className="" />
                <p className="text-xl">Angular JS</p>
              </li>
              <li className="flex m-3 justify-center items-center">
                <img src={Mongodb} alt="Type script" width={48} className="" />
                <p className="text-xl">MongoDB</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" card  bg-base-100 shadow-xl">
          <h2 className="mt-3 text-3xl text-center font-extrabold leading-none bg-gradient-to-r bg-gradient-to-r bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent">
            Hobbies
          </h2>
          <div className="m-3 text-center">
            <p className="text-2xl">
              When I have leisure time, I like to engage in these interests.
            </p>
            <ul className="text-left m-2 p-2 list-disc text-lg">
              <li className=""> I love to work in farm field.</li>
              <li className=""> Staying fit and healthy is my Priority.</li>
              <li className=""> Spending Quality time with family.</li>
              <li className="">
                Expanding my knowledge of both present and emerging technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
