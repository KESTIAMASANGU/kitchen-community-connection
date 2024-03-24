import React from 'react';
import redistributionImg from './images/redistribution.png';
import collecteImg from './images/collecte.png';
import sensibilisationImg from './images/sensibilisation.png';
import supportImg from './images/support.png';
import educationImg from './images/education.png';

function Services() {
    return (
        <section id='services'>
            <h1 className='services-title'>EXPLORES SERVICES</h1>
            <div className='services-container'>
                <div className='service-item'>
                    <img src={redistributionImg} alt="" />
                    <div className='service-description'>
                        <h2>Redistribution Alimentaire</h2>
                        <p>"Chaque repas redistribué est un geste de solidarité qui nourrit l'espoir et renforce notre communauté."</p>
                    </div>
                </div>
                <div className='service-item'>
                    <img src={collecteImg} alt="" />
                    <div className='service-description'>
                        <h2>Collecte et Livraison</h2>
                        <p>"Unis dans l'action, chaque collecte et livraison représente un pas vers un monde où personne ne souffre de la faim."</p>
                    </div>
                </div>
                <div className='service-item'>
                    <img src={sensibilisationImg} alt="" />
                    <div className='service-description'>
                        <h2>Sensibilisation</h2>
                        <p>"Ensemble, éduquons, inspirons et agissons pour une communauté en meilleure santé et plus solidaire."</p>
                    </div>
                </div>
            </div>
            <div className='services-container2'>
            <div className='service-item1'>
                    <img src={supportImg} alt="" />
                    <div className='service-description'>
                        <h2>Support Communautaire</h2>
                        <p>"Par le soutien communautaire, nous tissons les liens de solidarité et d'entraide qui renforcent notre tissu social."</p>
                    </div>
                </div>
                <div className='service-item2'>
                    <img src={educationImg} alt="" />
                    <div className='service-description'>
                        <h2>Éducation Nutritionnelle</h2>
                        <p>"Nourrir les esprits autant que les corps : ensemble, apprenons à cultiver une santé durable grâce à l'éducation nutritionnelle."</p>
                    </div>
                </div>
                </div>
        </section>
    );
}

export default Services;
