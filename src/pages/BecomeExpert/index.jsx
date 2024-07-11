import './becomeexpert.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Download from '../../components/Download';
import Fabiola from '../../assets/fabiola.png';
import Button from '../../components/Button';
import ExpertCard1 from '../../components/ExpertCard1';
import ExpertCard2 from '../../components/ExpertCard2';
import { useEffect } from 'react';

function BecomeExpert() {
    useEffect(() => {
        document.title = 'Torne-se um especialista - Minnect';
    }, []);

    return (
        <>
            <Header />
            <section className='becomeexpert'>
                <div className='becomeexpert__hero'>
                    <div className='becomeexpert__hero-left'>
                        <h1>Torne-se um <span>Expert</span></h1>
                        <p>O Minnect conecta você àqueles que mais se beneficiarão com seu conhecimento e experiência únicos. Ser um especialista significa ajudar os outros e ao mesmo tempo reconhecer o valor do seu tempo.</p>
                        <Button background="white" color="black" width="230px" height="58px" content="Junte-se como um especialista" fontSize="16px" />
                    </div>
                    <div className='becomeexpert__hero-right'>
                        <img src={Fabiola} alt="Imagem do Banner" />
                    </div>
                </div>
            </section>
            <div className='expert-cards1'>
                <ExpertCard1 titulo="Ajudar" paragrafo="Conecte-se individualmente com usuários que buscam respostas para suas perguntas. Execute um serviço valioso que permite aos usuários resolver seus desafios mais importantes. É bom ajudar os outros." />
                <ExpertCard1 titulo="Aprender" paragrafo="Aprender
                Obtenha informações valiosas sobre o seu público. Você terá mais clareza sobre quais aspectos do seu conhecimento e experiência os outros mais valorizam. Use esse feedback para se tornar ainda mais eficaz na entrega de valor aos outros." />
                <ExpertCard1 titulo="Ganhar" paragrafo="Seu tempo é valioso. Minnect permite que você monetize seu tempo. Escolha quando você trabalha e quanto vale o seu tempo. Crie um novo fluxo de receita e ao mesmo tempo agregue valor a outros!" />
            </div>
            <h1 className='expert-funciona'>Como Funciona</h1>
            <div className='expert-cards2'>
                <ExpertCard2 numero="1" texto="Crie um perfil que expresse claramente o valor que você pode oferecer" />
                <ExpertCard2 numero="2" texto="Defina sua disponibilidade para que você possa responder perguntas conforme sua conveniência" />
                <ExpertCard2 numero="3" texto="Defina preços que reflitam quanto vale o seu tempo" />
                <ExpertCard2 numero="4" texto="Receba pagamentos de forma rápida e segura através da nossa integração com Stripe" />
            </div>
            <Download />
            <Footer />
        </>
    )
}

export default BecomeExpert;