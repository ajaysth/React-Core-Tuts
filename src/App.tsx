import { useState } from "react";
import InputField from "./components/InputField";
import "./index.css";
import type { ToDo } from "./model";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, settodos] = useState<ToDo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodos = [...todos, { id: Date.now(), todo, isDone: false }];
      settodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <>
      <div className="flex flex-col  items-center w-screen h-screen pt-10 bg-[#fef4d6] ">
        <span
          className="text-2xl sm:text-3xl md:text-4xl m-4 sm:m-7.5 z-1 font-fascinate">DoItDude
        </span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList todos={todos} settodos={settodos} />

        {/* {todos.map((todo) => (
          <div key={todo.id}>{todo.todo}</div>
        ))} */}
      </div>
    </>
  );
};

export default App;
