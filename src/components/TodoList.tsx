import type { ToDo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: ToDo[];
  settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({ todos, settodos }: Props) => {
  return (
    <div className="container mt-11 w-[95%] flex flex-col md:flex-row justify-between gap-4">

      {/* Active Tasks */}
      <div className="todos w-full md:w-[48%] flex flex-col rounded-[5px] bg-orange-300">
        <span className="todos-heading w-full h-15 flex justify-center items-center text-3xl">
          Active Tasks
        </span>

        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              settodos={settodos}
            />
          ))}
      </div>

      {/* Completed Tasks */}
      <div className="todos-remove w-full md:w-[48%] flex flex-col rounded-[5px] bg-green-300">
        <span className="todos-heading w-full h-15 flex justify-center items-center text-3xl">
          Completed Tasks
        </span>

        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              settodos={settodos}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
