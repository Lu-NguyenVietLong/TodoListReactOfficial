import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="todo-container">
      <div className="todo-body">
        <div className="todo-main">
          <Header />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
