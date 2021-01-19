import './TodoItem.css'

function TodoItem(props) {
  let className = 'TodoItem';
  if (props.salary.isCompleted == true){
    className += ' TodoItem-complete'
  }

  return (
    <div className={className}>
      <input type="checkbox" /> This is {props.salary.title}
    </div>
  );
}

export default TodoItem;
