import React, { useState } from 'react';
import Header from './My_Components/Header'; // Update with correct path
import ToDos from './My_Components/ToDos'; // Update with correct path
import './App.css'; // Make sure to import your CSS file

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (sno) => {
    setTodos(todos.filter((todo) => todo.sno !== sno));
  };

  return (
    <div className="App">
      <Header title="My To-Do List" />
      <ToDos todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      <footer>
        <p>© 2024 My To-Do App</p>
      </footer>
    </div>
  );
};

export default App;
