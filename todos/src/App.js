import './App.css';
import { useEffect, useState } from 'react';
import {TodoProvider} from "./context/Todocontext"
import { TodoFrom, TodoItem } from './Component';
function App() {
  
  const [todos , settodos]=useState([]);
  
  
  const addTodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updatedTodo=(id,todo)=>{
  settodos((prev)=> prev.map((prevTodo.id === id ? todo :prevTodo)))

  }

  const deleteTodo=(id)=>{
    settodos((prev)=> prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete=(id)=>{
    settodos((prev)=>prev.map((prevTodo)=> prevTod=== id ?{...prevTodo , completed :!prevTodo.completed}:
    prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length >0){
      settodos(todos)
    }
       
  },[])


  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo ,updatedTodo,deleteTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoFrom/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>{
                          <div key={todo.id} className='w-full'><TodoItem/></div>
                        })}
                    </div>
                </div>
            </div>
            </TodoProvider>

  );
}

export default App;
