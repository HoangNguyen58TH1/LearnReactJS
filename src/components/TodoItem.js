import './TodoItem.css'
var classNames = require('classnames');

function TodoItem(props) {
  // let className = 'TodoItem';
  // if (props.salary.isCompleted == true){
    //   className += ' TodoItem-complete'
    // }
  var className = classNames('TodoItem',  {
    'TodoItem-complete': props.salary.isCompleted
  });

  return (
    <div className={className}>
      <input type="checkbox" /> This is {props.salary.title}
    </div>
  );
}

export default TodoItem;
