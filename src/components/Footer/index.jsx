import './footer.css'
import icon from '../../assets/icon.svg'
import arrowUp from '../../assets/arrow-up.svg'
import { Link } from 'react-router-dom';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <div className='up-footer'>
                <div className='footer-up-left'>
                    <img src={icon} alt="" />
                    <p>Conecte-se instantaneamente com especialistas mundialmente renomados em qualquer área e pague por minuto</p>
                </div>

                <nav className='nav-footer'>
                    <Link to="/become"  className={location.pathname === "/become" ? "active-link" : ""}>Torne-se um especialista</Link>
                    <Link to="/imprensa"  className={location.pathname === "/imprensa" ? "active-link" : ""}>Imprensa</Link>
                    <Link to="/faq"  className={location.pathname === "/faq" ? "active-link" : ""}>Perguntas Frequentes</Link>
                </nav>

                <div className='arrow-up' onClick={scrollToTop}>
                    <img src={arrowUp} alt="arrow-up" />
                </div>
            </div>

            <div className='down-footer'>
                <nav>
                    <a href="">2024 © Minnect LLC.</a>
                    <a href="">Politica de Privacidade</a>
                    <a href="">Termos e Condições</a>
                </nav>
            </div>

        </footer>
    )
}

export default Footer;