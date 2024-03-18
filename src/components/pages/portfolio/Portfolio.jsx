import React from 'react';
import NavBar from '../../layouts/NavBar/NavBar';
import Whatsapp from '../../layouts/Whatsapp/Whatsapp';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css'

const Portfolio = () => {
    const {ref: myRef, inView: myElementIsVisible} = useInView();

    return (
        <div>
            <NavBar/>
            <Whatsapp/>
            <div className='containerPortfolioDiv'>                
                <div className='textPort'>
                    
                </div>
            </div>
            <div className='portport'>
            <div className='resto resto1'>
                <h1>DISEÑO</h1>
                <h1 ref={myRef} className={`${myElementIsVisible ? "anim" : ""}`}>DISEÑO</h1>
            </div>
            <div className="resto resto2">
                <h1>DIGITAL</h1>
                <h1 ref={myRef} className={`${myElementIsVisible ? "anim" : ""}`}>DIGITAL</h1>
            </div></div>



            <div className='balls'>
                    <div className='portport'>
                    <div className='resto resto1'>
                        <h1>DISEÑO</h1>
                        <h1>DISEÑO</h1>
                    </div>
                    <div className="resto resto2">
                        <h1>DIGITAL</h1>
                        <h1>DIGITAL</h1>
                    </div></div>

                    <div className="ball ball-1"></div>
                    <div className="ball ball-2"></div>
                    <div className="ball ball-3"></div>
                    <div className="ball ball-4"></div>

            </div>
            
        </div>
    );
};

export default Portfolio;