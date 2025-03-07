import React from 'react';
import tinder from '../assets/tinder.png'
import nobe from '../assets/nobe.jpg'
import texas from '../assets/texasinstruments.jpg'


import Fade from 'react-reveal/Fade'
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css/animate.css";

const Classes = () => {
    return (
        <div name='classes' className='w-screen md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <ScrollAnimation animateIn="animate__animated animate__flash" duration={1.5}>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Classes
                    </p>
                    <p className='py-6 text-2xl'>These are the past classes that I have done</p>
                </div>
                </ScrollAnimation>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    CS 173 - Discrete Structures
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Discrete mathematical structures frequently encountered in the study of Computer Science. Sets, propositions, Boolean algebra, induction, recursion, relations, functions, and graphs.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    CS 225 - Data Structures
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Data abstractions: elementary data structures and their implementation using an object-oriented programming language. Solutions to a variety of computational problems such as search on graphs and trees. Elementary analysis of algorithms. </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    ECE 210 - Analog Signal Processing
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Analog signal processing, with an emphasis on from circuit and system analysis: linear systems; differential equation models of linear circuits; Laplace transform; convolution; frequency response; Fourier series</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    Math 286 - Intro to Differential Eq Plus
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Techniques and applications of ordinary differential equations, including Fourier series and boundary value problems, linear systems of differential equations, and an introduction to partial differential equations.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                    CS 374 - intro to Algs & Models of Comp
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Analysis of algorithms, recursive algorithms, divide-and-conquer algorithms, dynamic programming, greedy algorithms, and graph algorithms. Formal models of computation including finite automata and Turing machines. Limitations of computation, Reductions, undecidability and NP-completeness.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                ECE 313 - Probability with Engineering Applications
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Probability theory with applications to engineering problems such as the reliability of circuits and systems to statistical methods for hypothesis testing, decision making under uncertainty, and parameter estimation.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                CS 483 - Applied Parallel Programming
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Parallel programming with emphasis on developing applications for processors with many computation cores. Computational thinking, forms of parallelism, programming models, mapping computations to parallel hardware, efficient data structures, paradigms for efficient parallel algorithms, and application case studies.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                CS 425 - Distributed Systems
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Protocols, specification techniques, global states and their determination, reliable broadcast, transactions and commitment, security, and real-time systems.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                ECE 411 - Computer Organization & Design
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Basic computer organization and design: integer and floating-point computer arithmetic; control unit design; pipelining; system interconnect; memory organization; I/O design; reliability and performance evaluation. Laboratory for computer design implementation, simulation, and layout.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                CS 438 - Communication Networks
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Layered architectures and the OSI Reference Model; design issues and protocols in the transport, network, and data link layers; architectures and control algorithms of local-area, point-to-point, and satellite networks; standards in networks access protocols; overview of networking and communication software.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                CS 440 - Artifical Intelligence
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Introductory description of the major subjects and directions of research in artificial intelligence; topics include AI languages (LISP and PROLOG), basic problem solving techniques, knowledge representation and computer inference, machine learning, natural language understanding, computer vision, robotics.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown" duration={3.5}>
                        <div
                            className='group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-500 bg-[#6fc2b0]'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-100 flex justify-center items-center flex-col'>
                                <span className=' text-lg font-bold text-white tracking-wider'>
                                CS 421 - Programming Languages and Compilers
                                </span>
                                <p className='text-center text-base font-bold text-white text-sm'>Structure of programming languages and their implementation. Basic language design principles; abstract data types; functional languages; type systems; object-oriented languages. Basics of lexing, parsing, syntax-directed translation, semantic analysis, and code generation.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                  </div>
            </div>
        </div>
    );
};
export default Classes;