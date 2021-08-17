import './Caracteristicas.css'

import marcadorDePosicion from './assets/marcador-de-posicion.svg'
import like from './assets/like.svg'
import valoraciones from './assets/valoraciones.svg'


const Caracteristicas = ()=>{

    return(
        <div className="caracteristicas">
            <div className="caracteristicas__item">
                <figure className="caracteristicas__item__figura">
                    <img src={marcadorDePosicion} alt="marcadorDePosicion" />
                </figure>
                <p className="caracteristicas__item__descripcion"> 
                    Encuentra el mejor restaurante cerca de tu ubicación.
                </p>
            </div>
            <div className="caracteristicas__item">
                <figure className="caracteristicas__item__figura">
                    <img src={like} alt="like" />
                </figure>
                <p className="caracteristicas__item__descripcion"> 
                    Calidad en servicio y atención al comensal
                </p>
            </div>
            <div className="caracteristicas__item">
                <figure className="caracteristicas__item__figura">
                    <img src={valoraciones} alt="valoraciones" />
                </figure>
                <p className="caracteristicas__item__descripcion"> 
                    Reserva el mejor lugar con los mejores platos a tan solo un clic.
                </p>
            </div>
        </div>
    )
}

export default Caracteristicas