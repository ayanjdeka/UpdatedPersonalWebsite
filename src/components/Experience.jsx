import React from 'react';
import tinder from '../assets/tinder.png'
import nobe from '../assets/nobe.jpg'
import texas from '../assets/texasinstruments.jpg'


import Fade from 'react-reveal/Fade'
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css/animate.css";

const Experience = () => {
    return (
        <div name='experience' className='w-screen md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <ScrollAnimation animateIn="animate__animated animate__flash" duration={1.5}>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Experience
                    </p>
                    <p className='py-6 text-2xl'>These were the past experiences that I have had</p>
                </div>
                </ScrollAnimation>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            style={{ backgroundImage: `url(${tinder})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    Tinder
                                </span>
                                <p className='text-center text-base'>I interned in Tinder during the summer 2022 and 2023 as an developer on the Discovery Team.
                                I worked with features and analytics tracking related to the app, and these features would be centered around everything that happens
                                before a user swipes and matches.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${nobe})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                National Organization of Business and Engineering
                            </span>
                            <p className='text-center text-sm'>This is a club in my university where I developed collaboritively with Node.js, EJS, HTML,
                            CSS, and Stripe APIs to build a website which mimics an eccommerce setting.</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${texas})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 transition-all duration-500 cursor-pointer'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Texas Instruments
                            </span>
                            <p className='text-center text-sm'>As a freshman, I was involved in research with Texas Instruments. The task was to learn more about robotics with the product
                            of the TI-RSLK. I worked collaboritively with other students to build this robot from the scratch, and then later implemented our own sensors so that it could respond
                            to sound, light, and objects detected in the way.</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                  </div>
            </div>
        </div>
    );
};
export default Experience;