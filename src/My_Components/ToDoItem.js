import React from 'react';

const ToDoItem = ({ todo, deleteTodo }) => {
  return (
    <div style={{
      border: '1px solid #007bff',
      margin: '10px auto',
      padding: '10px',
      borderRadius: '5px',
      maxWidth: '80%',
      textAlign: 'left'
    }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={() => deleteTodo(todo.sno)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
