import React, {useState, useEffect} from 'react'; 
import Switch from "react-switch";
import './MenuVista.css'
import VentanaModal from './VentanaModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

async function PutData(id, datos){
    const res = await fetch(`https://6100c9a4bca46600171cf9be.mockapi.io/datosMenu/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        habilitado:datos[id-1].habilitado
      })
    });
    res.json()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

const MenuVista = () => {

  //Hooks
  const [datosMenu, setDatosMenu] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  
  async function fetchData(){
    const res = await fetch(`https://6100c9a4bca46600171cf9be.mockapi.io/datosMenu/`,);
    return res.json()
      .then(res => setDatosMenu(res))
      .catch(err => console.log(err))
  }

  const handleToggleDetails = ()=>{

  }

  const handleChangeButton = (checked,e,id) => {
    const datos = datosMenu
    datos[id-1].habilitado=checked
    PutData(id,datos)
    setDatosMenu([...datos])
  }

  return(
      <div className="menu">

      {/* <div style={{display: 'flex',justifyContent: 'space-between'}}>
        <h3 style={{display: "inline"}}>Plato</h3>
        <h4 style={{display: "inline", 'paddingRight':'80px'}}>Desactivar</h4>
      </div> */}
      {
        datosMenu.map(plato => {
            return( 
              <details key={plato.id} onToggle={handleToggleDetails}>
              
                      <summary> 
                          <span>{plato.nombre}</span> 
                          <div className="opciones">
                          <Switch 
                              onChange={handleChangeButton} 
                              checked={plato.habilitado} 
                              onColor="#86d3ff"
                              onHandleColor="#2693e6"
                              handleDiameter={20}
                              uncheckedIcon={false}
                              checkedIcon={false}
                              boxShadow="0px 1px 4px rgba(0, 0, 0, 0.6)"
                              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                              height={15}
                              width={32}
                              className="react-switch"
                              id={plato.id}
                          />
                          <VentanaModal accion={"Editar"} plato={plato}/>
                          <FontAwesomeIcon icon={faTimesCircle} color="#FF2929" />
                          </div>
                          
                          
                      </summary> 
                      <p><span>Precio:</span> ${plato.precio}</p>
                      <p><span> Categoría:</span> {plato.categoria}</p>
                      <p><span>Calorías: </span>{plato['calorias-min']} - {plato['calorias-max']}</p>
                      <h4><span>Ingrediente</span>s</h4>
                      <p className="ingredientes">{plato.ingredientes}</p> 
                      
              </details>
            )     
        })
      }
                                                                                                           
      <VentanaModal accion={"Agregar Plato"} plato={datosMenu.length}/>
      </div>
  )
}

export default MenuVista