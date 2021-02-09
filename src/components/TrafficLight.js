import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = { 
      currentColor: RED
    }

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      })
    }, 1000)
  }

  getNextColor(color) {
    switch(color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return(
      <div className="TrafficLight">
        <div className={ classNames('bulb', 'red', {
          active: currentColor === RED
        }) } />
        <div className={ classNames('bulb', 'yellow', {
          active: currentColor === YELLOW
        }) } />
        <div className={ classNames('bulb', 'green', {
          active: currentColor === GREEN
        }) } />
      </div>
    );
  }

}

export default TrafficLight;