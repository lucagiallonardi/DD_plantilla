import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import './DgraficoLogos.css';
import { Link } from 'react-router-dom';
import Cut from '../../home/Cut/Cut'

const DgraficoLogos = () => {
    return (
        <div>
           <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/> 
             <div className="dGraficoLogosDiv">
             <Cut/>
            <h1 className='dGraficoLogos-title'>Diseño de logotipos</h1>
            <div className="dGraficoLogosDivs">
              <p>¿Necesitas crear un logo para tu negocio o modernizar tu logo actual?</p>
            </div>
            <div className="elements-dGraficoLogos">
            <div className="element-dGraficoLogos"><div className="dGraficoLogos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoLogos-btn">→ Consultar</button></Link></div>
            <div className="element-dGraficoLogos"><div className="dGraficoLogos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoLogos-btn">→ Consultar</button></Link></div>
            <div className="element-dGraficoLogos"><div className="dGraficoLogos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoLogos-btn">→ Consultar</button></Link></div>
            </div>
            <div className="dGraficoLogos-about">
            <div className="btns-dGraficoLogosDiv">
            <Link to={"/dg-redes"} className="link"><button type="button" className="btn btn-dark dGraficoLogoschange-btn">Diseño para redes</button></Link>
            <Link to={"/dg-impresos"} className="link"><button type="button" className="btn btn-dark dGraficoLogoschange-btn">Diseño impresión</button></Link>
            <Link to={"/dgrafico"} className="link"><button type="button" className="btn btn-dark dGraficoLogoschange-btn">Otras soluciones</button></Link>
            </div>
            <h2>Diseño de logotipos que capturen la escencia de tu negocio</h2>
            <p>Un logotipo bien diseñado que capte la esencia de tu negocio, no solo te ayuda a destacar, sino que también se vuelve tu sello personal y te identifica de manera única, como tu propia firma. En un mundo lleno de opciones, es crucial sobresalir y ser diferente.</p>
            </div>
            </div>

            


        </div>
    );
};

export default DgraficoLogos;