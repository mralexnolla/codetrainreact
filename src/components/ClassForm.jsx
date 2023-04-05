import React, { Component } from 'react'

export class ClassForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    formHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.pword.value;

        this.setState({
            name: name,
            email: email,
            password: password
        })
    }

  render() {
    return (
      <div>
        <h1>Login #thankU4Ex16</h1>
        <form onSubmit={this.formHandler}>
            <input type="text" name="name"  placeholder='Enter your name' /> <br /><br />
            <input type="email" name="email"  placeholder='Enter your email' /> <br /><br />
            <input type="password" name="pword" placeholder='Enter your password' /><br /><br />
            <input type="submit" value="Submit"/>
        </form>
        <br />
        <p>
            name: {this.state.name}
        </p>
        <p>
            email: {this.state.email}
        </p>
        <p>
            name: {this.state.password}
        </p>
      </div>
    )
  }
}

export default ClassForm
