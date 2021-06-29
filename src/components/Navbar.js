import styled from "styled-components";
import React, { useState } from "react";
// import { SocialIcon } from 'react-social-icons';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
// import { SidebarData } from './SidebarData';
import { IconContext } from "react-icons";

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "yellow" }}>
        <div className="navbar">
          <NavLink
            to="/"
            exact
            className="inline-flex px-3 ml-4 my-4 rounded text-yellow-500  text-3xl font-bold"
          >
            HOME
          </NavLink>
          <NavLink to="#">
            <FaIcons.FaBars
              onClick={showSidebar}
              className="mr-4 my-4 md:hidden"
              style={{ color: "#ec9c08", height: 35, width: 35 }}
            />
          </NavLink>
          <div
            className={
              sidebar
                ? "nav-menu"
                : "hidden md:inline-flex text-yellow-500 text-2xl font-bold"
            }
          >
            <NavLink to="#">
              <MdIcons.MdCancel
                onClick={showSidebar}
                className="cancel mr-4 my-4 md:hidden"
                style={{ color: "#ec9c08", height: 35, width: 35 }}
              />
            </NavLink>
            <NavLink to="/Project">Project</NavLink>
            <NavLink to="/Blog">Blog</NavLink>
            <NavLink to="/Resume">Resume</NavLink>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
