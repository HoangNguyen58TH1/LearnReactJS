import React, { Component } from 'react';
import NumberContext from '../context5/NumberContext'

export default class NumberProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 5
    }
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({
      number: Math.floor(Math.random() * 10)
    })
  }

  render() {
    return (
      <NumberContext.Provider value={{
        number: this.state.number,
        updateNumber: this.updateNumber
      }}>
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
