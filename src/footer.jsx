import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__navigation">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#a-propos">À Propos</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <h3>Contact</h3>
                    <p>Email: kestiamasangu1@gmail.com</p>
                    <p>Téléphone: +243 85 474 4243</p>
                    <p>Adresse: 5,Avenue kamina/Q.Katshoma</p>
                </div>
                <div className="footer__social">
                    <h3>Réseaux Sociaux</h3>
                    <ul>
                        <li><a href="https://facebook.com/Kestia Ngoie" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/Kestia Ngoie" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com/Kestia Ngoie" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer__newsletter">
                    <h3>Newsletter</h3>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Entrez votre email" required />
                        <button type="submit">S'abonner</button>
                    </form>
                </div>
            </div>
            <div className="footer__legal">
                <p><a href="/politique-de-confidentialite">Politique de Confidentialité</a> | <a href="/conditions-utilisation">Conditions d'Utilisation</a></p>
                <p>© 2024 Votre Projet. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
