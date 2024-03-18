import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='aboutDiv'>
            <h1>Diseño gráfico y web para destacar en el mundo digital</h1>
            <div className="about-divs">
            <p>En nuestro estudio, nos dedicamos al diseño gráfico y web con un enfoque especial para emprendedores como vos. Somos un equipo especializado en transmitir de manera efectiva y visualmente atractiva la esencia de tu empresa, a través de diseños coherentes y cautivadores. Estamos acá para impulsar tu marca y ayudarte a destacar. Llevemos tu emprendimiento al siguiente nivel con nuestra creatividad y experiencia en diseño.</p>
            </div>
            <div>
                <Link to={"/dgrafico"} className="link"><button type="button" className="btn btn-dark about-btns">Diseño Gráfico</button></Link>
                <Link to={"/dweb"} className="link"><button type="button" className="btn btn-dark about-btns">Diseño Web</button></Link>
            </div>
        </div>
    );
};

export default About;