
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import '../src/hojas-de-estilos/TareaFormulario.css'
import ListaDeTarea from './componentes/ListaDeTarea';
function App() {
  return (
    <div className="aplicacion-tareas">
    < div className='freecodecamp-logo-contenedor'>
     
      <img 
      src={freeCodeCampLogo }
      className='freecodecamp-logo' 
      />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
    <ListaDeTarea />
    
      </div>
      
    </div>
  );
}

export default App;
