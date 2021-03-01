import React, { Component } from 'react';

export const NumberContext = React.createContext();

export class NumberProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 5,
    }
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    // this.setState({
      // number: Math.floor(Math.random() * 10)
    // })
    // this.setState({
      // number: Math.floor(Math.random() * 10)
    // })

    this.setState((state) => {
      return {
        number: state.number + 1
      }
    })
    this.setState((state) => {
      return {
        number: state.number + 1
      }
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