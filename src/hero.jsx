import React from 'react';

const Hero = () => {
  return (
    <div className="hero-image">
      <div><img src="./images/header.png" alt="" /></div>
      <div className="hero-text">
        <h1>Bienvenue sur Kitchen Community</h1>
        <p>Une plateforme dédiée à la redistribution des excédents alimentaires</p>
        <p>"La solidarité alimentaire, notre passion partagée."</p>
        <div className='button-container'>
          <button className='discover-button'>Découvrir</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
