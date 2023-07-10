import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./navbar.css"

function Add() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [arrName, setArrNAme] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Save = () => {
        setArrNAme([...arrName, name])
        setName(name)
        setName("")
    }
    console.log(arrName)

    return (
        <>
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

                                autoFocus
                            />
                            <Form.Label>PHONE NUMBER</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
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
                    {arrName.map(x => {
                        return ({x})

                        console.log("asdfgh")

                    })}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default Add;