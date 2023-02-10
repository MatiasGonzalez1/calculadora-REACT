// import logo from './logo.svg';
import './App.css';
import Logo from './assets/img/unnamed.png'
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={Logo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'><Boton>*</Boton></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
