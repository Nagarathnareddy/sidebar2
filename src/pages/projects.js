import React from 'react'
import * as IoIcons from "react-icons/io"
import {IconContext} from 'react-icons'
import logo from '../nag.png'
import * as AiIcons from "react-icons/bi";
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import * as FaIcons from "react-icons/fa";
import { IconName } from "react-icons/fa";
import {AiOutlineMessage} from "react-icons/ai"
import {GiRadioactive} from "react-icons/gi"
import {AiFillCheckCircle} from "react-icons/ai"
function projects() {
    return (
        <div className="projects">
            <div className="searchicon">
          <AiIcons.BiSearch/>
          </div>
            <input type="search" placeholder="Search for anything" className="inph"   />
            <h1 className="head">Projects</h1>
           <div ><img className="nag" src={logo}/><p className="nam">Nagarathna Reddy</p></div>
           <IoIcons.IoIosNotificationsOutline className="ic"/>
           <Button variant="success" className="button">Create New</Button>{' '}
  <AiOutlineMessage className="ys"/>     <Link className="yet">Yet to start</Link>
   <GiRadioactive className="at"/>        <Link className="act">Active</Link>
   <AiFillCheckCircle className="cm"/>        <Link className="com">Completed</Link>
        </div>
    )
}

export default projects
