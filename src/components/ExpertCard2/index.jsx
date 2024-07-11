import './expertcard2.css';

function ExpertCard2({ numero, texto }) {
  return (
    <div className='expertcard2'>
        <div className='expertcard-number'>{numero}</div>
        <p>{texto}</p>
    </div>
  )
}

export default ExpertCard2