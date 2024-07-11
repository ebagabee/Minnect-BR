import './expertcard1.css';
import Estrela from '../../assets/star.svg'

function ExpertCard1({titulo, paragrafo}) {
  return (
    <div className='expertcard1'>
        <img src={Estrela} alt="Estrela" />
        <h1>{titulo}</h1>
        <p>{paragrafo}</p>
    </div>
  )
}

export default ExpertCard1;