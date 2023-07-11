import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
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
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Search() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [arrName, setArrNAme] = useState([]);
  const Save = () => {
    setArrNAme([
      ...arrName,
      {
        name,
        email,
        company,
        phone,
        address,
      },
    ]);
    handleClose();
  };
  return (
    <div>
      <div className="d-flex">
        <div className="searchBox ">
          <p className="bg-light bg-gradient text-dark rounded-5">
            Search Contacts
          </p>
        </div>
        <div className="addContact ms-3">
          <Button
            variant="primary"
            onClick={handleShow}
            className=" bg-danger bg-gradient text-white"
          >
            +ADD CONTACT
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>FILL THE DETAILS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>FULL NAME</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                  <Form.Label>PHONE NUMBER</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoFocus
                  />
                  <Form.Label>COMPANY</Form.Label>
                  <Form.Control
                    type="text"
                    value={company}
                    placeholder=""
                    onChange={(e) => setCompany(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>ADDRESS</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
      <div className="tableContent pt-3 w-100">
        <table className="table">
          <thead>
            <tr>
              <td className="bg-light bg-gradient text-dark">
                <b>+</b>
              </td>
              <td className="bg-light bg-gradient text-dark">
                <b>Basic info</b>
              </td>
              <td className="bg-light bg-gradient text-dark">
                <b>Company</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {arrName.map((x) => {
              return (
                <tr>
                  <td><div className="d-flex justify-content-center">
                  <div className="p-1"><FaEdit /></div>
                    <div className="p-1"><FaTrash /></div>
                  </div>
                    
                  </td>
                  <td>
                    <div>{x.name}</div>
                    <div>{x.email}</div>
                  </td>
                  <td>{x.company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
