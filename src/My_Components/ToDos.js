import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDos = ({ todos, addTodo, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState({ title: '', desc: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleAddClick = () => {
    if (newTodo.title && newTodo.desc) {
      const sno = todos.length + 1; // Simple increment for sno
      addTodo({ sno, ...newTodo });
      setNewTodo({ title: '', desc: '' }); // Clear the input fields
    }
  };

  return (
    <div className="container">
      <h3>To Do List</h3>
      <input
        type="text"
        name="title"
        value={newTodo.title}
        placeholder="Title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="desc"
        value={newTodo.desc}
        placeholder="Description"
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
      <div style={{ marginTop: '20px' }}>
        {todos.map((todo) => (
          <ToDoItem key={todo.sno} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default ToDos;
