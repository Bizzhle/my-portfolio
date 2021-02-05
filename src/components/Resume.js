import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaHome } from 'react-icons/fa';
import { NavLink } from "react-router-dom"

export default function Resume() {
    return (
        <div className="bg-green-100 mx-2 mt-16 mb-8 md:max-w-6xl md:mx-auto font-roboto-slab">
            <div className="flex justify-end py-3 px-3 my-3">
                <NavLink to="/" exact>
                    <FaHome className="mr-4" target="_blank" fgColor="#fff" style={{ color: "green", height:25, width: 25}}/>   
                </NavLink>
                <div>
                    <SocialIcon url="https://twitter.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}} />
                    <SocialIcon url="https://github.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>
                    <SocialIcon url="https://www.linkedin.com/in/paul-egbo-6a658a166/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>        
                </div>
                </div>
            <div className="main md:flex p-6 md:w-full">
                <div className="hidden md:block md:mr-8 md:px-14">
                    <div class="sidebar--address mb-4">
                        <a href="https://github.com/Bizzhle"
                            target="_blank" rel="noreferrer" className="block text-green-800 underline">github.com/Bizzhle</a>
                        
                        <a href="mailto:gabrieluche2@gmail.com" 
                            rel="noreferrer noopener" 
                            className="text-green-800 underline">gabrieluche2@gmail.com</a> 
                        <p>Reinheim, Hessen</p>
                    </div>
                    <div class="sidebar--tech mb-4">
                        <h2 className="text-base font-bold">Core Technologies</h2>
                        <ul className="list-disc list-inside">
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>TailwindCSS</li>  
                        </ul>
                    </div>
        
                    <div class="sidebar--others">
                        <h2 className="text-base font-bold">Others</h2>
                        <ul className="list-disc list-inside inline-block">
                            <li>Responsive web design</li> 
                        </ul>
                    </div>
                </div>
                <div className="main ">
                    <section class="about mb-2 pb-4 border-bottom-black">
                        <h1 className="text-green-700 pb-2 font-bold text-2xl md:text-4xl whitespace-nowrap">Egbo Uchenna Paul</h1>
                        <p className="mb-4 font-bold">Frontend Developer</p>
                        <p className="text-gray-800">Software developer with robust 
                            problem solving skills and passion for 
                            building products with enhanced user experience 
                            and maximizing user interface. I’m always ready
                            to adapt according to project specifications 
                            irrespective of stack.
                        </p>                                                        
                    </section>
                    <section className="tech mb-2 pb-4 border-bottom-black">
                        <div className="sidebar--tech">
                            <h2 className="text-green-700 pb-2 text-2xl font-semibold">Core Technologies</h2>
                            <ul className="text-gray-800">
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </section>
                    <section className="experience mb-2 pb-4 border-bottom-black">
                        <h2 className="text-green-700 pb-2 text-2xl font-semibold">Experience</h2>
                        <article className="mb-2">
                            <div className="mb-2">
                                <h3 className="text-green-800 font-semibold">MDN - Learn Web development</h3>
                                <span className="date text-gray-800">aug 2020</span>
                            </div>
                            <p className="text-gray-700">Completed the mozilla learn development tutorial</p>
                            <ul className="text-gray-800 list-square list-inside">
                                <li>Learnt structuring the web with HTML, Styling with CSS and clientside scripting with Javascript</li>
                            </ul>
                            </article>
                        <article>
                            <div className="mb-2">
                                <h3 className="text-green-800 font-semibold">FreeCodeCamp</h3>
                                <span className="date text-gray-800">july 2020</span>
                            </div>
                            <p className="text-gray-800">My first introduction to web development</p>
                            <ul className="text-gray-800 list-square list-inside">
                                <li>Completed tutorials and tasks</li> 
                            </ul> 
                        </article>
                    </section>
                    <section className="education mb-2">
                        <h2 className="text-green-800 pb-2 text-2xl font-semibold">Education</h2>
                        <article class="text-gray-800">
                            <p>Technishe Universitat Darmstadt - MSc</p>
                            <span className="date">2016 - current</span>
                        </article>
                        <article className="text-gray-800">
                            <p>Caritas University Enugu - BSc</p>
                            <span class="date">2008 - 2013</span>
                        </article>
                    </section>
                    <section>
                        <h2 className="text-green-800 pb-2 text-2xl font-semibold">Projects</h2>
                        <p className="text-gray-800">Links to my work can be found on</p>
                        <NavLink to="/projects" className="text-green-900">
                            <a href="https://paul-egbo-portfolio.netlify.app/Project"
                             target="_blank"
                             rel="noreferrer">paul-egbo-portolio.netlify.app/projects</a>
                        </NavLink>
                    </section>
                </div>

            </div>
      </div>
    )
}
