import React from 'react';
import NavBar from '../../../layouts/NavBar/NavBar';
import Cover from '../Cover/Cover';
import Presentacion from '../Presentacion/Presentacion';
import Cut from '../Cut/Cut';
import About from '../About/About';
import Solutions from '../Solutions/Solutions';
import Whatsapp from '../../../layouts/Whatsapp/Whatsapp';


const Home = () => {
    return (
        <div>
            <NavBar/>
             <Whatsapp/>
            <Cover/>
            <Presentacion/>
            <Cut/>
            <About/>
            <Solutions/>
            
        </div>
    );
};

export default Home;