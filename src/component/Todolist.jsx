import React, { useEffect, useState } from 'react'

const Todolist = () => {
    const [tasktext, setTaskText]=useState('');
    const [tasks, setTasks]= useState(()=>{
      try{
        const raw = localStorage.getItem('todo_tasks');
        return raw ? JSON.parse(raw):[];
      }catch(e){
        return [];
      }
    })

    useEffect(()=>{
      try{
        localStorage.setItem('todo_tasks', JSON.stringify(tasks));
      }catch(e){

      }
    },[tasks]);

    function addTask (e) {
      e.preventDefault();
      const text = tasktext.trim();
      if(!text)return;
      const newTask ={id: Date.now(),text};
      setTasks(prev => [ ...prev,newTask]);
      setTaskText('');
    }

    function  deleteTask (id){
      setTasks(prev =>prev.filter(t => t.id !== id));
    }
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6">
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input 
        value={tasktext}
        onChange={e=>setTaskText (e.target.value)}
        placeholder='Type tasks.....'
        className='flex-1 border rounded-md px-3 py-2 focus:outline-none' 
         />
         <button 
         type='submit' 
         className='bg-green-400 px-4 py-2 rounded-xl font-bold text-white hover:bg-green-500'>add</button>
      </form>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet !</p>
      ):(
        <ul className="space-y-2">
          {tasks.map(task =>(
           <li 
           key={task.id}
           className="flex items-center justify-between border p-3 rounded-md"
           >
            <span>{task.text}</span>
            <div className="flex items-center gap-2">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-sm px-2 py-1 rounded-md border bg-red-400 hover:bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
           </li>
          ))}
          
        </ul>
      )
      }
      </div>
    </div>
  )
}

export default Todolist
