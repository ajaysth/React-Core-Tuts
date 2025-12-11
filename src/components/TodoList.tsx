import type { ToDo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props{
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}
const TodoList = ({todos, settodos}: Props) => {
  return (
    <>
    <div className="flex flex-wrap gap-2 justify-evenly w-[90%]">
        {
            todos.map((todo)=>(
                <SingleTodo key={todo.id} todo={todo} todos={todos} settodos={settodos} />
            ))
        }

    </div>
    </>
  )
}

export default TodoList