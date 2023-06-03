import React from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import EditContact from './EditContact';
import {useSelector} from 'react-redux'


const Contact = ({editContact, deleteUser }) => {
    
   const contact = useSelector((store) => store.users.users);
   

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(contact.id);
  };

  return (
        
        <div>
          {
            contact.map((item) => {
              return (
                <Card style={{ width: "15rem" }} key={item.id}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-dark">
                      Email: {item.email}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-dark">
                      Phone: {item.phone}
                    </Card.Subtitle>
                    <Card.Text>Location: {item.location}</Card.Text>
                    <Card.Link onClick={handleShow}>Edit </Card.Link>
                    <Card.Link onClick={handleDelete}>Delete</Card.Link>
                  </Card.Body>
                </Card>
              );
            })
          }
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditContact
                closeModal={handleClose}
                contactInfo={contact}
                editContact={editContact}
              />
            </Modal.Body>
          </Modal>
        </div>
  );
};

export default Contact
