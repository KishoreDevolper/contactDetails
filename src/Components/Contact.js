import React from 'react'
import "./navbar.css";
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
function Contact() {
  return (
    <div>
             <div className="contact d-flex justify-content-evenly align-items-center">
                <div className="contactIcon">
                  <FaIdBadge />
                </div>
                <div className="page">
                  <h3>Contacts</h3>
                  <p>welcome to contact page</p>
                </div>
                <div>
                  sort by: <b>Date Created</b>
                </div>
              </div>
    </div>
  )
}

export default Contact