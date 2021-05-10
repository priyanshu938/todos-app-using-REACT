import React from "react";
import TodoItem from "./TodoItem";
export default function Todos(props) {
  return (
    <div className="container">
      <h2 className="text-center my-3">Todos List</h2>
      {props.todos.length !== 0
        ? props.todos.map((item) => (
            <TodoItem
              todoitem={item}
              key={item.sno}
              onDelete={props.onDelete}
            />
          ))
        : "No Todos left"}
    </div>
  );
}
