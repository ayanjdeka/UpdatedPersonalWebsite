import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/ayandeka.jpg';
import { Link } from "react-scroll";
import 'animate.css/animate.css'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Typed from 'react-typed'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#0a192f]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          <Typed
              strings={[
                "Hi! I am an ambitious person.",
                "Hi! I am a passionate student.",
                "Hi! I am an enthusiastic learner.",
                "Hi! Welcome to my website!"
              ]}
              typeSpeed={20}
              backSpeed={20}
            />
          </h2>
          
          <Fade left duration = {1000} delay = {8000}>
          <p className="text-gray-500 py-4 max-w-md">
            Hello everyone! Feel free to browse through the various projects and experiences that I have done!
          </p>
          </Fade>
          <Rotate bottom left duration = {1000} delay = {9000}>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
          </Rotate>
        </div>
        <div>
        <Fade right duration = {1000} delay = {8500}>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Home;