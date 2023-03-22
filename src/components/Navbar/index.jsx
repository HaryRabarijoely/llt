import React from 'react';
import { NavLink } from 'react-router-dom';
import img3 from '../../assets/images/llt-logo-blanc.png';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo ">
                <img src={img3} alt="Logo LLT" className='img-fluid w-25'></img> 
            </NavLink>    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div> 
                    <li className="nav-item active" >
                    <NavLink className="nav-link" to="/" >
                        <i className="fas fa-home"></i>
                        Accueil
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/project" >
                        <i  className="fas fa-user"> </i>
                        Réalisations
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" >
                        <i  className="far fa-address-book"></i>
                        Contact 
                    </NavLink>
                    </li>            
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;