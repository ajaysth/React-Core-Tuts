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
    return (
        <>
            <form className=" rodosingle flex sm:w-full md:w-[48%] lg:w-[30%] rounded-md p-5 mt-3 bg-emerald-100">
                <span className=" todosingletext sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none">
                    {todo.todo}
                </span>

                <div className="flex shrink-0 text-[25px] items-center space-x-3">
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200"><FaEdit/></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200"><MdDeleteForever /></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200"><MdFileDownloadDone /></span>
                </div>

            </form></>
    )
}

export default SingleTodo