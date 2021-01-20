import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoItems = [
    { title: 10000, isCompleted: false },
    { title: 20000, isCompleted: true },
    { title: 30000, isCompleted: false }
  ];
  return (
    <div className="App">
      <header className="App-header">
        {
          todoItems.length > 0 && todoItems.map((item, index) =>
            <TodoItem key={index} salary={item} />
          )
        }
        { todoItems.length === 0 && 'Nothings here.' }
      </header>
    </div>
  );
}

export default App;
