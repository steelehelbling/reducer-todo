import React, { useReducer } from "react";
import { TodoForm } from "./components/Addtodo";
import { TodoList } from "./components/Todolist";

import "./App.css";

const initialState = [{
  todo: 'Learn about reducers',
  completed: false,
  id: new Date()
}]
 function reducer(state, action) {
  switch(action.type) {
      case "ADD_TODO":
          return [
            ...state,
            action.payload
          ]
      case "TOGGLE_TODO":
          return state.map((item) => {

           return (item.id === action.payload) ?
           {...item, completed: !item.completed} :
           item

          })

      case "CLEAR_TODO" :
          return state.filter((item) => !item.completed)
          default:   return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const NewTodo = {
      todo: input,
      completed: false,
      id: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: NewTodo });
  };

  const LoadComplete = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_TODO" });
  };

  return (
    <div className="App">
      <TodoList state={state} LoadComplete={LoadComplete} />
      <TodoForm addTodo={addTodo} />
      <button
        onClick={(event) => {
          event.preventDefault();
          clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}
export default App;
