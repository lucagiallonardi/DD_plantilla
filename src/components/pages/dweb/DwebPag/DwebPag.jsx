import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import { Link } from 'react-router-dom';
import './DwebPag.css'
import Cut from '../../home/Cut/Cut';

const DwebPag = () => {
    return (
        <div>
            <NavBar
            clase="nav-link soluc-hidden"/>
            <Whatsapp/>
            
            
            <div className="dWebPagsDiv">
                <Cut/>
                <h1 className='dWebPags-title'>Diseño de páginas web</h1>
                <div className="dWebPagsDivs">
                  <p>¿Necesitas una página web para generar presencia en línea?</p>
                </div>
                <div className="elements-dWebPags">
                <div className="element-dWebPags"><div className="dWebPags-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebPags-btn">→ Consultar</button></Link></div>
                <div className="element-dWebPags"><div className="dWebPags-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebPags-btn">→ Consultar</button></Link></div>
                <div className="element-dWebPags"><div className="dWebPags-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebPags-btn">→ Consultar</button></Link></div>
                </div>
                <div className="dWebPags-about">
                <div className="btns-dWebDiv">
                <Link to={"/dwtiendas"} className="link"><button type="button" className="btn btn-dark dWebPagschange-btn">Tienda Online</button></Link>
                <Link to={"/dweb"} className="link"><button type="button" className="btn btn-dark dWebPagschange-btn">Otras soluciones</button></Link>
                </div>
                <h2>Diseño de páginas web</h2>
                <p>Una página web atractiva capta la atención de tus visitantes desde el primer momento. Mi objetivo es crear una experiencia única que refleje la personalidad y los valores de tu negocio. Trabajaré para entender tus necesidades y traducirlas en un sitio web a medida que te haga destacar. Además, una página web bien diseñada y optimizada puede impulsar tu negocio, ya que te permitirá llegar a un público más amplio y aumentar tu visibilidad en línea. Podremos implementar características como un diseño responsive, una navegación intuitiva y una estructura optimizada para los motores de búsqueda, lo que ayudará a atraer más visitantes y convertirlos en clientes. </p>
                </div>
                </div> 

        </div>
    );
};

export default DwebPag;