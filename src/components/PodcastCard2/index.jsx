import './podcastcard2.css'

function PodcastCard2({imagem, titulo, paragrafo}) {
    return (
        <div className='podcastcard2'>
            <img src={imagem} alt="ícone" />
            <h2>{titulo}</h2>
            <div>
                <p>{paragrafo}</p>
            </div>
        </div>
    )
}

export default PodcastCard2;