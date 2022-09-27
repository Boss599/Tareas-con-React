import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../hojas-de-estilos//ListaDeTareas.css'


function ListaDeTarea (){


const [tareas, setTareas] = useState([]); 

const agregarTarea = tarea=>{
    console.log(tareas)
  if (tarea.texto.trim()){
    tarea.texto = tarea.texto.trim();

    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);

  }
}
const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
}

return (
<>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className="tareas-lista-contenedor">
   {
    tareas.map((tarea) =>
    <Tarea
        key={tarea.id} 
        id={tarea.id}
        texto ={tarea.texto}
        completada ={tarea.completada}
        eliminarTarea={eliminarTarea} />

    )
   }
    </div>
</>
)
}

export default ListaDeTarea;