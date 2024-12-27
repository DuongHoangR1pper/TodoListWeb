import React from "react";
import Button  from "@atlaskit/button";
import ToDo from "./toDo";
export default function ToDoList({todos, onCheckComplete}){
    return (
        <>
         {
            todos.map((todo) => <ToDo key={todo.id} todo={todo} onCheckComplete={onCheckComplete}/>)
         }
        </>
    )
}