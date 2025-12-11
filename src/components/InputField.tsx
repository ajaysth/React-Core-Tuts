import { useRef } from "react";

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=> void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
    const inputField = useRef<HTMLInputElement>(null);
    return (
        <>
            <form className="flex sm:w-[90%] md:w-[70%] xl:w-[50%] relative items-center" onSubmit={(e)=> {handleAdd(e);
                inputField.current?.blur();}
            }>
                
                <input ref={inputField} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="bg-amber-600 w-full border-0 rounded-[50px] pt-5 pb-5 pl-[30px] pr-[30px] text-[25px] transition duration-250ms shadow-[0_0_6px_black,inset_0_0_7px_black] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] focus:outline-none" placeholder="Enter your task." />
                <button className="cursor-pointer absolute right-3 w-[50px] h-[50px] m-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white text-[15px] shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_0_5px_black] transition-all duration-200 active:scale-90 active:shadow-[0_0_3px_black] " type="submit">Add</button>

                

            </form>
        </>
    )
}

export default InputField