import './press.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect } from 'react';

function Press() {
    useEffect(() => {
        document.title = 'Imprensa - Minnect';
    }, []);

    return (
        <>
            <Header />
            <section>
                <h1>Por dentro do evento Minnect X Art Basel @ Soho House</h1>
            </section>
            <Footer />
        </>
    )
}

export default Press;