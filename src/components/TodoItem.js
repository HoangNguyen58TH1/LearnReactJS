import { Component } from 'react';
import './TodoItem.css'
import classNames from 'classnames';
import checkImg from '../images/check.svg'
import checkCompletedImg from '../images/check-completed.svg'

class TodoItem extends Component {

  render() {
    const { item, onClick } = this.props;
    let url = checkImg
    if (item.isComplete) {
      url = checkCompletedImg
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img onClick={onClick} src={url} width="32" height="32" />
        <span>{item.title}</span>
      </div>
    );
  }
}

export default TodoItem;
