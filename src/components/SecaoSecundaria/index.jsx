import './secaosecundaria.css';
import Button from '../Button';
import Check from '../../assets/check.svg';
import Dustin from '../../assets/dustin-gutkowski.png';
import Adam from '../../assets/adam-sosnick.png';

function SecaoSecundaria() {
    return (
        <section className='secaosecundaria'>
            <div className='secaosecundaria__left'>
                <h1>Torne-se um especialista</h1>
                <h2>Pare de dar conselhos gratuitos.</h2>
                <ul>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Compartilhe o pódio com os líderes e empreendedores mais admirados do mundo no Minnect.</h3>
                    </li>
                    <li>
                        <img src={Check} alt="Check" />
                        <h3>Monetize seu tempo oferecendo consultas individuais ao seu público.</h3>
                    </li>
                </ul>
                <Button background="white" color="black" width="230px" height="58px" content="Torne-se um Especialista" />
            </div>
            <div className='secaosecundaria__right'>
                <div className='secaosecundaria__cards'>
                    <div className='secaosecundaria__card'>
                        <img src={Dustin} alt="Dustin Gutkowski" />
                        <div>
                            <p>“A melhor maneira de se conectar é no Minnect. Nunca vi ou fiz parte de uma rede ou aplicativo tão incrível. Eu respondo a perguntas de outras pessoas que desejam expandir seus negócios ou que precisam de ajuda em determinadas áreas. Se você deseja crescer pessoal ou profissionalmente, conecte-se no Minnect.”</p>
                            <span>—Dustin Gutkowski, CEO e Fundador, Results Roofing</span>
                        </div>
                    </div>
                    <div className='secaosecundaria__card'>
                        <img src={Adam} alt="Adam Sosnick" />
                        <div>
                            <p>"Minhas DMs do Instagram e LinkedIn estão completamente inundadas de fãs fazendo perguntas que nunca consigo responder. Mas agora no Minnect, posso monetizar meu tempo e experiência, responder 100% das minhas DMs e me sentir realizado ajudando meu público com qualquer pergunta que eles têm. Por que ser um influenciador quando você pode ser um consultor?"</p>
                            <span>—Adam Sosnick, Especialista Financeiro e Anfitrião da Valuetainment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecaoSecundaria;