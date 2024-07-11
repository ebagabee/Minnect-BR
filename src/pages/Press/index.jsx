import './press.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import Button from '../../components/Button';
import Slide from '../../components/Slide';

function Press() {
    useEffect(() => {
        document.title = 'Imprensa - Minnect';
    }, []);

    return (
        <>
            <Header />
            <section class='press-text'>
                <h1>Por dentro do evento Minnect X Art Basel @ Soho House</h1>
                <span>7 de dezembro de 2023</span>
                <br/><br/>
                <p>Na noite de quinta-feira antes do início oficial do Art Basel Miami Beach 2023, a Valuetainment organizou seu evento de estreia “Minnect X Art Basel” no Soho Beach House Rooftop. A noite comemorou o lançamento do novo aplicativo de Patrick Bet-David, Minnect.</p>
                <br/>
                <p>A festa ultraconvidada fez parceria com Don Londres Tequila para sediar um evento repleto de estrelas com os principais influenciadores e executivos de tecnologia, capital de risco, mídia social, música, UFC e NBA. Os participantes incluíram nomes como o campeão dos leves do WBC, Ryan Garcia, o campeão do UFC Kamaru Usman, o campeão dos pesos pesados ​​Antonio Tarver e Pretty Ricky. Os convidados desfrutaram de música do DJ Dex Aint Dead, charutos do Cigars Love Show, cards esportivos de Dave Forman e instalações artísticas de Brady Matthews e Ahir Czeck. 
                </p>
                <br/>
                <p>
                Veja abaixo a galeria de fotos para conferir o interior da festa.
                </p>
                <br/>
                <p>
                O evento celebrou marcos impressionantes que o Minnect já alcançou, incluindo:</p>    
                <br/>   
            <ul>
                <li>Mais de 100.000 downloads de aplicativos</li>
                <li>Presença global nos EUA e em mais de 40 países</li>
                <li>Especialistas, empreendedores e influenciadores ganhando até US$ 85.000 em um único mês.</li>
            </ul>
            <br/>
            <p>Minnect é o único aplicativo para influenciadores se conectarem 1-1 com fãs por meio de texto, áudio e vídeo, incluindo chamadas FaceTime de 15 minutos a 1 hora.  95% dos DMs ficam sem resposta no Instagram, Twitter, LinkedIn e outras plataformas.  Os usuários agora podem garantir uma resposta do especialista do setor ou celebridade que mais admiram, enviando mensagens para eles no Minnect, enviando mensagens de texto para o especialista e pagando por mensagem, ou FaceTime para o especialista e pagando por minuto.</p>
            <br/>
            <p>
            Baixe o Minnect para obter conselhos de especialistas instantaneamente e transforme qualquer celebridade em seu mentor pessoal em segundos.
            </p>
            <br/>
            <p>
            Configure seu perfil de especialista no Minnect, defina suas taxas e comece a monetizar seu tempo e experiência.
            </p>
            <div className='press-text__btn'>
                <Button  background="white" color="#2a7f91" width="230px" height="58px" content="Junte-se como um especialista" fontSize="16px" />
            </div>
            </section>
            <Slide />
            <Footer />
        </>
    )
}

export default Press;