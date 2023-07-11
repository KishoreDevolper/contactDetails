import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";
<<<<<<< HEAD
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
=======
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
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Search from "./Search";
import Contact from "./Contact";
function Navbar() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [arrName, setArrNAme] = useState([]);

 

  return (
    <div>
      <div className="testing d-flex">
        <div>
          <Sidenav />
        </div>
        <div className="w-100">
          <Topnav />
          <div className="content d-flex pt-3">
            <div className="mainContent">
              <Contact/>
              <div className="add">
                <Search/>
              </div>
             
            </div>
          </div>
        </div>
>>>>>>> 4b3ad44eaa076b64c535442a425ee0ba7eced74a
      </div>
    </div>
  );
}

export default Navbar;