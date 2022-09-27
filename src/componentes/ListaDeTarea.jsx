import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../hojas-de-estilos//ListaDeTareas.css'


function ListaDeTarea (){


const [tareas, setTareas] = useState([]); 

const agregarTarea = tarea=>{
    console.log('tarea agragada')
    console.log(tarea);
}


return (
<>
    <TareaFormulario />
    <div className="tareas-lista-contenedor">
   {
    tareas.map((tarea) =>
    <Tarea 
        texto ={tarea.texto}
        completada ={tarea.completada} />

    )
   }
    </div>
</>
)
}

export default ListaDeTarea;