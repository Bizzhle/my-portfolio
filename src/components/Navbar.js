import React, {useState} from 'react';
// import { SocialIcon } from 'react-social-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons'

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: 'yellow' }}>
          <div className="navbar">
              <div className="logo">
                <NavLink to="/" exact 
                    className="inline-flex px-3 ml-4 my-4 rounded text-yellow-500  text-3xl font-bold">
                    Paul
                </NavLink>
              </div>
              <div>
                <NavLink to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} className="mr-4 my-4" style={{ color: "#ec9c08", height:35, width: 35}}/>      
                </NavLink>
              </div>
          </div>
          <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <NavLink to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose className="ml-2" style={{ color: "#ec9c08", height:25, width: 35}}/>
                        </NavLink>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span className="ml-4">{item.title}</span>
                                </NavLink>

                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
