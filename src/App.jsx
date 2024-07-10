import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import SecaoPrimaria from './components/SecaoPrimaria';
import SecaoSecundaria from './components/SecaoSecundaria';
import SecaoTerciaria from './components/SecaoTerciaria';
import Talents from './components/Talents';
import Download from './components/Download';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecaoPrimaria />
      <SecaoSecundaria />
      <SecaoTerciaria />
      <Talents />
      <Download />
      <Footer />
    </>
  )
}

export default App;
