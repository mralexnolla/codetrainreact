import React from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//  #thankU4Ex16   peace

const Adduser = (props) => {
  const [details, setDetails] = useState({ name: "", email: "", gen: "" });

  // first step
  const handleChange = (e) => {
    e.preventDefault();
    //step 2
    setDetails({
      //step 3
      ...details,
      [e.target.name]: e.target.value,
    });
    console.log(details);
  };

  //net step
  const handleSubmit = (e) => {
    e.preventDefault();
    props.adduser(details);  // lats step 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your user name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="number"
          placeholder="gen"
          name="gen"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};


export default Adduser

