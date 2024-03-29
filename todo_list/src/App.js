import TodoForm from "./Components/TodoForm";
import { useState } from "react";
import Todos from "./Components/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: "eat", completed: true },
    // { id: 2, title: "sleep", completed: false },
    // { id: 3, title: "study", completed: false },
  ]);
  const addNewTodo = (newtodo) => {
    setTodos((prevState) => {
      return [...prevState, newtodo];
    });
  };
  const addCheckbox = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const removeTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  return (
    <div className="App">
      <h1 className="main-title">Todo_List</h1>
      <ToastContainer />
      <TodoForm addNewTodo={addNewTodo} />
      <Todos todos={todos} addCheckbox={addCheckbox} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
