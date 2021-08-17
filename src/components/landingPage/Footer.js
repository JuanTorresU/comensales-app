import './Footer.css'
import logo from './assets/logo.svg'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import email from './assets/email.png'

const Footer = ()=>{

    return(
        <footer>
            
            <ul className="footer__nav">
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Iniciar sesion</a></li>
                <li><a href="/#">Registrar mi restaurante</a></li>
                <li><a href="/#">Buscar restaurante</a></li>
                <li><a href="/#">Recomendados</a></li>
                <li><a href="/#">Ayuda</a></li>
                <li><a href="/#">FAQ</a></li>
            </ul>
            
            <div className="footer__links">
                <img src={logo} alt="logo" />
                <span>Desarrollado por Exsis ©2021</span>
                <div className="footer__links__social">
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
                    <img src={email} alt="email" />


                </div>


            </div>
        </footer>
    )
}

export default Footer