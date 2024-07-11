import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './faq.css'

function Faq() {
    return (
        <>
            <Header />
            <div className="container-faq">
                <h1 className="faq-title">Check the answers to frequently asked questions</h1>

                <div className="faq-buttons">
                    <Button content="Questoes Gerais" width="33%" radius="28px" height="90px" color="#fff" weight="700" />
                    <Button content="Perguntas de Especialistas" width="33%" radius="28px" height="90px" color="#fff" weight="700" />
                    <Button content="Questoes de Usuarios" width="33%" radius="28px" height="90px" color="#fff" weight="700" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq;