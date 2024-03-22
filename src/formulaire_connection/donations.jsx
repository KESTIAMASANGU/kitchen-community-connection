import React, { useState } from 'react';

function FoodDonationForm() {
    const [formData, setFormData] = useState({
        donorName: '',
        foodType: '',
        quantity: '',
        availabilityDate: '',
        foodCondition: 'fresh',
        specialInstructions: ''
    });
    const [errors, setErrors] = useState({
        donorName: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { donorName, quantity } = formData;
        const errorsCopy = { ...errors };

        if (donorName.length < 3) {
            errorsCopy.donorName = 'Le nom du donateur doit avoir au moins 3 caractères';
        } else {
            errorsCopy.donorName = '';
        }

        if (isNaN(quantity) || quantity <= 0) {
            errorsCopy.quantity = 'La quantité doit être un nombre positif';
        } else {
            errorsCopy.quantity = '';
        }

        setErrors(errorsCopy);

        if (!errorsCopy.donorName && !errorsCopy.quantity) {
            console.log('Formulaire soumis avec succès !', formData);
        } else {
            console.log('Des erreurs ont été détectées dans le formulaire');
        }
    };

    return (
        
        <div className="container">
            <h2>Formulaire de Don de Nourriture</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="donorName">Nom du Donateur ou de la Structure:</label>
                    <input type="text" id="donorName" name="donorName" value={formData.donorName} onChange={handleChange} required />
                    {errors.donorName && <span className="error">{errors.donorName}</span>}
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
                    <label htmlFor="availabilityDate">Date de Disponibilité:</label>
                    <input type="date" id="availabilityDate" name="availabilityDate" value={formData.availabilityDate} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="foodCondition">Condition de la Nourriture:</label>
                    <select id="foodCondition" name="foodCondition" value={formData.foodCondition} onChange={handleChange} required>
                        <option value="fresh">Fraîche</option>
                        <option value="expired">Périmée</option>
                        <option value="closeToExpiration">Proche de la Date de Péremption</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="specialInstructions">Instructions Spéciales:</label>
                    <textarea id="specialInstructions" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Faire un Don</button>
            </form>
        </div>
    );
}

export default FoodDonationForm;
