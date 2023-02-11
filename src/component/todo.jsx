import React,{useState} from "react";
import Show from "./show";
import './todo.css';
function Todo(){
    const[task,setTask]=useState("")
    const[Data,setData]=useState([])

    const onchangeHandler=(e)=>{
        setTask(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const newData=task;
        setData([...Data,newData])
        setTask('')
    }

    const deletetask=(a)=>{
        const finalData=Data.filter((current,index)=>{

            return index !==a;
        }
        )
        setData(finalData)

    }
    return(
        <div className="container mt-5">
            <h1 className="text-center mb-5">Get your work done with quick check</h1>
            <div className="row justify-content-center align-items-center main-row ">
                <div className="col shadow main-col bg-white border border-dark">
                    <div className="row bg-success text-white">
                    <div className="col p-2">
                        <h4 className="text-center">To Do App</h4>
                    </div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="row justify-content-between text-white p-2">
                        <div className="form-group flex-fill mb-2 col-8">
                            <input id="todo-input" type="text" className="form-control" value={task} onChange={onchangeHandler}/> 
                        </div>
                        <div className="mb-2 col-4">
                        <button type="submit" className="btn btn-success mb-2 w-100">Add</button>
                    </div>
                    </div>
                </form>

                {
                    Data.map((value,index)=>{
                        return(
                        <Show 
                        key={index}
                        id={index}
                        task={value}
                        onSelect={deletetask}
                        />
                        )
                    })
                }
            </div>

        </div>
        </div>
    )
}
export default Todo;