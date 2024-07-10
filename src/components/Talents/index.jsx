import './talents.css';
import Talent from '../Talent';

function Talents() {
    return (
        <section className='talents'>
            <Talent
                background="https://minnect.com/wp-content/themes/betheme-child/img/home/podcast/terrell-owens.png"
                name="Terrel Owens"
                description="Receptor de Passe da NFL, Filantropo"
            />

            <Talent
                background="https://minnect.com/wp-content/themes/betheme-child/img/home/podcast/patrick-bet-david.png"
                name="Patrick Bet-David"
                description="CEO e Fundador, Valuetainment"
            />

            <Talent
                background="https://minnect.com/wp-content/themes/betheme-child/img/home/podcast/michael-franzese.png"
                name="Michael Franzese"
                description="Ex-membro feito da Família do Crime Organizado Colombo"
            />
        </section>
    )
}

export default Talents;
