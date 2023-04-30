import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap"

export class User extends Component {
  render() {
    return (
      <Col md="3" key={this.props.id}>
        <Card style={{ width: "13rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Codetrain User
            </Card.Subtitle>
            <Card.Title>{this.props.user.name}</Card.Title>
            <Card.Text>
              <p>Email:{this.props.user.email}</p>
              <p>Gen: {this.props.user.gen}</p>
            </Card.Text>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default User
