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
export class Topnav extends Component {
  render() {
    return (
      <div>
         <div className="topNav">
                            <div className="search">
                                {/* <div className="menu">menu</div> */}
                                <div className="searchIcon">
                                    <FaSistrix />
                                </div>
                            </div>
                            <div className="rightNav">
                                <a className="navLink">add</a>
                                <a className="navLinks">
                                    <FaEnvelope />
                                </a>

                                <a className="navLink">MarkHenry</a>
                                <a className="navLinks">
                                    <FaRegBell />
                                </a>
                            </div>
                        </div>
      </div>
    )
  }
}

export default Topnav