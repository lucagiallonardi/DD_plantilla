import React from 'react';
import './Solutions.css'
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <div className='solDiv' id='soluciones'>
            <h1 className='sol-title'>Nuestras Soluciones</h1>
            <div className="solutionsDivs">
                <p>Nos emociona compartir con vos algunas de nuestras soluciones de diseño que pueden ayudarte a potenciar tu negocio. Desde diseño de logotipo o tarjetas de presentación hasta la expansión al mundo digital por medio de paginas web, redes sociales y tiendas online.</p>
            </div>
            <div className="elements">
            <div className="element-solution"><div className="sol-ico"></div><h3>Diseño de impresión</h3><h5>Tarjetas | Catálogos | Etiquetas</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p></div>
            <div className="element-solution"><div className="sol-ico"></div><h3>Diseño de logo</h3><h5>Creación | Modernización</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p></div>
            <div className="element-solution"><div className="sol-ico"></div><h3>Redes Sociales</h3><h5>Plantillas | Flyers | Publicaciones</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p></div>
            <div className="element-solution"><div className="sol-ico"></div><h3>Diseño Web</h3><h5>Pagina web | Tienda online</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p></div>
            
            </div>
            <Link to={"/contactall"} className="link"><button type="button" className="btn btn-dark solut-btn">→ Solicitar presupuesto</button></Link>
        </div>
    );
};

export default Solutions;