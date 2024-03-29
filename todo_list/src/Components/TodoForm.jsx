import React from "react";
import Todos from "./Todos";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addNewTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("please fill input", { autoClose: 2000 });
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addNewTodo(newTodo);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoform">
      <input
        type="text"
        className="form-input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
