import './ItemCarrousel.css'

const ItemCarrousel = () =>{
    return( 
        <div className="item-carrousel">
            <div className="item-carrousel__header">
                <div className="item-carrousel__header__nombre">
                    <img src="" alt="" />
                    <span>Fontanar</span>
                </div>

                <img src="" alt="" />
            </div>

            <div className="item-carrousel__footer">
                <div className="item-carrousel__footer__datos">
                    <span>Desde $80.000</span>
                    <span>Calle 35 No 89-9d</span>
                    <span>Tel:351354</span>
                </div>
                <div className="item-carrousel__footer__botones">
                    <button>Ir</button>
                    <button>Reservar</button>
                </div>
            </div>
        </div>

    )
}
 
export default ItemCarrousel