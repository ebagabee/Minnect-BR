import TextUse from '../TextUse';
import './minnect.css'
import FirstMobile from '../../assets/FirstMobile.png'
import SecondMobile from '../../assets/SecondMobile.png'
import ThirthMobile from '../../assets/ThirthMobile.png'

function Minnect() {
    return (
        <section className='how-to-use'>
            <h1 className='title'>Como você pode usar o Minnect</h1>
            <p className='subtitle'>Obtenha respostas de um especialista usando nossas três opções simples de engajamento:</p>

            <div className='mobile'>
                <TextUse
                    title="1 - Resposta por texto"
                    description="A opção mais econômica permite que você envie uma pergunta a um especialista e receba rapidamente uma resposta em texto com as informações que você precisa."
                />

                <img src={FirstMobile} alt="" />
            </div>

            <div className='mobile'>
                <img src={SecondMobile} alt="" />

                <TextUse
                    title="2 - Video Resposta"
                    description="Para uma resposta mais única, envie uma pergunta a um especialista e o especialista lhe enviará uma resposta pessoal em vídeo."
                />
            </div>

            <div className='mobile'>
                <TextUse
                    title="3 - Video chamada"
                    description="Obtenha respostas detalhadas e personalizadas às suas perguntas reservando um de nossos especialistas para uma chamada de vídeo individual. Nada supera uma ótima conversa!"
                />

                <img src={ThirthMobile} alt="" />
            </div>
        </section>
    )
}

export default Minnect;