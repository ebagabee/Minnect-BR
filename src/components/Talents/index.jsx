import './talents.css';
import Terrel from '../../assets/terrel-owens.png';
import Patrick from '../../assets/patrick-bet.png';
import Michael from '../../assets/michael-franzese.png';

function Talents() {
    return (
        <section className='talents'>
            <div className='talents__container'>
                <img src={Terrel} alt="Terrel Owens" />
                <img src={Patrick} alt="Patrick Bet-David" />
                <img src={Michael} alt="Michael Franzese" />
            </div>
        </section>
    )
}

export default Talents;
