import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io"
import { IconName } from "react-icons/fa";
export const SidebarData = [
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillDashboard/>,
        cName :'nav-text'
    },
    {
        title:'Projects',
        path:'/projects',
        icon:<GrIcons.GrProjects/>,
        cName :'nav-text'
    },
    {
        title:'Calendar',
        path:'/calendar',
        icon:<AiIcons.AiFillCalendar/>,
        cName :'nav-text'
    },
    {
        title:'Tasks',
        path:'/tasks',
        icon:<FaIcons.FaTasks/>,
        cName :'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper/>,
        cName :'nav-text'
    },
    {
        title:'Settings',
        path:'/settings',
        icon:<IoIcons.IoIosSettings/>,
        cName :'nav-text'
    }
]