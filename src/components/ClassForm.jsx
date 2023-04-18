import React, { Component } from 'react'

export class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pword: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pword = e.target.password.value;

    this.setState({
        name,
        email,
        pword
    })

  }

  render() {
    return (
      <div>
        <h2>Class Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Enter name" /> <br />
          <br />
          <input type="email" name="email" placeholder="Enter Email" /> <br />
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <hr />
        <hr />

        <h1>{this.state.name}</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.pword}</h1>

        <hr />
        <hr />
      </div>
    );
  }
}

export default ClassForm
