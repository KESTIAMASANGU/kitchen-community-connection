import React from 'react';

function LoginForm() {
    return (
        <div className="container">
            <h2>Formulaire de Donations</h2>
            <form action="/submit" method="post">
                <div className="input-group">
                    <label htmlFor="email">Adresse Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="fullname">Nom Complet:</label>
                    <input type="text" id="fullname" name="fullname" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Se Connecter</button>
            </form>
        </div>
    );
}

export default LoginForm;
