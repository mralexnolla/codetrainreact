import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    handleIncrease = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})
    }

    handleDecrease = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count - 1})
    }

  render() {
    return (
      <div>
          <h1>React Part 4 </h1>
          <h3>Exercise 1</h3>
          <h3>Class Component counter </h3>
        <h1>ClassCount : {this.state.count} </h1>
        <button onClick={this.handleIncrease}>+</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick={this.handleDecrease}>-</button>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default ClassCounter
