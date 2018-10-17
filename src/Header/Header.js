import React from 'react';
import img from './profil.png';
import './Header.css';

const header = () => {
    return (
        <div className="header">
            <div>
                <h1>Fabien Plastina</h1>
                <h2>Etudiant Ingénieur Informatique</h2>
            </div>
            <div>
                <img src={img} alt="Profil picture" />
            </div>
        </div>
    )
}

export default header