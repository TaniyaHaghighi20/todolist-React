import React, {Component, useState} from "react";
import './TaskStyle.css';

function TaskContainer (props){
    const [tsk,setTsk]=useState(props.task);

    function handleStatus(e){
        setTsk({...tsk,status:e.target.value});
        props.update({...tsk,status:e.target.value});
    }


    return(
            <div className={"task"}>
                <h4 className={"marg"}>
                    {props.task.title}
                </h4>
                <div className={"marg desc"} >
                    {props.task.desc}
                </div>
                <span className={"status"}>
                    {props.task.status}
                </span>
                <select onChange={handleStatus} className={"edit"}>
                    <option value="todo" disabled={tsk.status=="inProgress" || tsk.status=="done" || tsk.status=="deployed" }>todo</option>
                    <option value="inProgress" disabled={tsk.status!="todo"}>inProgress</option>
                    <option value="blocked" disabled={tsk.status!="inProgress"}>blocked</option>
                    <option value="inQA" disabled={tsk.status!="inProgress"}>inQA</option>
                    <option value="done" disabled={tsk.status!="inQA"}>done</option>
                    <option value="deployed" disabled={tsk.status!="done"}>deployed</option>
                </select>
            </div>
        );
}
export default TaskContainer;