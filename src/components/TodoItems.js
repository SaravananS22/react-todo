import React from 'react'
import not_tick from '../assets/not_tick.png'
import tick from '../assets/todo.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>toggle(id)} className='flex flex-1 items-center my-3 gap-2'>
        <img src={isComplete ? tick : not_tick} alt='tick.png' height={30} width={30} className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? 'line-through':''}`}>{text}</p>
      </div>

      <img onClick={()=>deleteTodo(id)} src={delete_icon} alt='delete.png' className='mr-3 cursor-pointer' height={25} width={25}/>
    </div>
  )
}

export default TodoItems
