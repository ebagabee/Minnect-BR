import React, { useState, useEffect } from 'react';
import './hero.css';
import Button from '../Button';
import Card from '../Card';

function Hero() {
    const [ryanGarciaImage, setRyanGarciaImage] = useState('https://minnect.com/wp-content/themes/betheme-child/img/home/hero/ryan-garcia.png');

    useEffect(() => {
        const handleResize = () => {
            const newImageSrc = window.innerWidth >= 1280
                ? 'https://minnect.com/wp-content/themes/betheme-child/img/home/hero/ryan-garcia.png'
                : 'https://minnect.com/wp-content/themes/betheme-child/img/home/hero/ryan-garcia-square.png';

            setRyanGarciaImage(newImageSrc);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1 className='hero-heading'>
                    <span>Obtenha Conselhos de Especialistas</span> Instantaneamente
                </h1>

                <p className='hero-paragraph'>
                    Conecte-se individualmente com as pessoas que mais admira para obter as respostas de que precisa. Tornamos o conselho de classe mundial facilmente acessível a todos.
                </p>

                <div className="hero-buttons max-w-[464px] text-center">
                    <div className="hero-buttons-container hero-buttons-container--sm flex gap-[20px]">
                        <Button background="transparent" color="white" width="220px" height="58px" content="Encontre um especialista" fontSize="16px" border="1px solid white" />
                        <Button background="white" color="black" width="230px" height="58px" content="Torne-se um Especialista" fontSize="16px"/>
                    </div>

                    <p className='hero-or text-center mt-[25px] text-3xl'>Ou</p>

                    <a href="#" className='inline-flex items-center gap-[8px] border-b border-white pb-[4px] text-[16px] font-bold transition-colors duration-200 hover:border-[#A6A6A6] hover:text-[#A6A6A6] mt-[25px]'>

                        <span className='text-left'>Agende um convidado para o seu próximo episódio de podcast</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill='currentColor'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2071 5.976C13.8166 5.58547 13.1834 5.58547 12.7929 5.976C12.4024 6.36652 12.4024 6.99969 12.7929 7.39021L17.0858 11.6831H5.5C4.94772 11.6831 4.5 12.1308 4.5 12.6831C4.5 13.2354 4.94772 13.6831 5.5 13.6831H17.0858L12.7929 17.976C12.4024 18.3665 12.4024 18.9997 12.7929 19.3902C13.1834 19.7807 13.8166 19.7807 14.2071 19.3902L20.2071 13.3902C20.5976 12.9997 20.5976 12.3665 20.2071 11.976L14.2071 5.976Z"></path>
                        </svg>

                    </a>
                </div>
            </div>

            <div className='hero-gallery'>
                <div className="grid grid-cols-2 grid-rows-[173px_173px_173px_173px] gap-x-[20px] gap-y-[16px] sm:grid-rows-[244px_244px_244px_244px] md:grid-cols-[344px_344px] md:grid-rows-[344px_344px_344px_344px] lg:grid-cols-[212px_212px] lg:grid-rows-[212px_212px_212px_212px] xl:grid-cols-[212px_212px_212px] justify-center itens-center">
                    <Card
                        imageSrc="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/chris-cuomo.png"
                        imageAlt="Chris Cuomo - Host at NewsNation"
                        imageClass="h-full w-full"
                        gridClass="col-start-1 col-end-2 row-start-1 row-end-3"
                        name="Chris Cuomo"
                        title="Apresentador na NewsNation"
                        description="Anteriormente apresentador do Cuomo Prime Time da CNN, o programa número 1 na maior plataforma de mídia do mundo. 20 anos na mídia e política. Várias indicações ao Emmy"
                    />
                    <Card
                        imageSrc="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/tulsi-gabbard.png"
                        imageAlt="Tulsi Gabbard - Former US Representative"
                        imageClass="h-full w-full"
                        gridClass="col-start-1 col-end-2 row-start-4 row-end-5 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
                        name="Tulsi Gabbard"
                        title="Ex-Representante dos EUA"
                        description="Ex-legisladora, candidata presidencial em 2020, tenente da Reserva dos EUA, possível vice-presidente em 2024"
                    />
                    <Card
                        imageSrc={ryanGarciaImage}
                        imageAlt="Ryan Garcia - American Professional Boxer"
                        imageClass="h-full w-full xl:inline"
                        gridClass="col-start-1 col-end-2 row-start-3 row-end-4 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-3"
                        name="Ryan Garcia"
                        title="Boxista Americano"
                        description="Ex-campeão interino dos leves do WBC, recorde de 25-1, vitórias notáveis sobre Devin Haney, Jayson Velez, Luke Campbell, Javier Fortuna, entre outros"
                    />
                    <Card
                        imageSrc="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/thomas-ellsworth.png"
                        imageAlt="Thomas Ellsworth - Co-Host of PBD Podcast, Chief Strategy Officer"
                        imageClass="h-full w-full"
                        gridClass="col-start-2 col-end-3 row-start-4 row-end-5 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-4"
                        name="Thomas Ellsworth"
                        title="Co-apresentador do PBD Podcast, Diretor de Estratégia"
                        description="25+ anos como founder/CEO/COO, Experiência em vendas superiores a $1.5 bilhões."
                    />
                    <Card
                        imageSrc="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/patrick-bet-david.png"
                        imageAlt="Patrick Bet-David - CEO and Founder, Valuetainment"
                        imageClass="h-full w-full"
                        gridClass="col-start-2 col-end-3 row-start-2 row-end-4"
                        name="Patrick Bet-David"
                        title="CEO e fundador da Valuetainment"
                        description='Nascido no Irã, criado nos EUA Empreendedor desde os 10 anos 📚 Autor do best-seller #1 do WSJ "Your Next Five Moves" 🌳 Sinergista ao longo da vida.'
                    />
                    <Card
                        imageSrc="https://minnect.com/wp-content/themes/betheme-child/img/home/hero/sage-steele.png"
                        imageAlt="Sage Steele - Former ESPN Host"
                        imageClass="h-full w-full"
                        gridClass="col-start-2 col-end-3 row-start-1 row-end-2 xl:col-start-3 xl:col-end-4 xl:row-start-3 xl:row-end-4"
                        name="Sage Steele"
                        title="Ex apresentadora do ESPN"
                        description="16 anos como apresentadora do SportsCenter na ESPN, jornalista e apresentador do The Sage Steele Show"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;