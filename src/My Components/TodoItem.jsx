import React from "react";

export default function TodoItem(props) {
  return (
    <div className="container  my-3">
      <h4>{props.todoitem.title}</h4>
      <p>{props.todoitem.desc}</p>
      <button class="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todoitem)}>
        Delete
      </button>
      <hr />
    </div>
  );
}
