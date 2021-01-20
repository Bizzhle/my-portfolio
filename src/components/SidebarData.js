import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Project',
        path: '/Project',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Blog',
        path: '/Blog',
        icon: <FaIcons.FaBloggerB />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/Resume',
        icon: <ImIcons.ImProfile />,
        cName: 'nav-text'
    }
    
]
