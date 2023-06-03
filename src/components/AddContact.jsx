import React from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {v4 as uuidv4} from "uuid"
import { createUser } from '../slice/userSlice';
import {useDispatch} from 'react-redux'

const AddContact = ({ tempData }) => {

  const dispatch = useDispatch()
  

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    Location: "",
    id: uuidv4() ,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    // tempData(data);
    dispatch(createUser(data));
    e.target.reset()
  }

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="name"
            //value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            //value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            //value={phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="textArea"
            placeholder="location"
            name="location"
            //value={location}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
  );
};

export default AddContact
