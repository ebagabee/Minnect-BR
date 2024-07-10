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
                <h2>Pare de procurar respostas no Google.</h2>
                <h2>Pare de fazer com que suas DMs sejam ignoradas.</h2>
                <ul>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Obtenha aconselhamento personalizado e treinamento individual das pessoas que você mais admira.</h3>
                    </li>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Pague para garantir uma taxa de resposta de 100%.</h3>
                    </li>
                </ul>
                <Button background="white" color="black" width="230px" height="58px" content="Encontre um Especialista" />
            </div>
        </section>
    )
}

export default SecaoPrimaria;