import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Flip from 'react-reveal/Flip'
import Rotate from 'react-reveal/Rotate'
const Skills = () => {
    return (
        <div name='skills' className='w-screen h-full bg-[#0a192f] text-gray-300'>
            <div className='w-full flex justify-center items-center flex-col mb-7'>
                <Flip duration = {2000}>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                </Flip>
                <Rotate duration = {1000} delay = {1000}>
                <p className='py-4 text-2xl'>I am continously learning new technologies, and here is a (still expanding) list of everything I have worked with</p>
                </Rotate>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Java</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C++</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Python</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>JavaScript</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Kotlin</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C#</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>C</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>SQL</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>HTML</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>CSS</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>MongoDB</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Neo4J</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>EJS</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Node.js</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>React</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Bootstrap</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Git</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>AWS</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>Linux</p>
                </div>
                </Wobble>
                <Wobble duration = {2500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <p className='my-4'>x86 Architecture</p>
                </div>
                </Wobble>
            </div>
        </div>
    );
};

export default Skills;