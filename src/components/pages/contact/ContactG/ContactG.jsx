import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import './ContactG.css'

const ContactG = () => {
    return (
        <div>
            <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/>

            <div className="contactG-all">
             <h1>Envíanos tus consultas</h1>
             <p>¡Escribime todas tus preguntas y dudas! Estoy acá como tu contacto personal para ayudarte en todo lo relacionado con diseño gráfico. ¡Estaré encantada de responder!</p>

             <div className="container-contactG">
                <div className="persona-contactG">
                    <h4>Lucia Harguindeguy Doval</h4>
                    <div className='img-concactG'></div>
                    <p>Diseñadora Gráfica <br/> Freelance</p>
                </div>
                <div className="form-contactG">
                    <form>
                    <div className="form-floating mb-3">
                     <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                     <option selected>Otros</option>
                        <option value="1">Pymes</option>
                        <option value="2">Gastronomía</option>
                        <option value="3">Profesional ej. Contador, Abogado, etc.</option>
                        <option value="4">Oficio</option>
                        <option value="4">Servicios</option>
                    </select>
                    <label for="floatingSelect">Tipo de emprendimiento: *</label>
                    </div>
                    
                    <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Tu Nombre *</label>
                    </div>

                    <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email *</label>
                    </div>

                    <div className="form-floating mb-3">
                     <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                     <option selected></option>
                        <option value="1">Si, tengo un perfil de mi emprendimiento</option>
                        <option value="2">Si, uso mi perfil personal</option>
                        <option value="3">No uso redes sociales</option>
                    </select>
                    <label for="floatingSelect">¿Usas redes sociales para tu emprendimiento?</label>
                    </div>
                   

                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                    <label for="floatingTextarea2">Tu consulta *</label>
                    </div>
                    <div className="btnDivContactG">
                    <button type="button" className="btn btn-dark btnFormContactG">Enviar</button>
                    </div>
                    </form>
                </div>
                <div className="desc-contactG">
                    <h4>¿De que se trata mi trabajo?</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Capturar la escencia de tu negocio</li>
                        <li class="list-group-item">Crear de una identidad visual sólida</li>
                        <li class="list-group-item">Realizar diseños personalizados para potenciar tu negocio</li>
                        <li class="list-group-item">Guiarte en la inserción al mundo digital</li>
                        <li class="list-group-item">Crear proyectos excepcionales y únicos</li>
                    </ul>
                </div>
             </div>
             </div>

        </div>
    );
};

export default ContactG;