import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import type { ToDo } from "../model";

interface Props {
    todo: ToDo;
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}


const SingleTodo = ({ todo, todos, settodos }: Props) => {
    const handleDone = (id: number) => {
        settodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    }
    return (
        <>
            <form className=" rodosingle flex sm:w-full md:w-[48%] lg:w-[30%] rounded-md p-5 mt-3 bg-emerald-100">
                {
                    todo.isDone ? (<s className=" todosingletext sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none">
                        {todo.todo}
                    </s>) : (
                        <span className=" todosingletext sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none">
                            {todo.todo}
                        </span>
                    )
                }


                <div className="flex shrink-0 text-[25px] items-center space-x-3">
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200"><FaEdit /></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200"><MdDeleteForever /></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200" onClick={() => { handleDone(todo.id) }}><MdFileDownloadDone /></span>
                </div>

            </form ></>
    )
}

export default SingleTodo