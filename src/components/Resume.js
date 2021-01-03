import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaHome } from 'react-icons/fa';
import { NavLink } from "react-router-dom"

export default function Resume() {
    return (
        <div className="bg-green-100 mx-2 mt-16 mb-8">
            <div className="flex justify-end py-3 px-3 my-3">
                <NavLink to="/" exact>
                    <FaHome className="mr-4" target="_blank" fgColor="#fff" style={{ color: "green", height:25, width: 25}}/>   
                </NavLink>
                <div>
                    <SocialIcon url="https://twitter.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}} />
                    <SocialIcon url="https://github.com/bizzhle" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>
                    <SocialIcon url="https://app.netlify.com/teams/bizzhle/overview" className="mr-4" target="_blank" fgColor="#fff" style={{ height:25, width: 25}}/>        
                </div>
                </div>
            <div className="p-8">
                <div className="hidden">
                    <div class="sidebar--address">
                        <ul>
                            <li>gabrieluche2@gmail.com</li>
                        </ul>
                        Reinheim, Hessen
                    </div>
                    <div class="sidebar--tech">
                        <h2>Core Technologies</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>TilwindCSS</li>
                            <li>React</li>
                        </ul>
                    </div>
        
                    <div class="sidebar--others">
                        <h2>Others</h2>
                        <ul>
                            Responsive web design
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <section class="about mb-2 border-bottom-black">
                        <h1 className="text-green-700 pb-2 text-4xl serif">Egbo Uchenna Paul</h1>
                        <p className="mb-4 serif">Frontend Developer</p>
                        <p className="text-gray-800">Software developer with robust 
                            problem solving skills and passion for 
                            building products with enhanced user experience 
                            and maximizing user interface. I’m always ready
                            to adapt according to project specifications 
                            irrespective of stack.
                        </p>                                                        
                    </section>
                    <section className="tech mb-2 border-bottom-black">
                        <div className="sidebar--tech">
                            <h2 className="text-green-700 pb-2 text-2xl font-semibold">Core Technologies</h2>
                            <ul className="text-gray-800">
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </section>
                    <section className="experience mb-2 border-bottom-black">
                        <h2 className="text-green-700 pb-2 text-2xl font-semibold">Experience</h2>
                        <article className="mb-2">
                            <div className="mb-2">
                                <h3 className="text-green-800 font-semibold">MDN - Learn Web development</h3>
                                <span className="date text-gray-800">aug 2020</span>
                            </div>
                            <p className="text-gray-700">Completed the mozilla learn development tutorial</p>
                            <ul className="list-square text-gray-800">
                                <li>Learnt structuring the web with HTML, Styling with CSS and clientside scripting with Javascript</li>
                            </ul>
                            </article>
                        <article>
                            <div className="mb-2">
                                <h3 className="text-green-800 font-semibold">FreeCodeCamp</h3>
                                <span className="date text-gray-800">july 2020</span>
                            </div>
                            <p className="text-gray-800">My first introduction to web development</p>
                            <ul className="text-gray-800 list-square">
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
                            <a href="paul.netlify.app/projects">paul.netlify.app/projects</a>
                        </NavLink>
                    </section>
                </div>

            </div>
      </div>
    )
}
