import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genre: "",
      summary: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.getbooks(this.state);
    e.target.reset()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author's Name"
            name="author"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Genre</Form.Label>
          <Form.Select name="genre" onChange={this.handleChange}>
            <option value="">Select a genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Commic">Commic</option>
            <option value="Romantic">Romantic</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter summary"
            name="summary"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default BookForm;
