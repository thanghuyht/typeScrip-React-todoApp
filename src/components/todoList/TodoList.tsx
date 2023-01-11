import React from 'react'
import { Todo } from '../../model'
import TodoItem from './TodoItem';
import './style.css'


interface TodosProps{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
} 

const TodoList:React.FC<TodosProps> = ({todos, setTodos}:TodosProps) => {
  return (
    <div className='todosList'>
      {
        todos.map(todo => (
          <>            
            <TodoItem 
              key = {todo.id}
              todo = {todo}
              setTodos = {setTodos}
              todos = {todos}
            />           
          </>
        ))
      }
    </div>
  )
}

export default TodoList