import './podcast.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { useEffect } from 'react';
import Microfone from '../../assets/podcast.png';
import Card1 from '../../components/PodcastCard1';
import Card2 from '../../components/PodcastCard2';
import Img1 from '../../assets/confirm.svg';
import Img2 from '../../assets/schedule.svg';
import Img3 from '../../assets/payment.svg';
import Img4 from '../../assets/podcast.svg';
import Img5 from '../../assets/payout.svg';

function Podcast() {
    useEffect(() => {
        document.title = 'Reservar um Podcast - Minnect';
    }, []);

    return (
        <>
            <Header />
            <section className='podcast'>
                <div className='podcast__hero'>
                    <div className='podcast__hero-left'>
                        <h1>
                        Encontre, Reserve e Grave seu Próximo Podcast</h1>
                        <p>
                        Minnect é a sua solução completa para encontrar o alto-falante perfeito e executar toda a experiência de podcast na perfeição.</p>
                        <div className='podcast__hero-btn'>
                            <Button background="white" color="#45908f" width="230px" height="58px" content="Reserve seu próximo palestrante convidado" fontSize="16px" weight="600"/>
                        </div>
                    </div> 
                    <div className='podcast__hero-right'>
                        <img src={Microfone} alt="Imagem do Banner" />
                    </div> 
                </div>
                <div className='browse-speakers'>
                    <h1>Procure Palestrantes em Todos os Tópicos e Setores</h1>
                    <div className='browse__cards'>
                        <div className='browse__cards-up'>
                            <Card1 texto="Negócios"/>
                            <Card1 texto="Empreendedorismo"/>
                            <Card1 texto="Saúde e Bem Estar"/>
                            <Card1 texto="Meios de Comuinicação"/>
                        </div>
                        <div className='browse__cards-down'>
                            <Card1 texto="Esportes"/>
                            <Card1 texto="Política"/>
                            <Card1 texto="Comédia"/>
                            <Card1 texto="+ muito mais!"/>
                        </div>    
                    </div>
                    <div className='browse-speakers__btn'>
                        <Button background="white" color="#45908f" width="230px" height="58px" content="Reserve seu próximo convidado de podcast" fontSize="16px" weight="600"/>
                    </div>
                </div>
                <div className='podcast-how'>
                    <h1>Como Funciona</h1>
                    <div className='podcast-how__cards'>
                        <Card2 imagem={Img1} titulo="1-Confirme" paragrafo="Minnect confirma interesse com o hóspede."/>
                        <Card2 imagem={Img2} titulo="2-Agende" paragrafo="O Minnect trabalhará com você e o hóspede para encontrar um horário que funcione."/>
                        <Card2 imagem={Img3} titulo="3-Depósito" paragrafo="O Minnect irá cobrar o pagamento e mantê-lo em depósito."/>
                        <Card2 imagem={Img4} titulo="4-Podcast" paragrafo="O podcast acontece."/>
                        <Card2 imagem={Img5} titulo="5-Pagamento" paragrafo="Minnect transfere o pagamento do convidado imediatamente após o podcast."/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Podcast;