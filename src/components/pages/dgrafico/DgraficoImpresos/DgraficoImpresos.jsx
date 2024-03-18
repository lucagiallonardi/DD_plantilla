import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import { Link } from 'react-router-dom';
import Cut from '../../home/Cut/Cut';
import './DgraficoImpresos.css';

const DgraficoImpresos = () => {
    return (
        <div>
           <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/> 



             <div className="dGraficoImpresosDiv">
             <Cut/>
            <h1 className='dGraficoImpresos-title'>Diseños para impresión</h1>
            <div className="dGraficoImpresosDivs">
              <p>¿Necesitas diseñar material de impresión para tu negocio como tarjetas o catálogos?</p>
            </div>
            <div className="elements-dGraficoImpresos">
            <div className="element-dGraficoImpresos"><div className="dGraficoImpresos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoImpresos-btn">→ Consultar</button></Link></div>
            <div className="element-dGraficoImpresos"><div className="dGraficoImpresos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoImpresos-btn">→ Consultar</button></Link></div>
            <div className="element-dGraficoImpresos"><div className="dGraficoImpresos-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoImpresos-btn">→ Consultar</button></Link></div>
            </div>
            <div className="dGraficoImpresos-about">
            <div className="btns-dGraficoImpresosDiv">
            <Link to={"/dg-redes"} className="link"><button type="button" className="btn btn-dark dGraficoImpresoschange-btn dGraficoImpresoschange-btn ">Diseño para redes</button></Link>
            <Link to={"/dg-logos"} className="link"><button type="button" className="btn btn-dark dGraficoImpresoschange-btn">Diseño de logos</button></Link>
            <Link to={"/dgrafico"} className="link"><button type="button" className="btn btn-dark dGraficoImpresoschange-btn">Otras soluciones</button></Link>
            </div>
            <h2>Diseño de material para impresión presonalizado</h2>
            <p>Tener tarjetas de presentación, etiquetas, folletos y otros materiales impresos para tu negocio tiene varias ventajas. Brindan una forma tangible de contactar con nuevos clientes y de presentar tu marca, dándole un mayor impacto visual que sobresalga de su competencia y transmitiendo una imagen profesional y de confianza. Además, son una forma duradera de promoción, ya que pueden ser distribuidos en eventos, tiendas o enviados por correo directo.</p>
            </div>
            </div>


        </div>
    );
};

export default DgraficoImpresos;