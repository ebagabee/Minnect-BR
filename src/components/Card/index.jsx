import './card.css';

function Card({ image }) {
    return (
        <div className='card'>
            <img src={image} alt="" />
        </div>
    );
}

export default Card;