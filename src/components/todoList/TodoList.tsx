import React from 'react'
import { Todo } from '../../model'
import TodoItem from './TodoItem';
import './style.css'
import { Droppable } from 'react-beautiful-dnd';


interface TodosProps{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
} 

const TodoList:React.FC<TodosProps> = ({todos, setTodos}:TodosProps) => {
  return (
    <Droppable droppableId="ToDosListNow">
      {(provided)=>(
        <div 
        ref={provided.innerRef}
        className='todosList'        
        {...provided.droppableProps}
        >
        {
          todos.map((todo, index) => (                   
              <TodoItem 
                key = {todo.id}
                index={index}
                todo = {todo}
                todos = {todos}
                setTodos = {setTodos}
              />           
            
          ))       
        }        
        {provided.placeholder}
      </div>
      )}

    </Droppable>
  
    )
}

export default TodoList