import React from "react";
import Typed from "react-typed"

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
            
                <Typed
                strings={[
                    "Hi! I am an ambitious person.",
                    "Hi! I am a passionate student",
                    "Hi! I am a software developer",
                    "Hi! I am full of various ideas",
                    "Hi! I am an enthusiastic learner",
                    "Hi! I am Ayan Deka"
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
                />
              
            </div>
            <div>
              <p>
              I am an junior majoring in Computer Engineering and minoring in Economics at UIUC. I have taken many relevant courses such
                as Data Structures, Algorithms and Models of Computation, Computer Systems Engineering, and Databases. Last summer,
                I intered at Tinder, and am continously looking for opportunities to expand my knowledge. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;