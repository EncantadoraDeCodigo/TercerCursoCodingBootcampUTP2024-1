import './App.css';
import VictoriaLogo from './photos/logovictoria.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput]= useState('');

const agregarInput = val => {
  setInput(input + val); 
};

const CalcularResultado = () => {
  if (input){
    setInput(evaluate(input));
  }else{
    alert ('Por favor dígite valores válidos')
  }
}


  return (
    <div className='App'>
      <div className='victoria-logo-contenedor'>
        <img 
        src={VictoriaLogo}
        className='victoria-logo'
        alt= 'Aquí se encuentra el logo de la compañia'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>


        <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={CalcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={() => setInput(' ')} >Clear</BotonClear>
        </div>
      </div>
    </div>
    );
}

export default App;
