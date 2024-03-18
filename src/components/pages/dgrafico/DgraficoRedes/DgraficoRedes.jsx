import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import './DgraficoRedes.css';
import { Link } from 'react-router-dom';
import Cut from '../../home/Cut/Cut';

const DgraficoRedes = () => {
    return (
        <div>
            <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/>
            
            
             <div className="dGraficoRedesDiv">
                <Cut/>
                <h1 className='dGraficoRedes-title'>Diseños para redes sociales</h1>
                <div className="dGraficoRedesDivs">
                  <p>¿Necesitas ayuda para mejorar tu imagen en redes sociales?</p>
                </div>
                <div className="elements-dGraficoRedes">
                <div className="element-dGraficoRedes"><div className="dGraficoRedes-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoRedes-btn">→ Consultar</button></Link></div>
                <div className="element-dGraficoRedes"><div className="dGraficoRedes-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoRedes-btn">→ Consultar</button></Link></div>
                <div className="element-dGraficoRedes"><div className="dGraficoRedes-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGraficoRedes-btn">→ Consultar</button></Link></div>
                </div>
                <div className="dGraficoRedes-about">
                <div className="btns-dGraficoLogosDiv">
                <Link to={"/dg-logos"} className="link"><button type="button" className="btn btn-dark dGraficoRedeschange-btn">Diseño de logos</button></Link>
                <Link to={"/dg-impresos"} className="link"><button type="button" className="btn btn-dark dGraficoRedeschange-btn">Diseño impresion</button></Link>
                <Link to={"/dgrafico"} className="link"><button type="button" className="btn btn-dark dGraficoRedeschange-btn">Otras soluciones</button></Link>
                </div>
                <h2>Diseños para redes sociales</h2>
                <p>Crear imágenes y contenido para tus redes sociales puede marcar una gran diferencia en tu negocio. Con mi ayuda podés obtener diseños que realmente conecten con tu público y vuelvan visualmente atractivo tu perfil, captando también nuevos seguidores.</p>
                </div>
                </div>      
        </div>
    );
};

export default DgraficoRedes;