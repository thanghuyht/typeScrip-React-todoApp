import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../../model';
import './style.css';
import { RiEdit2Fill, RiDeleteBin2Fill, RiCheckboxCircleFill } from 'react-icons/ri';

type Props = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)



    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
        )
    }
    const handleDelete = (id: number) => {
        setTodos(
            todos.filter(todo =>
                todo.id !== id
            )
        )
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo)
        )
        setIsEdit(false)
    }
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [isEdit])


    return (
        <form className='todoItem' onSubmit={(e) => handleEdit(e, todo.id)}>
            {isEdit ? (
                <input
                    ref={inputRef}
                    className='items__input'
                    value={editTodo}
                    onChange={e => setEditTodo(e.target.value)}
                />
            ) : (
                todo.isComplete ? (
                    <s className="todo__text" >{todo.todo}</s>
                ) : (
                    <span className="todo__text" >{todo.todo}</span>
                )
            )}

            <div>
                <span className="todo__icon" onClick={() => setIsEdit(!isEdit)}>
                    <RiEdit2Fill />
                </span>
                <span className="todo__icon" onClick={() => handleDelete(todo.id)}>
                    <RiDeleteBin2Fill />
                </span><span className="todo__icon" onClick={() => handleDone(todo.id)}>
                    <RiCheckboxCircleFill />
                </span>

            </div>
        </form >
    )
}

export default TodoItem