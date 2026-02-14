import { useState,useEffect } from 'react'
import './App.css'
	
import Todo from './component/todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState("");
//  useEffect(()=>{
//   let arrLists=[];
//   for (let i = 1 ; i < 10 ; i++) {
//       arrLists.push({id:i,title:"No." + i.toString(),taskName:"預設任務"});
//   }
//   setTodos(arrLists);
//  },[]);
 const handleAdd=()=>{
  if(tasks.trim()===""){
    return;
 }
 const newTodo={
  id: Date.now(),
  title: "No." + (todos.length + 1),
  taskName:tasks
 };
 setTodos([...todos,newTodo]);
 setTasks("");
};
 const taskDelete=(taskDelete)=>{
  setTodos(todos.filter((todo) => todo.id !== taskDelete));
 }
  return (
    <>
      <div>
        <h2>enter your task</h2>
        <input type="text" value={tasks} onChange={(e)=>setTasks(e.target.value)}/>
        <button onClick={handleAdd}>新增事項</button>
      </div>
      <div>
         {todos.map((todo)=>{
            return <Todo key={todo.id} id={todo.id} title={todo.title} name={todo.taskName} onDelete={taskDelete}/>
          })}
      </div>
    </>
  )
}

export default App;
