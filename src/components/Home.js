import React from 'react';
import image from "../maxresdefault.jpg";
import paul from "../paul.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SocialIcon } from 'react-social-icons';

export default function Home() {
    return (
        <main className="bg-white">
            <Navbar />
            {<img src={image} alt="max default" className="absolute object-cover w-full h-screen "/>}
            <section className="relative flex justify-center items-center min-h-screen border-b-8 border-blue-300">
                    <div className="p-6 mx-6 rounded bg-green-700">
                        <p className="text-2xl text-yellow-500">Hi, I'm a </p>
                        <p className="text-4xl text-green-400 font-bold">Frontend Developer</p>
                        <p className="text-2xl text-green-400 serif">I enjoy building products for the web</p>
            
                        <button 
                        className="px-4 py-2 mt-4 border-solid border-2 border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded-md">
                            <NavLink to="/Resume">
                                view resume
                            </NavLink>
                        </button>
                    </div>
                </section>
                <section className="about-me bg-white md:max-w-7xl mx-auto">
                    <div className="px-8 py-8 md:flex">
                        <article className="md:mr-5">
                            <h2 className="my-4 py-2 text-green-800 text-3xl font-semibold">ABOUT ME</h2>
                            <div className="description">
                                <p className=" text-green-800 text-2xl font-semibold">Hi! I'm Egbo Paul,
                                a Nigeria based software developer</p>
                                <p className=" text-green-800">I specialize in building pixel-perfect, 
                                scalable products using current best practices 
                                in web development. My goal is to utilize available
                                tools and techniques to build high perfomant products that improves user experiences.</p>
                                <p className=" text-green-800">Sometimes, i write soft skill articles based on things I've learnt over the course of my career.</p>
                                <p className=" text-green-800">When i'm not coding, i spend most of my time surfing through twitter or taking some amateur pictures on my phone.</p>
                                <p className=" text-green-800">Here are a few technologies i've been working with recently:</p>
                                <ul className=" p-3 list-square grid grid-cols-2 text-green-800">
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS(tailwind)</li>
                                    <li>REACT</li>
                                </ul>
                            </div>
                        </article>
                        <article>
                            <div className="my-0 mx-auto text-center shadow-2xl" style={{ width: 300}}>
                                <img src={paul} alt="paul in a restaurant" className="object-cover w-full" />
                                <div className="conatiner">
                                    <h4><b>Paul Egbo</b></h4>
                                    <p>Web developer</p>
                                </div>
                            </div>
                        </article>
                    </div>     
                </section>
                <section className="py-3 bg-green-900 border-b-8 border-blue-300">
                    <div className="px-1 my-20 md:flex md:max-w-5xl md:mx-auto">
                        <article className="py-5 flex flex-1 shadow center bg-green-700 mb-3 md:mr-1 md:justify-center md:items-center">
                            <div className="py-7 px-4">
                                <p className="text-white text-3xl font-bold">I build and <br />work on</p>
                                <p className="text-white">web applications</p>
                                
                                <button className="px-4 py-2 mt-4 border-solid border border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded">
                            <NavLink to="/Project">
                                SEE MY WORK
                            </NavLink></button>
                            </div>
                           
                        </article>
                        <article className="flex flex-1 shadow center bg-green-700 mb-3 md:justify-center md:items-center">
                            <div className="py-7 px-4">
                                <p className="text-white text-3xl font-bold">I also post <br />pictures</p>
                                <p className="text-white">about my food and places i have been</p>
                                <button className="px-4 py-2 mt-4 border-solid border border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded">
                            <NavLink to="/Resume">
                                BROWSE MY PICTURES
                            </NavLink></button>
                            
                            </div>
                         </article>
                    </div> 
                </section>
                <footer className="footer grid justify-center">
                <div className="mx-auto m-4">
                    <SocialIcon url="https://twitter.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}} />
                    <SocialIcon url="https://github.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>
                    <SocialIcon url="https://app.netlify.com/teams/bizzhle/overview" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>        
                </div>
                    <p className="py-2">Created by paul uchenna egbo</p>
                </footer>
        </main>    

    );
}