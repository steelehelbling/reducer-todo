import React, { useState } from "react";

export function TodoForm(props) {
  const [form, setForm] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTodo(form);
        setForm("");
      }}
    >
      <input
        name="todo"
        placeholder="text"
        value={form}
        onChange={(event) => {
          setForm(event.target.value);
        }}
      />
      <br/>
      <button type="submit">Create New Todo</button>
    </form>
  );
}
