import './DescargarApp.css'

import android from './assets/android.png'
import apple from './assets/apple.png'
import appTelefono from './assets/app-telefono.jpg'


const DescargarApp = () =>{

    return(
        <div className="descargar-app">
            <figure className="descargar-app__imagen">
                <img src={appTelefono} alt="" />
            </figure>
            <div className="descargar-app__descripcion">
                <h2>Descarga nuestra aplicación y disfruta de los mejores restaurantes de la ciudad.</h2>
                <div className="descargar-app__descripcion__logos">
                    <img src={android} alt="android"/>
                    <img src={apple} alt="apple"/>
                </div>
            </div>
        </div>
    )
}

export default DescargarApp