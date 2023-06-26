import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: toDo, completed: false },
      ]);
      setTodo('');
    }
  };

  // Function to handle toggling the todo status
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className={`todo ${todo.completed ? 'completed' : ''}`} key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleToggleTodo(todo.id)}
                checked={todo.completed}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => handleDeleteTodo(todo.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="completedTodos">
        <h3>Completed Tasks:</h3>
        {toDos
          .filter((todo) => todo.completed)
          .map((completedTodo) => (
            <p key={completedTodo.id}>{completedTodo.text}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
