import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('Counter constructor');
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease() {
    this.setState({
      count: this.state.count -1
    })
  }

  render() {
    console.log('Counter render');
    return (
      <div className="counter">
        <button onClick={() => this.decrease()} style={{margin: "3px"}}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.increase()} style={{margin: "3px"}}>+</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('Counter did mount');
  }

  componentDidUpdate() {
    console.log('Counter did update');
  }

  componentWillUnmount() {
    console.log('Counter will unmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.count === nextState.count) {
      return false;
    }
    return true
  }
}

export default Counter;
