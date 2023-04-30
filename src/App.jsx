import React from "react";
import { Component } from "react";
import {Container, Row, Col} from "react-bootstrap"
import Users from "./components/Users";
import Adduser from "./components/Adduser";


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [
        {
          name:"Mark",
          email:"mark@gmail.com",
          gen:24
        },
        {
          name:"Peter",
          email:"peter@gmail.com",
          gen:24
        },
      ]
    }
  }

  addUsers = (user) =>{  
    // the first step
    this.setState({
      users: [...this.state.users, user]
    })
  }
  
  render(){
    return (
      <div className="App">
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="3">
              <Adduser adduser={this.addUsers} />
            </Col>
            <Col>
              <Users users={this.state.users} />
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
   
}

export default App;
