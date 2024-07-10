import './secaoterciaria.css';
import Button from '../Button';
import AfterHero from '../../assets/afterHero.svg';

function SecaoTerciaria() {
    return (
        <section className='secaoterciaria'>
            <div className='secaoterciaria__left'>
                <h1>Tem um podcast? <span>Reserve seu próximo convidado através do</span> Minnect.</h1>
                <p>Conectamos hosts de podcast com os melhores palestrantes do mundo. Orgulhamo-nos de representar apenas os mais conceituados líderes, empresários e ícones culturais.</p>
                <div className='secaoterciaria__botao'>
                    <Button background="white" color="black" width="230px" height="58px" content="Reserve seu próximo convidado de podcast" />
                </div>
            </div>
            <div className='secaoterciaria__right'>
                <img src={AfterHero} alt="Minnect" />
            </div>
        </section>
    )
}

export default SecaoTerciaria;
