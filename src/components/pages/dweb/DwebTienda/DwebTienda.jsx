import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import { Link } from 'react-router-dom';
import './DwebTienda.css';
import Cut from '../../home/Cut/Cut'

const DwebTienda = () => {
    return (
        <div>
            <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/>
            
            

             <div className="dWebTiendasDiv">
                <Cut/>
                <h1 className='dWebTiendas-title'>Diseño de tiendas online</h1>
                <div className="dWebTiendasDivs">
                  <p>¿Necesitas una tienda online para vender tus productos en linea?</p>
                </div>
                <div className="elements-dWebTiendas">
                <div className="element-dWebTiendas"><div className="dWebTiendas-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebTiendas-btn">→ Consultar</button></Link></div>
                <div className="element-dWebTiendas"><div className="dWebTiendas-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebTiendas-btn">→ Consultar</button></Link></div>
                <div className="element-dWebTiendas"><div className="dWebTiendas-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
                <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWebTiendas-btn">→ Consultar</button></Link></div>
                </div>
                <div className="dWebTiendas-about">
                <div className="btns-dWebDiv">
                <Link to={"/dwpags"} className="link"><button type="button" className="btn btn-dark dWebTiendaschange-btn">Paginas Web</button></Link>
                <Link to={"/dweb"} className="link"><button type="button" className="btn btn-dark dWebTiendaschange-btn">Otras soluciones</button></Link>
                </div>
                <h2>Diseño de tiendas online</h2>
                <p>Una tienda online bien diseñada y optimizada que represente tu marca de manera cautivadora, con una experiencia de compra atractiva y fácil de usar para tus clientes, puede ampliar tu alcance y aumentar tus ventas, brindando una experiencia de compra sin complicaciones mediante el uso de funcionalidades como carritos de compra, métodos de pago seguros y opciones de seguimiento de pedidos. Utilizaremos elementos visuales atractivos y una estructura intuitiva para que tus clientes se sientan cómodos y confiados al navegar por tu tienda.</p>
                </div>
                </div> 
        </div>
    );
};

export default DwebTienda;