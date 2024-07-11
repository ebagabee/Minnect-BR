import './footer.css'
import icon from '../../assets/icon.svg'
import arrowUp from '../../assets/arrow-up.svg'

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

                <nav>
                    <a href="">Torne-se um especialista</a>
                    <a href="">Imprensa</a>
                    <a href="">FAQ</a>
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