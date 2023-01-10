import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const Skills = () => {
    return (
        <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className='w-full flex justify-center items-center flex-col mb-7'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                <p className='py-4 text-2xl'>I am continously learning new technologies, and here is a (still expanding) list of everything I have worked on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Kotlin</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Neo4j</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>EJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Linux</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>x86 Architecture</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;