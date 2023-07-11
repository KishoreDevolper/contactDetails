import React, { Component } from "react";
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
        <div className="topNav d-flex w-100">
          <div className="search">
            <div className="searchIcon pt-3 ms-4">
              <FaSistrix />
            </div>
          </div>
          <div className="rightNav d-flex justify-content-end w-100">
            <a href="#" className="link-dark p-3">
              add
            </a>
            <a className="navLinks pt-3">
              <FaEnvelope />
            </a>

            <a href="#" className="link-dark  p-3">MarkHenry</a>
            <a className="navLinks pt-3">
              <FaRegBell />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topnav;
