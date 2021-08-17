import './Recomendados.css'
import ItemCarrousel from './ItemCarrousel'
const Recomendados = ()=>{

    return(
        <div className="recomendados">
            <h2>Recomendados</h2> 
            <div className="recomendados__items">
                <ItemCarrousel/>
                <ItemCarrousel/>
                <ItemCarrousel/>

            </div>
        </div> 
    )
}

export default Recomendados