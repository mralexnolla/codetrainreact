import React, { Component } from 'react'
import Card from "react-bootstrap/Card";


class Book extends Component {
  render() {
    return (
      <Card style={{ width: "16rem" }} key={this.props.id}>
        <Card.Body>
          <Card.Title>Title: {this.props.book.title} </Card.Title>
          <Card.Subtitle className="mb-2 text-dark">
            Author: {this.props.book.author}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-dark">
            Genre: {this.props.book.genre}
          </Card.Subtitle>
          <Card.Text>
            Summary: {this.props.book.summary}
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Book
