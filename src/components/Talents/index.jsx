import './talents.css';
import Talent from '../Talent';
import Button from '../Button';

function Talents() {
    return (
        <section className='talents__container'>
            <div className='talents'>
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
            </div>

            <Button background="white" color="black" width="230px" height="65px" content="Veja todos os talentos disponíveis para reserva" weight="600"/>
        </section>
    )
}

export default Talents;
