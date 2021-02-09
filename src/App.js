import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './images/tick_all.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Đi chơi', isComplete: false },
        { title: 'Đi đá banh', isComplete: true },
        { title: 'Đi tập gym', isComplete: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) { return }
      text = text.trim();
      if (!text) { return }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  
  render() {
    const { todoItems, newItem } = this.state
      return (
      <div className="App"> 
        <div className="Header">
          <img src={tick} width="32" height="32" />
          <input 
            type="text" 
            placeholder="Add a new item"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
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
