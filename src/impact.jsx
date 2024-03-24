import React from 'react';
import bgimpactImg from './images/bgimpact.png';

function Impact() {

    return (
        <section id='impact'>
            <div className='impact-image' style={{ backgroundImage: `url(${bgimpactImg})` }}>
                <h2 className='progress-title'>Excédents Alimentaires Distribués 70%</h2>
                <div className='progress-bar'>
                    <div className='progress' style={{ width: '70%' }}></div>
                </div>
                <h2 className='progress-title'>Nombre de Restaurants Partenaires 50%</h2>
                <div className='progress-bar'>
                    <div className='progress' style={{ width: '50%' }}></div>
                </div>
                <h2 className='progress-title'>Nombre de Repas Fournis 85%</h2>
                <div className='progress-bar'>
                    <div className='progress' style={{ width: '85%' }}></div>
                </div>
            </div>
            <div className='impact-container'>
                <div className='impact-content'>
                    <h2 className='impact-title'>IMPACT</h2>
                    <p>L'impact de Kitchen Community se manifeste à travers la redistribution efficace des excédents alimentaires, nourrissant les personnes dans le besoin tout en réduisant le gaspillage alimentaire.</p>
                </div>
            </div>
            <div className='impact-text'>
                <p>"Ensemble, nous faisons une différence : chaque pourcentage, chaque restaurant partenaire, chaque repas fourni contribue à nourrir notre communauté et à préserver notre environnement."</p>
            </div>

        </section>
    );
}

export default Impact;
