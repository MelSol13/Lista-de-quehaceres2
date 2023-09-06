import React, { useState } from "react";
//props reciben la info de las variables list y setlist del app.js
const Form = (props) => {
    // Desestructurar props
    const { list, setList } = props;

    // Propiedades de la tarea
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(false);//todas las tareas que empiecen que no se han completado
//Metodo para añadir tarea
const addTask =(e) => {
    e.preventDefault();//para que no se recargue la página
    //si la tarea viene vacia
    if(title.length ===0){
        return;
    }
    const newTask = {
        title, status//una vez se crea una tarea...
    }
    setList([...list, newTask]);//aqui si ya que se añada la tarea
    
}


    return(
        <div>
            <form onSubmit={addTask}>
                <label>New Task</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/*lo que la persona escriba es el onchange*//>
                <input type="submit" value={"Add task"}/>
            </form>
        </div>
    )


}

export default Form;