import React from 'react';
import Feedback from '../assets/images/feedback.png';
import GithubFinder from '../assets/images/githubFinder.png';
import YoutubeClone from '../assets/images/youtubeClone.png';
const Projects = () => {
  return (
    <div className="my-10 mx-5 p-10 justify-center text-left bg-gray-950 opacity-85">
      <h2 className="mb-4 text-4xl text-center font-extrabold leading-none bg-gradient-to-r bg-gradient-to-r bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent">
        Projects
      </h2>
      <div class="grid lg:grid-cols-3 gap-1 md:grid-cols-1 sm:grid-cols-1 ">
        <div className="card lg:w-96 md:w-72  bg-base-100 shadow-xl">
          <figure>
            <img src={GithubFinder} alt="Github Finder" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Github finder</h2>
            <p>Search for anyone on the github and his or her details.</p>

            <div className="card-actions justify-center">
              <button className="btn btn-primary">
                <a
                  href="https://github-finder-ten-xi.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="https://github.com/puneethnviraat/github-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 md:w-72 bg-base-100 shadow-xl animate-jump-in animate-delay-300 animate-once">
          <figure>
            <img src={Feedback} alt="Feedback app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Feedback app</h2>
            <p>Give feedback and ratings on the service</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a
                  href="https://feedback-app-bice-eight.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="https://github.com/puneethnviraat/feedback-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 md:w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={YoutubeClone} alt="You tube clone" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Youtube clone!</h2>
            <p>This is devloped to learn react</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a
                  href="https://namaste-youtube-rose.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="https://github.com/puneethnviraat/namaste-youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
