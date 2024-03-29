import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ title, id, completed, addCheckbox, removeTodo }) {
  // function handlerclick() {
  //   completed = !{ completed };
  // }
  return (
    <div className="todo">
      <div className="todo_box1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            addCheckbox(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div
        onClick={() => {
          removeTodo(id);
        }}
        className="cross-btn"
      >
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
