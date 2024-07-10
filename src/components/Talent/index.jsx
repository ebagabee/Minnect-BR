import './talent.css';

function Talent({ name, description, background }) {
    const talentStyle = {
        backgroundImage: `url(${background})`,
    }

    const talentAboutStyle = {
        backgroundColor: '#00000080',
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    return (
        <div className='talent' style={talentStyle}>
            <div className='talent-about' style={talentAboutStyle}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Talent;
