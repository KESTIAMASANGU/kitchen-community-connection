
import React from 'react';
import headerImg from './images/header.png'
import mainImg from './images/main.png'

function AboutUs() {
    return (
        <section id="aboutUs">
            <div className='about-us-container'>
                <div className='about-us-content'>
                    <h2 className='about-us-title'>À PROPOS</h2>
                    <p className='about-us-paragraph'>Notre plateforme facilite la redistribution des excédents alimentaires à Lubumbashi. Les établissements alimentaires peuvent faire don de leurs surplus, tandis que les organisations caritatives locaux les récupèrent pour aider les personnes dans le besoin.</p>
                    <button className="learn-more-btn">LEARN MORE</button>
                </div>
                <div className='about-us-image-container'>
                    <img className='about-us-image' src={headerImg} alt="" />
                </div>
            </div>
            <div className='about-us-image2'>
            <img className='about-us-image' src={mainImg} alt="" />
            </div>
        </section>
    );
}
export default AboutUs;
