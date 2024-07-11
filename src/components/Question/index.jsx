import React, { useState } from 'react';
import './question.css';

function Question({ title, number, text, answer, link }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <h1 className='question-h1'>{title}</h1>

            <div className='question-container'>
                <div className='question-title' onClick={toggleAnswer}>
                    <span className='title-number'>{number}</span>
                    <span className='title-text'>{text}</span>
                    <span className='toggle-button'>{isOpen ? '-' : '+'}</span>
                </div>
                {isOpen && (
                    <div className='answer'>
                        <p>{answer}</p>
                        <a href={link} className='link'>{link}</a>
                    </div>
                )}
            </div>
        </>
    );
}

export default Question;
