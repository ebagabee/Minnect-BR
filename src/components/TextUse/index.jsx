import './textUse.css';

function TextUse({ title, description }) {
    return (
        <div className='card-text-use'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default TextUse;