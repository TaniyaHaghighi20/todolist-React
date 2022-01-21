import React, {Component, useState} from "react";
import './FormStyle.css';
import TaskList from "./TaskList";

function Form (props){
    const [tasks,setTasks]=useState([]);
    const [id,setId]=useState(0);
    const [tsk,setTsk]=useState({id:id,title:"",desc:"",status:"todo"});

    function handleEdit(e){
        setTsk({...tsk,[e.target.name]:e.target.value});
    }

    // console.log(tsk);
    const handleAdd=()=> {
        if(tsk.title!="" && tsk.desc!=""){
            setTasks([...tasks,tsk]);
            setId(id+1);
            setTsk({id:id+1,title:"",desc:"",status:"todo"})
        }else{
            alert("fields are required.");
        }

    }

    const updateStatus=(task)=>{
        for (const t in tasks) {
            if(tasks[t].id===task.id){
                let temp = tasks;
                temp[t]=task;
                setTasks(temp);
                break;
            }
        }
        setId(id+1);
        console.log(tasks);
    };

    return(
            <>
                <div style={{width:'60%',margin: "auto"}} >
                    <h4 style={{ backgroundColor: "white", padding:20}}>
                        Add a new Task
                    </h4>
                    <form >
                        <input type="text" value={tsk.title} className={"title"} name={"title"} placeholder={"title"} onChange={handleEdit}/>
                        <textarea name="desc" value={tsk.desc} className={"textArea"} placeholder={"description"} cols="30" rows="5" onChange={handleEdit}/>
                        <input type="button" name="create" value="Add" className={"addBtn"} onClick={handleAdd}/>
                    </form>
                </div>
                <TaskList tasks={tasks}  update={updateStatus} />
            </>


        );




}
export default Form;