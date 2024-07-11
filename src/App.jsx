import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import Faq from './pages/Faq';
import CarrersPage from './pages/Carrers';
import BecomeExpert from './pages/BecomeExpert';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/become" element={<BecomeExpert />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/carreiras" element={<CarrersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
