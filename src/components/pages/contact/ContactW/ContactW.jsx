import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';
import './ContactW.css'

const ContactW = () => {
    return (
        <div>
            <NavBar
             clase="nav-link soluc-hidden"/>
             <Whatsapp/>

            <div className="contactW-all">
             <h1>Consultas sobre Diseño Web</h1>
             <p>Estoy acá para ayudarte con tu proyecto web! Enviame tus consultas y estaré encantado de responderte a la brevedad. A través de este sencillo formulario, podés compartirme los detalles de tu emprendimiento para que pueda comprender tus necesidades y ofrecerte una propuesta personalizada que se ajuste perfectamente a tus requerimientos. </p>

             <div className="container-contactW">
                <div className="persona-contactW">
                    <h4>Luca Giallonardi</h4>
                    <div className='img-concactW'></div>
                    <p>Desarrollador Full-Stack <br/> Freelance</p>
                </div>
                <div className="form-contactW">
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
                    <div className="btnDivContactW">
                    <button type="button" className="btn btn-dark btnFormContactW">Enviar</button>
                    </div>
                    </form>
                </div>
                <div className="desc-contactW">
                    <h4>¿De que se trata mi trabajo?</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Plasmar tu identidad visual en una pagina web atractiva</li>
                        <li class="list-group-item">Crear soluciones a través de un sitio web</li>
                        <li class="list-group-item">Ayudarte a captar nuevos clientes y expandir tu negocio</li>
                        <li class="list-group-item">Generar presencia en linea</li>
                        <li class="list-group-item">Crear proyectos excepcionales y únicos</li>
                    </ul>
                </div>
             </div>
             </div>

        </div>
    );
};

export default ContactW;