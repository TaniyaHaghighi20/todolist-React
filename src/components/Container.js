import React,{ Component } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import Form from "./Form";


class Container extends Component{

    render() {
        return(
            <div style={{width:"60%", margin:"auto"}}>
                <Header/>
                <Form/>

            </div>

        );
    }
}
export default Container;