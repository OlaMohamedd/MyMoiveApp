import React, { useState } from 'react';
import './todo.css'
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function TodoList() {
  
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = () => {
    if (todoInput) {
      setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='Parantdiv'>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button className='btn btn-success ms-4' onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li className='myli' key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}

              <button className='btn btn-primary m-3' onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Done'}</button>
              <span onClick={() => deleteTodo(todo.id)}><RiDeleteBack2Fill size={40} color="#37474f" /></span>

            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}