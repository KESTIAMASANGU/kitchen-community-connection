// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Kitchen Community</h1>
      </div>
      <ul className="navbar-center">
        <li><a href="#">Accueil</a></li>
        <li><a href="#a-propos">À Propos</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Donner</a></li>
        <li><a href="#">Recevoir</a></li>
        <li><a href="#">Actualités</a></li>
      </ul>
      <div className="navbar-right">
        <button>Connexion</button>
        <button>Contact</button>
      </div>
    </nav>

  );
}

export default Navbar;
