import React, { useState } from 'react';

function FoodReceptionForm() {
    const [formData, setFormData] = useState({
        receiverName: '',
        organization: '',
        foodType: '',
        quantity: '',
        specialInstructions: ''
    });
    const [errors, setErrors] = useState({
        receiverName: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { receiverName, quantity } = formData;
        const errorsCopy = { ...errors };

        if (receiverName.length < 3) {
            errorsCopy.receiverName = 'Le nom du receveur doit avoir au moins 3 caractères';
        } else {
            errorsCopy.receiverName = '';
        }

        if (isNaN(quantity) || quantity <= 0) {
            errorsCopy.quantity = 'La quantité doit être un nombre positif';
        } else {
            errorsCopy.quantity = '';
        }

        setErrors(errorsCopy);

        if (!errorsCopy.receiverName && !errorsCopy.quantity) {
            console.log('Formulaire soumis avec succès !', formData);
        } else {
            console.log('Des erreurs ont été détectées dans le formulaire');
        }
    };

    return (
        <div className="container">
            <h2>Formulaire de Réception de Dons de Nourriture</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="receiverName">Nom du Receveur ou de la Structure/Organisation Caritative:</label>
                    <input type="text" id="receiverName" name="receiverName" value={formData.receiverName} onChange={handleChange} required />
                    {errors.receiverName && <span className="error">{errors.receiverName}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="foodType">Type de Nourriture:</label>
                    <input type="text" id="foodType" name="foodType" value={formData.foodType} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="quantity">Quantité (en kilogrammes, nombre d'articles):</label>
                    <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
                    {errors.quantity && <span className="error">{errors.quantity}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="specialInstructions">Instructions Spéciales:</label>
                    <textarea id="specialInstructions" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
                </div>
                <button type="submit" style={{ backgroundColor: '#FF7511', color: 'white' }}>Réceptionner le Don</button>
            </form>
        </div>
    );
}

export default FoodReceptionForm;
