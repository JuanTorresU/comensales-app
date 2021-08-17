import './Inicio.css'

import logo from './assets/logo.svg'

const Inicio = ()=>{

    return(
        <div className="inicio">
            <nav className="inicio__nav">
                <img src={logo} alt="logo" />
                <button className="inicio__nav__sesion"> <p>Inicia sesion</p><div></div></button>
                
            </nav>

            <div className="inicio__titulo">
                <h1 className="inicio__titulo-principal">
                    Registra tu restaurante en el mejor buscador para tus comensales
                </h1>
                <button className="inicio__titulo__boton">
                    Registrar restaurante
                </button>

            </div>
        </div>
    )
}

export default Inicio