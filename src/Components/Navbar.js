import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import "./navbar.css";
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
import Add from "./Add.js"
function Navbar() {

    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
   const[arrName,setArrNAme]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Save = () => {
        setArrNAme([...arrName, name])
        setName(name)
        setName("")
    }
    console.log(arrName)

    return (
        <div>
            <div className="testing d-flex">
                <div><Sidenav /></div>
                <div className="w-100"><Topnav />
                    <div className="content">
                        <div className="mainContent">
                            <div className="contact">
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
                            <div className="add">
                                <div className="searchBox">
                                    <p>Search Contacts</p>
                                </div>
                                <div className="addContact">
                                    <Button variant="primary" onClick={handleShow}>
                                        +ADD CONTACT
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>FILL THE DETAILS</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>FULL NAME</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)} />

                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}

                                                        autoFocus
                                                    />
                                                    <Form.Label>PHONE NUMBER</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder=""
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}
                                                        autoFocus
                                                    />
                                                    <Form.Label>COMPANY</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder=""
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                >
                                                    <Form.Label>ADDRESS</Form.Label>
                                                    <Form.Control as="textarea" rows={2} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={Save}>
                                                Save Changes
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                            <div className="tableContent">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td><b>+</b></td>
                                            <td><b>Basic info</b></td>
                                            <td><b>Company</b></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>sdfgh</td>
                                            {arrName.map(x => {
                                                return (<td>{x}</td>)

                                                console.log("asdfgh")

                                            })}

                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;
