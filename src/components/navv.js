import React, {useState} from 'react';
// import { SocialIcon } from 'react-social-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";
// import { Component } from 'react';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <header className="bg-green-900 fixed top-0 z-10 w-full">
            <div>
                <div className="flex justify-between">
               	     <NavLink to="/" exact 
                        activeClassName=""
                        className="inline-flex px-3 ml-4 my-4 rounded text-yellow-500  text-3xl font-bold">
                        Paul
                    </NavLink>
                    <div className="menu-bars">
                        <NavLink to="#">
                            <FaIcons.FaBars onClick={showSidebar} className="mr-4 my-4" target="_blank" fgColor="fff" style={{ color: "#ec9c08", height:35, width: 35}}/>
                        </NavLink>
                    </div>
                </div>
                    
                <nav className="{sidebar ? 'nav-menu active' : right-0} absolute right-0 flex flex-col bg-green-900 rounded-bl-md w-44"  >
                    <div>
                        <NavLink to="#" >
                            <AiIcons.AiOutlineClose className="mr-4 my-4" target="_blank" fgColor="fff" style={{ color: "#ec9c08", height:35, width: 35}} />
                        </NavLink>
                    </div>
                    <NavLink to="/" exact 
                    
                    className="sidebar">
                        Home
                    </NavLink>
                    <NavLink to="/Resume" 
                    activeClassName="text-green-800 bg-yellow-500"
                    className="sidebar">
                        Resume
                    </NavLink>
                    <NavLink to="/Projects" 
                    activeClassName="text-green-800 bg-yellow-500"
                    className="sidebar">
                        Project 
                    </NavLink>
                    <NavLink to="/Blog" 
                    activeClassName="text-green-800 bg-yellow-500"
                    className=" items-start py-3 px-3 rounded text-yellow-500 hover:text-green-800 text-2xl">
                        Blog Posts
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}