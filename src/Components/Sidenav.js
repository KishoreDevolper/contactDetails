import React,{Component}from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";

import {FaHouseUser,FaCopy,FaIdBadge,FaPhone,FaCalendarDay,FaClock,FaUserAlt} from "react-icons/fa"



export class Sidenav extends Component {
  render() {
    return (
      <div>
         <div className="sideNav pt-2  bg-danger bg-gradient text-white">
                        <div className="navIcon">
                            <FaHouseUser />
                        </div>
                        <div className="navIcon">
                            <FaIdBadge />
                        </div>
                        <div className="navIcon">
                            <FaCopy />
                        </div>
                        <div className="navIcon">
                            <FaPhone />
                        </div>
                        <div className="navIcon">
                            <FaCalendarDay />
                        </div>
                        <div className="navIcon">
                            <FaClock />
                        </div>
                        <div className="navIcon">
                            <FaUserAlt />
                        </div>
                    </div>
      </div>
    
  );
}
}

export default Sidenav;