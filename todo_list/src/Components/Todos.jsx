import React from "react";
import Todo from "./Todo";
function Todos({ todos, addCheckbox, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            addCheckbox={addCheckbox}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
}

export default Todos;
