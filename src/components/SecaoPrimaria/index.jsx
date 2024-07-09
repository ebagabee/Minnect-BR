import './secaoprimaria.css';
import Button from '../Button';
import AfterHero from '../../assets/afterHero.svg';
import Check from '../../assets/check.svg';

function SecaoPrimaria() {

    return (
        <section className='secaoprimaria'>
            <div className='secaoprimaria__left'>
                <img src={AfterHero} alt="Minnect" />
            </div>
            <div className='secaoprimaria__right'>
                <h1>Transforme qualquer celebridade em seu mentor pessoal em segundos</h1> 
                <h2>Stop searching for answers on Google.</h2>
                <h2>Stop getting your DMs ignored.</h2>
                <ul>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Get personalized advice and 1-1 coaching from the people you admire the most.</h3>
                    </li>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Pay to guarantee 100% response rate.</h3>
                    </li>
                </ul>
                <Button background="white" color="black" width="230px" height="58px" content="Torne-se um Especialista" />
            </div>
        </section>
    )
}

export default SecaoPrimaria;