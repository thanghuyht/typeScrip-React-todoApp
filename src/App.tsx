
import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/inputFeild/InputFeild';
import TodoList from './components/todoList/TodoList';
import { Todo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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
  const onDragEnd = (result: DropResult)=>{
    const {source, destination} = result
    console.log(todos)
    if(!destination || source.index === destination.index ) return

  }  
  return (
        <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
        <span className="heading">TO DO APP</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos}/>
      </div>
        </DragDropContext>
      
  );
}

export default App;
