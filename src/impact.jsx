import React from 'react';
import bgimpactImg from './images/bgimpact.png'

function Impact() {
    return (
        <div className='impact-container'>
            <div className='impact-image'><img src={bgimpactImg} alt="" /></div>
            <div className='progress-bar'>
                <div className='progress' style={{ width: '50%' }}>50%</div>
            </div>
            <div className='impact-content'>
                <h2 className='impact-title'>IMPACT</h2>
                <p>L'impact de Kitchen Community se manifeste à travers la redistribution efficace des excédents alimentaires, nourrissant les personnes dans le besoin tout en réduisant le gaspillage alimentaire.</p>
                {/* Ajoutez vos progressions en pourcentage ici */}
            </div>
        </div>
    );
}

export default Impact;
