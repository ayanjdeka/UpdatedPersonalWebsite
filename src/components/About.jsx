import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css/animate.css";
const About = () => {
    return (
        
        <div
            name="about"
            id="about"
            className="w-screen h-screen bg-[#0a192f] text-gray-300"
        >
            <ScrollAnimation animateIn="animate__animated animate__zoomIn">
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
                        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" delay = {1000}>
                        <div className="sm:text-right text-4xl font-bold">
                            Welcome! My name is Ayan Deka!
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" delay = {1250}>
                        <div>
                            <p>
                                I am an junior majoring in Computer Engineering and minoring in Economics at UIUC. I have taken many relevant courses such
                                as Data Structures, Algorithms and Models of Computation, Computer Systems Engineering, and Databases.
                                Last summer, I interned at Tinder as a SWE intern, and am continously looking for opportunities to expand my knowledge.
                            </p>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
        
    );
};
export default About;