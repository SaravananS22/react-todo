import React, { useEffect, useRef, useState } from 'react'
import listImg from '../assets/list.png';
import TodoItems from './TodoItems';

const Todo = () => {
    const inputRef=useRef();
    const [todoList,setTodoList]=useState(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[])

    const add =()=>{
        const inputText=inputRef.current.value.trim();
        if(inputText===''){
            return null;
        }
        const newTodo={
            id:Date.now(),
            text:inputText,
            isComplete:false
        }
        setTodoList((prevState)=>[...prevState,newTodo]);
        inputRef.current.value="";
    }

    const deleteTodo=(id)=>{
        setTodoList(prevTodo=>(
            prevTodo.filter((todo)=>todo.id !==id)
        ))
    }

    const toggle=(id)=>{
        setTodoList(prevTodo=>(
            prevTodo.map(todo=>{
                if(todo.id===id){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo;
            })
        ))
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* title */}
      <div className='flex items-center mt-7 gap-2'>
        <img src={listImg} alt='' className='w-8'/>
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* input box */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} type='text' placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'/>
        <buton onClick={add} className='border-none rounded-full bg-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer flex items-center justify-center '>ADD +</buton>
      </div>

      {/* todo list */}
      <div>
        {
            todoList.map((item,index)=>(
                <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
            ))
        }
      </div>
    </div>
  )
}

export default Todo
