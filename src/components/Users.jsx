import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import User from './User';

class Users extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
           {
            this.props.users.map((user, index) => {
              return (
                <User key={index} user={user} id={index}/>
              )
            })
           }
            
          </Row>
        </Container>
        
      </>
    )
  }
}

export default Users
