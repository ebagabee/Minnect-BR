import './hero.css';
import Button from '../Button';
import Card from '../Card';

function Hero() {
    return (
        <section className="hero">
            <div className='hero-left'>
                <h1>Obtenha Aconselhamento Especializado <span>Instantaneamente</span></h1>
                <h4>Conecte-se 1 a 1 com as pessoas que você mais admira para obter as respostas que precisa. Tornamos conselhos de classe mundial facilmente acessíveis a todos.</h4>
                <div>
                    <Button background="black" color="white" width="202px" height="58px" content="Encontre um Especialista" />
                    <Button background="white" color="black" width="236px" height="58px" content="Torne-se um Especialista" />
                </div>
                <h3>Or</h3>
                <a href="#">Reserve um convidado para seu próximo podcast</a>
            </div>
            
            <div className='hero-right'>
                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />

                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />

                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />

                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />

                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />

                <Card
                    about="about"
                    nameCard="nome"
                    subtitle="Subtitulo"
                    image="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                    width="200px"
                    height="250px"
                />
            </div>
        </section>
    )
}

export default Hero;