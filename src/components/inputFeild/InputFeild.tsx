import React, { useRef } from 'react'
import './style.css'

interface TodoProps{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
} 

const InputFeild = ({todo, setTodo, handleAdd}: TodoProps) => {
  const inputRef = useRef<HTMLInputElement|null> (null)
  return (
    <form className='input' onSubmit={(e)=> {
      handleAdd(e)
      inputRef.current?.focus()  
      }      
    }> 
        <input 
        ref={inputRef}
        className='input_box'
        type="text"
        placeholder='Enter Task To DO'
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button className="input_submit_btn" type="submit">Go</button>
    </form>
  )
}

export default InputFeild
