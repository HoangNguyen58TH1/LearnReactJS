import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoItems = [10000, 20000, 30000];
  return (
    <div className="App">
      <header className="App-header">
        {
          todoItems.map((item, index) => <TodoItem key={index} salary={item} />) 
        }
      </header>
    </div>
  );
}

export default App;
