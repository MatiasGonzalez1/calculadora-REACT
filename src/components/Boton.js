import React from 'react';
import '../styles/Boton.css'

const Boton = (props)=>{

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div 
    className={`boton-contenedor 
    ${esOperador(props.children) ? 'operador' : ''}`.trim()}>
      {props.children}
    </div>
  );
}

export default Boton;