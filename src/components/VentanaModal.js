import React from 'react';
import Modal from 'react-modal';
import MenuRegistro from './MenuRegistro'
import './VentanaModal.css'

const customStyles = {
  content: {
    backgroundColor:"#F5F4F4",
    scrollBehavior: "smooth",
    overflowY: "auto",
    maxWidth: '700px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:"none",
    borderRadius:"15px",
    maxHeight: "90vh"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function VentanaModal({accion,plato}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      
      <button className={accion==="Editar"?"editar":"agregar"} onClick={openModal}>{accion}</button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <MenuRegistro plato={plato} closeModal={closeModal}/>
        
      </Modal>
    </div>
  );
}

export default VentanaModal