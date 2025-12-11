import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import type { ToDo } from "../model";
import { useEffect, useRef, useState } from "react";

interface Props {
    todo: ToDo;
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}


const SingleTodo = ({ todo, todos, settodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        settodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
        // alert("Task done successfully!");
    }

    const handleDelete = (id: number) => {
        settodos(todos.filter((todo) => todo.id !== id));
        alert("Todo deleted successfully!");
    }

    const handleEdit = (e:React.FormEvent,id:number)=> {
        e.preventDefault();
        settodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo } : todo
        )));
        setEdit(false);
        alert("Todo edited successfully!");
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);


    return (
        <>
            <form className=" rodosingle flex sm:w-full md:w-[48%] lg:w-[30%] rounded-md p-5 mt-3 bg-emerald-100" onSubmit={(e) => {handleEdit(e, todo.id)}}>
                {
                    edit ? (
                        <input ref={inputRef} className=" todosingletext bg-emerald-200 sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none" type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                    ) : (

                        todo.isDone ? (<s className=" todosingletext sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none">
                            {todo.todo}
                        </s>) : (
                            <span className=" todosingletext sm:w-full flex-1 break-word p-1.5 text-[20px] focus:outline-none">
                                {todo.todo}
                            </span>
                        )


                    )
                }





                <div className="flex shrink-0 text-[25px] items-center space-x-3">
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200" onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit)
                        }
                    }}><FaEdit /></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200" onClick={() => { handleDelete(todo.id) }}><MdDeleteForever /></span>
                    <span className="text-2xl ml-2.5 cursor-pointer hover:scale-120 transition-transform duration-200" onClick={() => { handleDone(todo.id) }}><MdFileDownloadDone /></span>
                </div>

            </form ></>
    )
}

export default SingleTodo