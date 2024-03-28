// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Kitchen Community</h1>
      </div>
      <ul className="navbar-center">
        <li><a href="/">Accueil</a></li>
        <li><a href="#aboutUs">À Propos</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="/donations">Donner</a></li>
        <li><a href="/Receptions">Recevoir</a></li>
        <li><a href="#">Actualités</a></li>
      </ul>
      <div className="navbar-right">
        <Link to="/Inscription"><button>Inscription</button></Link>
      </div>
    </nav>

  );
}

export default Navbar;
