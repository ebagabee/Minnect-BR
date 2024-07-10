import Header from "../../components/Header";
import Hero from '../../components/Hero';
import SecaoPrimaria from '../../components/SecaoPrimaria';
import SecaoSecundaria from '../../components/SecaoSecundaria';
import SecaoTerciaria from '../../components/SecaoTerciaria';
import Talents from '../../components/Talents';
import Download from '../../components/Download';
import Footer from '../../components/Footer';
import Minnect from '../../components/Minnect';
import '../../App.css';

function IndexPage() {
    return (
        <>
            <Header />
            <Hero />
            <SecaoPrimaria />
            <SecaoSecundaria />
            <SecaoTerciaria />
            <Talents />
            <Minnect />
            <Download />
            <Footer />
        </>
    )
}

export default IndexPage;