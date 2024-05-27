import React, { useEffect, useState } from "react";
import axios from "axios";
import FormComponent from "./components/Form/Form";
import { Todo } from "./components/todo/todo";
import "./App.scss";

interface OutputObj {
  taskName: string;
  category: string;
  dueDate: string;
  _id: string;
  __v: number;
}
interface OutputArray {
  todos: OutputObj[];
}

function App() {
  const [todos, setTodos] = useState<OutputObj[]>([]);
  useEffect(() => {
    axios
      .get("https://todoapp-backend31.herokuapp.com", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => setTodos(response.data.toDoList));
  }, []);
  console.log("todos==", todos);
  return (
    <div className="app">
      <h1>TODO App</h1>
      <FormComponent />
      <Todo todos={todos} />

      <hr />
    </div>
  );
}

export default App;
