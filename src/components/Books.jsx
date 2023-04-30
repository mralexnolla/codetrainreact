import React, { Component } from 'react'
import Book from './Book'
import { Row, Col } from "react-bootstrap";

class Books extends Component {
  render() {
    return (
      <div>
        <Row>
            {
                this.props.books.map((book, index) => {
                    return (
                      <Col key={index} style={{marginBottom:"1rem"}}>
                        <Book book={book} id={index} />
                      </Col>
                    );
                })
            }
        </Row>
        
        
      </div>
    )
  }
}

export default Books
