import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="nav0">
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link to={"/"} className='link'><div className="navbar-brand">Digital Design</div></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse collapse1" id="navbarNavDropdown">
      <ul className="navbar-nav nav-ul">
        <li className="nav-item">
          <Link to={"/"} className='link'><div className="nav-link active" aria-current="page" >Home</div></Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Diseño
          </div>
          <ul className="dropdown-menu">
            <li><Link to={"/dgrafico"} className='link'><div className="dropdown-item">Diseño Gráfico</div></Link></li>
            <li><Link to={"/dweb"} className='link'><div className="dropdown-item">Diseño Web</div></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={"/portfolio"} className='link'><div className="nav-link active" aria-current="page" >Portfolio</div></Link>
        </li>
      </ul>
      <Link to={"/contactall"} className='link contact-btn'><button type="button" className="btn btn-dark btnav">Contactarnos</button></Link>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;