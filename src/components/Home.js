import React from 'react';
import image from "../maxresdefault.jpg"
import paul from "../paul.jpg"
import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <main>
            <Navbar />
            {<img src={image} alt="max default" className="absolute object-cover w-full h-screen "/>}
            <section className="relative flex justify-center items-center min-h-screen border-b">
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
                <section className="bg-green-50">
                    <div className="mx-2 px-1 py-5">
                        <article className="">
                            <h2 className="my-4 py-2 text-green-800 text-3xl font-semibold">ABOUT ME</h2>
                            <div class="description">
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
                                <div class="conatiner">
                                    <h4><b>Paul Egbo</b></h4>
                                    <p>Web developer</p>
                                </div>
                            </div>
                        </article>
                    </div>     
                </section>
                <section className="py-3 bg-green-900">
                    <div className="mx-2 px-1 py-5">
                        <article className="shadow p-3 center bg-green-700 mb-1">
                            <div className="py-7 px-4">
                                <p className="text-white text-3xl font-bold">I build and <br />work on</p>
                                <p className="text-white">web applications</p>
                                
                                <button className="px-4 py-2 mt-4 border-solid border border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded">
                            <NavLink to="/Resume">
                                SEE MY WORK
                            </NavLink></button>
                            </div>
                           
                        </article>
                        <article class="shadow p-3 center bg-green-700">
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
        </main>
        

    )
}