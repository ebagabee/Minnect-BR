import './podcast.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { useEffect } from 'react';
import Microfone from '../../assets/podcast.png';

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
                            <Button background="white" color="#45908f" width="230px" height="58px" content="Reserve seu próximo palestrante convidado" fontSize="16px"/>
                        </div>
                    </div> 
                    <div className='podcast__hero-right'>
                        <img src={Microfone} alt="Imagem do Banner" />
                    </div> 
                </div>
                <div className='browse-speakers'>
                    <h1>Procure Palestrantes em Todos os Tópicos e Setores</h1>
                    <div className='browse-speakers__btn'>
                        <Button background="white" color="#45908f" width="230px" height="58px" content="Reserve seu próximo palestrante convidado" fontSize="16px"/>
                    </div>
                </div>
                <div className='podcast-how'>
                    <h1>Como Funciona</h1>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Podcast;