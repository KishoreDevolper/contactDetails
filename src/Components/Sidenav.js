import React, { Component } from 'react'
import {
    FaSistrix,
    FaIdBadge,
    FaEnvelope,
    FaHouseUser,
    FaCopy,
    FaPhone,
    FaCalendarDay,
    FaClock,
    FaUserAlt,
    FaRegBell,
} from "react-icons/fa";
import "./navbar.css";
export class Sidenav extends Component {
  render() {
    return (
      <div>
         <div className="sideNav">
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
    )
  }
}

export default Sidenav