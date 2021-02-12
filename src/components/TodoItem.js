import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types'

import './TodoItem.css'
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

TodoItem.propTypes = {
  item: propTypes.shape({
    title: propTypes.string.isRequired,
    isComplete: propTypes.bool.isRequired
  }),
  onClick: propTypes.func
}

export default TodoItem;
