import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos) }

  const removeTodo = (id) => {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodo)
  }

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
         todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodo)
  }

   

  return (
    <div className="todo-app">
      <h1>Task Timer</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo)=>{
        return (
          <TodoItem 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} 
          // removeTimer={removeTimer}
          todo={todo} 
          key={todo.id}/>
        )
      })}
    </div>

  );
}

export default App;
