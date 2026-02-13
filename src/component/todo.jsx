import { useState } from 'react'
function Todo(props){
    const [count, setCount] = useState(0)
    
    return(
        <div className="card">
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.name}
            </h3>
            <h3>
                {count}
            </h3>
            <div className="actions">
                <button onClick={()=>setCount(count-1)} className="btn">-1</button>
                <button onClick={()=>setCount(0)} className="btn">reset</button>
                <button onClick={()=>setCount(count+1)} className="btn">+1</button>
                <button onClick={()=>props.onDelete(props.id)} className="btn">delete</button>
            </div>
        </div>
    );
}
export default Todo;