

const Message = () => {
    const name = "Ajay";
  
    if (name)
        return <div className="text-3xl text-red-500">Hello {name}</div>
    else
        return <div>Hello Guest</div>  
  
}

export default Message