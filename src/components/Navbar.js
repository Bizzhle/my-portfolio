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
  padding: 0 8px;
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
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar font-medium px-5">
          <NavLink to="/" exact className="  text-white  text-xl ">
            Home
          </NavLink>
          <NavLink to="#">
            <FaIcons.FaBars
              onClick={showSidebar}
              className=" my-2 md:hidden"
              style={{ color: "#fff", height: 25, width: 35 }}
            />
          </NavLink>
          <div
            className={
              sidebar ? "nav-menu" : "hidden md:inline-flex text-white text-xl "
            }
          >
            <NavLink to="#">
              <MdIcons.MdCancel
                onClick={showSidebar}
                className="cancel mr-1 my-2 md:hidden"
                style={{ color: "#fff", height: 25, width: 35 }}
              />
            </NavLink>
            <NavLink to="/Project">Projects</NavLink>
            {/* <NavLink to="/Blog">Blog</NavLink> */}
            {/* <NavLink to="/Resume">Resume</NavLink> */}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
