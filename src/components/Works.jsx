import React from 'react';
import algotrading from '../assets/algorithmictrading.jpg';
import flight from '../assets/flights.jpg'
import megamania from '../assets/Megamania.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import nfl from '../assets/nfl.jpg'
import financial from '../assets/financialmodels.jpg'
import linux from '../assets/Linux.jpg'
import minesweeper from '../assets/minesweeper.png'
import paint from '../assets/paint.png'
import maze from '../assets/maze.jpg'
import website from '../assets/personalwebsite.jpg'
import weather from '../assets/weather.jpg'
import gui from '../assets/texteditor.png'
import juliasets from '../assets/juliasets.jpg'
import gps from '../assets/gpsblog.png'
import tetris from '../assets/tetris.png'
import lc3 from '../assets/lc3.png'
import cnn from '../assets/cnn.png'
import sudoku from '../assets/s.png'
import calculator from '../assets/postfixcalculator.png'
import gameOfLife from '../assets/gameoflife.png'
import image from '../assets/game.png'
import fitness from '../assets/fitness.png'
import riscv from '../assets/riscv.png'
import tcp from '../assets/tcp.png'
import networking_algo from '../assets/routing.png'
import collision from '../assets/collision.png'

import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css/animate.css";

const Works = () => {
    return (
        <div name='work' className='w-screen md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <ScrollAnimation animateIn="animate__animated animate__rollIn">
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Personal Projects
                    </p>
                    <p className='py-6 text-2xl'>Feel free to check out some of the projects that I have developed.</p>
                </div>
                </ScrollAnimation>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                        <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            style={{ backgroundImage: `url(${algotrading})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    Algorithm Trading Projects
                                </span>
                                <p className='text-center text-base'>Projects revolved around algorithmic trading and strategies developed in Python</p>
                                <div className='pt-8 text-center'>
                                    <a href='https://github.com/ayanjdeka/Algo-Trading-Projects' target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                            Click to see more!
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${flight})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Flight's Graph Project
                            </span>
                            <p className='text-center text-sm'>Graph algorithms surrounding the OpenFlights Data developed in C++</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/DataStructuresFinalProject' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${cnn})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Neural Networks
                            </span>
                            <p className='text-center text-sm'>Developed a convolutional neural network utilizing CUDA, with optimizations such as streaming, tuning, or channel reduction, and currently 
                            developing networks with Keras and Tensorflow in Python</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/ConvolutionNeuralNetwork' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${ecommerce})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Ecommerce Website
                            </span>
                            <p className='text-center text-sm'>Website that mimics an ecommerce setting implemented with Node.js, EJS, HTML/CSS, and Stripe API</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/EcommerceWebsite' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${financial})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Financial Models
                            </span>
                            <p className='text-center text-sm'>Quantitative modeling and computiation using Python and its various libraries</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/Financial-Models' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${linux})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Linux Operating System
                            </span>
                            <p className='text-center text-sm'>Linux operating system that implements paging, scheduling, ext2 filesystem, memory management, and provides basics commands such as ls, grep, cat</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/OperatingSystem' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${megamania})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Megamania
                            </span>
                            <p className='text-center text-sm'>Classical Atari Game that was built using JavaFX for its User Interface and event handlers</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/megamania' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${minesweeper})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Minesweeper
                            </span>
                            <p className='text-center text-sm'>Classical game utilizing JavaSwing and JavaAWT to build the graphical interface</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/minesweeper' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${paint})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Paint Program
                            </span>
                            <p className='text-center text-sm'>Uniquely uses the data structures of Stacks and Lists to create a painting program in Java</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/PaintProgam' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${riscv})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                RISC-V Pipelined Processor
                            </span>
                            <p className='text-center text-sm'>Classical Atari Game that was built using JavaFX for its User Interface and event handlers</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/RISCV-Proccessor' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${tcp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Tranmission Control Protocol
                            </span>
                            <p className='text-center text-sm'>Classical game utilizing JavaSwing and JavaAWT to build the graphical interface</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/Transmission_Control_Protocol' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${networking_algo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Networking Algorithms
                            </span>
                            <p className='text-center text-sm'>Uniquely uses the data structures of Stacks and Lists to create a painting program in Java</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/Networking-Algos' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__zoomIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${maze})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Maze Game
                            </span>
                            <p className='text-center text-sm'>A program that reads in a textfile to create both a 2D and 3D maze with many in game features such as traps or portals</p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/ayanjdeka/MazeGame" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__zoomIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${website})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Personal Website
                            </span>
                            <p className='text-center text-sm'>Code for my personal website built using React!</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/UpdatedPersonalWebsite' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__zoomIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${weather})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                WeatherApp
                            </span>
                            <p className='text-center text-sm'>Weather app in Android that takes in the OpenWeather API and displays the information in a personalized theme</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/WeatherApp' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__rollIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${gui})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Text Editor
                            </span>
                            <p className='text-center text-sm'>Custom Text Editor that allows users to change their font color, type, size, background color, and overall orientation</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/GUI' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__rollIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${juliasets})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Julia Sets Program
                            </span>
                            <p className='text-center text-sm'>The famous Julia Sets and its precise calculations developed in Java</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/JuliaSetProgram' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__rollIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${gps})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                GPS App
                            </span>
                            <p className='text-center text-sm'>GPS app in Android that utilizes the Location.Manager class to calculate distance and ETA from one location to another</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/GPSApp' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${tetris})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Tetris
                            </span>
                            <p className='text-center text-sm'>Combined System Verilog, NIOS II Processor, and C to create the classical game Tetris.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/Tetris' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${lc3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                SLC-3.2 Microprocessor
                            </span>
                            <p className='text-center text-sm'>Programmed a processor following the LC-3 ISA, with a 16 bit PC, instructions, and registers</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/SLC-3.2' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInRight" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${nfl})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 transition-all duration-500 cursor-pointer'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                NFLWikiApp
                            </span>
                            <p className='text-center text-sm'>A personalized informational app for the NFL developed in Java and Android Studio</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/NFLWikiApp' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${sudoku})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Sudoku
                            </span>
                            <p className='text-center text-sm'>Created the algorithm in C to recursively solve any valid sudoku board.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/Sudoku' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${calculator})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Post Fix Calculator
                            </span>
                            <p className='text-center text-sm'>Created a reverse polish notation calculator through implementing a stack in assembly.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/PostFixCalculator' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__lightSpeedInLeft" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${gameOfLife})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Game Of Life
                            </span>
                            <p className='text-center text-sm'>Created the popular Game Of Life fully in C, and wrote the algorithm to update the board with every scenario.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/GameOfLife' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__bounceIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${image})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                2048
                            </span>
                            <p className='text-center text-sm'>Developed the popular strategic game in C, with setting up the keyboard I/O to control the game.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/GameOfLife' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__bounceIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${fitness})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Fitness Database App
                            </span>
                            <p className='text-center text-sm'>Collaboritively developed a full stack fitness app through Flask and SQL, where users can keep track of foods, workouts, as well as common splits and foods between users in the database, .</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/FitnessDatabaseProject' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__bounceIn" duration={3.5}>
                    <div
                        style={{ backgroundImage: `url(${collision})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                CSMA/CD Protocol
                            </span>
                            <p className='text-center text-sm'>Collaboritively developed a full stack fitness app through Flask and SQL, where users can keep track of foods, workouts, as well as common splits and foods between users in the database, .</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayanjdeka/CSMA-CD' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce'>
                                        Click to see more!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};
export default Works;