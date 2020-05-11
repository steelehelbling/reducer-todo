import React from "react";

function Todo(props) {
  return (
    <div>
      <h3
        className={props.item.completed ? "complete" : ""}
        onClick={(event) => {
            event.preventDefault();
          props.LoadComplete(props.item.id);
        }}
      >
        {props.item.todo}
      </h3>
    </div>
  );
}
export function TodoList(props) {
  return (
    <div>
      {props.state.map((item) => {
        return (
          <Todo 
          item={item} 
          key={item.id} 
          LoadComplete={props.LoadComplete} />
        );
      })}
    </div>
  );
}
