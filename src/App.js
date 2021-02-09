import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './images/tick_all.svg'

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
      console.log('isComplete', isComplete);
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
        <div className="Header">
          <img src={tick} width="32" height="32" />
          <input type="text" placeholder="Add a new item" />
        </div>
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
