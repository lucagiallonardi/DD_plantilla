import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import Cut from '../../home/Cut/Cut';
import { Link } from 'react-router-dom';
import './Dweb.css'

const Dweb = () => {
    return (
        <div>
            <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/> 


             <div className='DwebDiv'>
                <h1>Bienvenidos a la sección de Diseño Web</h1>
                <p>Acá es donde las ideas se transforman en propuestas digitales cautivadoras. Estoy listo para ayudarte a transmitir la esencia de tu marca a través de diseños web creativos. Desde páginas web funcionales y estéticamente agradables hasta interfaces de usuario intuitivas y tiendas online, creo soluciones digitales que destaquen y conecten con tu audiencia. Estoy ansioso de trabajar con vos y crear sitios web que reflejen tu identidad de la manera correcta.</p>


                <div className="elements-dWeb">
            <div className="element-dWeb"><div className="dWeb-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWeb-btn">→ Consultar</button></Link></div>
            <div className="element-dWeb"><div className="dWeb-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWeb-btn">→ Consultar</button></Link></div>
            <div className="element-dWeb"><div className="dWeb-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactw"} className="link"><button type="button" className="btn btn-dark dWeb-btn">→ Consultar</button></Link></div>
            </div>

            <Cut/>




                <h2>Beneficios de trabajar con nuestro equipo de Diseño Web</h2>

                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                 Diseño profesional y atractivo
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                 Mi misión es crear sitios web con un diseño atractivo y estéticamente agradable, asegurando que tu marca se destaque y genere una buena impresión en los visitantes.
                </div>
               </div>
                </div>
                <div className="accordion-item">
                 <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Experiencia en usabilidad
                  </button>
                 </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              Trabajo para crear interfaces intuitivas y fáciles de navegar, que brinden una experiencia positiva a los usuarios.
              </div>
                 </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     Adaptabilidad 
                     </button>
                    </h2>
                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                     Desarrollo sitios web adaptables, lo que significa que se verán y funcionarán de manera óptima en diferentes dispositivos y tamaños de pantalla.
                    </div>
                 </div>
                 </div>

                 <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                     Optimización para motores de búsqueda (SEO)
                     </button>
                    </h2>
                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                     Conozco bien las prácticas de SEO y puedo implementar estrategias para optimizar tu sitio web y mejorar su visibilidad en los motores de búsqueda, lo que aumenta las posibilidades de atraer tráfico orgánico y potenciales clientes.
                    </div>
                 </div>
                 </div>

                 <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                     Integración de funcionalidades y herramientas
                     </button>
                    </h2>
                 <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Me encargaré de integrar diversas funcionalidades y herramientas en tu sitio web, como formularios de contacto, sistemas de reservas, integración de redes sociales, entre otros, para mejorar la interacción con los usuarios y cumplir con tus objetivos comerciales.
                    </div>
                 </div>
                 </div>

                 <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                     Soporte técnico y actualizaciones
                     </button>
                    </h2>
                 <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Al trabajar conmigo tendrás acceso a soporte técnico para mantener tu sitio web funcionando de manera óptima y segura. Esto te brinda tranquilidad y te permite centrarte en tu negocio mientras dejas la parte técnica en mis manos.
                    </div>
                 </div>
                 </div>
                 
                </div>
                <p>Te invito a navegar por las siguientes secciones donde podés enterarte de todos los servicios que podés elegir:</p>
                <div className="btns-dWebDiv">
                <Link to={"/dwpags"} className="link"><button type="button" className="btn btn-dark dWebchange-btn">Pagina Web</button></Link>
                <Link to={"/dwtiendas"} className="link"><button type="button" className="btn btn-dark dWebchange-btn">Tienda Online</button></Link>
                </div>


            </div>
        </div>
    );
};

export default Dweb;