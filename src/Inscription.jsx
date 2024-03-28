import React, { useState } from 'react';

function InscriptionForm() {
  const [nom, setNom] = useState('');
  const [postnom, setPostnom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorNom, setErrorNom] = useState('');
       const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleNomChange = (event) => {
    const newNom = event.target.value;
    setNom(newNom);
    if (newNom.length < 4 || !/^[A-Z]/.test(newNom)) {
      setErrorNom('Le nom doit avoir au moins 4 caractères et commencer par une lettre majuscule');
    } else {
      setErrorNom('');
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

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!newEmail.includes('@')) {
      setErrorEmail('L\'adresse e-mail est invalide');
    } else {
      setErrorEmail('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorNom === '' && errorPassword === '' && errorEmail === '') {
      console.log('Nom:', nom);
      console.log('Postnom:', postnom);
      console.log('Prénom:', prenom);
      console.log('E-mail:', email);
      console.log('Mot de passe:', password);
      setNom('');
      setPostnom('');
      setPrenom('');
      setEmail('');
      setPassword('');
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire avant de soumettre.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label><br />
          <input type="text" id="nom" value={nom} onChange={handleNomChange} required />
          {errorNom && <div style={{ color: 'red' }}>{errorNom}</div>}
        </div>
        <div>
          <label htmlFor="postnom">Postnom :</label><br />
          <input type="text" id="postnom" value={postnom} onChange={(e) => setPostnom(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label><br />
          <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </div>
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
