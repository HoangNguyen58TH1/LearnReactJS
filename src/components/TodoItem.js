import { Component } from 'react';
import './TodoItem.css'
import classNames from 'classnames';

class TodoItem extends Component {
  // constructor() {
  //   super();
  //   this.onItemClick = this.onItemClick.bind(this);
  // }

  // onItemClick() {
  //   this.props.item.isComplete = !this.props.item.isComplete;
  //   console.log(this.props.item);
  // }

  // onItemClick = () => {
  //   console.log(this.props.item);
  // }

  render() {
    const { item, onClick } = this.props;
    return (
      // <div onClick={this.onItemClick.bind(this)} className={classNames('TodoItem', {
      // <div onClick={() => this.onItemClick()} className={classNames('TodoItem', {
      // <div onClick={this.onItemClick} className={classNames('TodoItem', {
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        {item.title}
      </div>
    );
  }
}

export default TodoItem;
