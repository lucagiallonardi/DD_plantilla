import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import './Dgrafico.css';
import { Link } from 'react-router-dom';
import Cut from '../../home/Cut/Cut';

const Dgrafico = () => {
    return (
        <div> 
            <NavBar/>
             <Whatsapp/> 


            <div className='DgraficoDiv'>
                <h1>Bienvenidos a la sección de Diseño Gráfico</h1>
                <p>Acá es donde la creatividad cobra vida y las ideas toman forma. Estoy lista para ayudarte a transmitir visualmente la esencia de tu marca, desde logotipos y tarjetas hasta diseños llamativos para tus redes sociales. Estoy emocionada de trabajar con vos y crear proyectos que te representen de manera única.</p>


                <div className="elements-dGrafico">
            <div className="element-dGrafico"><div className="dGrafico-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGrafico-btn">→ Consultar</button></Link></div>
            <div className="element-dGrafico"><div className="dGrafico-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGrafico-btn">→ Consultar</button></Link></div>
            <div className="element-dGrafico"><div className="dGrafico-ico"></div><h3>Solucion</h3><h5>subtitulo</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus et eius beatae natus iure soluta maxime ipsa, consequuntur, velit aspernatur, vero animi earum in aliquam exercitationem consequatur molestiae distinctio voluptatibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nemo in hic veniam error voluptatum neque commodi architecto accusantium nobis perspiciatis suscipit, odio repellat aspernatur animi beatae deserunt dolorem! Impedit.</p>
            <Link to={"/contactg"} className="link"><button type="button" className="btn btn-dark dGrafico-btn">→ Consultar</button></Link></div>
            </div>

            <Cut/>




                <h2>Creemos juntos lo que estás buscando</h2>

                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                 Creatividad y originalidad
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                 Para crear diseños únicos y cautivadores que destaquen tu marca y la diferencien de la competencia.
                </div>
               </div>
                </div>
                <div className="accordion-item">
                 <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Profesionalismo
                  </button>
                 </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              Trabajos de calidad que garantizan diseños adaptados a tus necesidades específicas.
              </div>
                 </div>
                </div>
                

                 <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                     Comunicación visual efectiva
                     </button>
                    </h2>
                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                     Te ayudo a transmitir mensajes y conceptos de manera visualmente cautivadora y fácil de entender. 
                    </div>
                 </div>
                 </div>

                 <div className="accordion-item">
                    <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                     Identidad coherente
                     </button>
                    </h2>
                 <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Me aseguro de que todos los elementos visuales de tu marca sean coherentes y refuercen la identidad de tu empresa. Esto ayuda a establecer una imagen sólida y reconocible.
                    </div>
                 </div>
                 </div>

                 
                 
                </div>
                <p>Te invito a navegar por las siguientes secciones donde podés enterarte de todos los servicios que podés elegir:</p>
                <div className="btns-dGraficoDiv">
                <Link to={"/dg-redes"} className="link"><button type="button" className="btn btn-dark dGraficochange-btn">Diseño para redes</button></Link>
                <Link to={"/dg-logos"} className="link"><button type="button" className="btn btn-dark dGraficochange-btn">Diseño de logos</button></Link>
                <Link to={"/dg-impresos"} className="link"><button type="button" className="btn btn-dark dGraficochange-btn">Diseño impresión</button></Link>
                </div>


            </div>
             

        </div>
    );
};

export default Dgrafico;