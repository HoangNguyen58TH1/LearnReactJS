import React, { Component } from 'react';

export default class App6 extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
    this.increase = this.increase.bind(this)
  }

  increase() {
    this.setState(state => {
      return {
        number: state.number + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.increase}>
          Increse Number
        </button>
      </div>
    );
  }
}
