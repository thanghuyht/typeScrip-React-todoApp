
import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/inputFeild/InputFeild';
import TodoList from './components/todoList/TodoList';
import { Todo } from './model';


const App: React.FC = () =>{
  const [todo, setTodo] = useState<string>("")

  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo)
    {
      setTodos([
        ...todos,
        {
        id: Date.now(),
        todo: todo,
        isComplete: false
      }
      ])
      setTodo("")
    }
  }
  // console.log(todos)
  
  return (
    <div className="App">
      <span className="heading">Hello</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
