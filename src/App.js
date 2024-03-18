import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home/Home';
import DgraficoRedes from './components/pages/dgrafico/DgraficoRedes/DgraficoRedes';
import DgraficoLogos from './components/pages/dgrafico/DgraficoLogos/DgraficoLogos';
import DwebPag from './components/pages/dweb/DwebPag/DwebPag';
import DwebTienda from './components/pages/dweb/DwebTienda/DwebTienda';
import Portfolio from './components/pages/portfolio/Portfolio';
import ContactG from './components/pages/contact/ContactG/ContactG';
import ContactW from './components/pages/contact/ContactW/ContactW';
import Dgrafico from './components/pages/dgrafico/Dgrafico/Dgrafico';
import Dweb from './components/pages/dweb/Dweb/Dweb';
import DgraficoImpresos from './components/pages/dgrafico/DgraficoImpresos/DgraficoImpresos';
import ContactAll from './components/pages/contact/ContactAll/ContactAll';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dg-logos" element={<DgraficoLogos/>}></Route>
      <Route path="/dg-redes" element={<DgraficoRedes/>}></Route>
      <Route path="/dg-impresos" element={<DgraficoImpresos/>}></Route>
      <Route path="/dwpags" element={<DwebPag/>}></Route>
      <Route path="/dwtiendas" element={<DwebTienda/>}></Route>
      <Route path="/contactg" element={<ContactG/>}></Route>
      <Route path="/contactw" element={<ContactW/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/dgrafico" element={<Dgrafico/>}></Route>
      <Route path="/dweb" element={<Dweb/>}></Route>
      <Route path="/contactall" element={<ContactAll/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
