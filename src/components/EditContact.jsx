import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: props.contactInfo.name,
      // email: props.contactInfo.email,
      // phone: props.contactInfo.phone,
      // location: props.contactInfo.location,
      // id: props.contactInfo.id,
      ...props.contactInfo
    };
    console.log({...props.contactInfo});
  }

  

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const name = this.state.name;
    // const email = this.state.email;
    // const phone = this.state.phone;
    // const location = this.state.location;
    // const id = this.state.id
    
      const { name, email, phone, location, id } = this.state;

      let newPerson = { name, email, phone, location, id };

      this.props.editContact(id, newPerson);

      this.props.closeModal();
    
    
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
               value={this.state.email}
               onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="textArea"
              placeholder="location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditContact;
