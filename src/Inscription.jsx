import React, { useState } from 'react';

function InscriptionForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!newEmail.includes('@') || !newEmail.includes('.')) {
      setErrorEmail('L\'adresse e-mail est invalide');
    } else {
      setErrorEmail('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 6 || !/\d/.test(newPassword) || !/[a-zA-Z]/.test(newPassword)) {
      setErrorPassword('Le mot de passe doit contenir au moins 6 caractères, y compris des lettres et des chiffres');
    } else {
      setErrorPassword('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorEmail === '' && errorPassword === '') {
      console.log('Adresse e-mail:', email);
      console.log('Mot de passe:', password);
      setEmail('');
      setPassword('');
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire avant de soumettre.');
    }
  };

  return (
    <div>
      <h2>Inscription à Kitchen Community</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail :</label><br />
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          {errorEmail && <div style={{ color: 'red' }}>{errorEmail}</div>}
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label><br />
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          {errorPassword && <div style={{ color: 'red' }}>{errorPassword}</div>}
        </div>
        <br />
        <input type="submit" value="Inscription" />
      </form>
    </div>
  );
}

export default InscriptionForm;
