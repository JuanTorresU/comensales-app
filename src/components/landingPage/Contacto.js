import { useForm } from "react-hook-form";
import './Contacto.css'

const Contacto = ()=>{

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {}

    return(
        <div className="contacto">
            <form className="contacto__formulario" onSubmit={handleSubmit(onSubmit)}>
                <h2>¡Contactanos!</h2>
                <input  className="contacto__formulario__campo" placeholder="Nombre" {...register("nombre",{ required: true })} />
                <input  className="contacto__formulario__campo" type="email"  placeholder="Correo electrónico" {...register("email",{ required: true })} />
                <input  className="contacto__formulario__campo" placeholder="Asunto" {...register("asunto",{ required: true })} />
                <input  className="contacto__formulario__campo" defaultValue={''} placeholder="¿En que podemos ayudarte?" {...register("cuerpo",{ required: true })} />
                <button className="contacto__formulario__submit" type="input">Enviar</button>
            </form>
            <div className="contacto__imagen">
                <span>Los mejores momentos para nuestros comensales</span>

            </div>
        </div>
    )
}

export default Contacto