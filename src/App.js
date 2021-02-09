import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
// import TrafficLight from './components/TrafficLight';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        { title: 'Đi chơi', isComplete: false },
        { title: 'Đi đá banh', isComplete: true },
        { title: 'Đi tập gym', isComplete: false }
      ]
    }
  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  
  render() {
    const { todoItems } = this.state
    return (
      <div className="App"> 
        {
          todoItems.length > 0 && todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item) } />
          ))
        }
          
        { todoItems.length === 0 && 'Nothings here.' }
      </div>
    );
  }
}

export default App;
