import React,{ Component } from "react";
import './TaskListStyle.css';
import TaskContainer from "./TaskContainer";

function TaskList(props){
        return(
            <div className={"list"}>
                <h4 className={"padL"}>
                    Tasks
                </h4>
                <div className={"listContainer"}>
                    {
                        props.tasks.map((task,i)=>{
                            return <TaskContainer key={i} task={task} update={props.update}/>
                        })
                    }
                </div>
            </div>

        );
}
export default TaskList;