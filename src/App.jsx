import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './navbar';
import Hero from './hero';
import LoginForm from './formulaire_connection/donations';
import  FoodReceptionForm from './formulaire_connection/Receptions';

function App() {
  return (
    <div className="MainComponent">
      <header>
        <Navbar />
        {/* <Hero /> */}
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/donations' element={<LoginForm />} />
          <Route path='/Receptions' element={<FoodReceptionForm />} />
          {/* <Route path='/connexion' element={<Connexion />} /> */}
        </Routes>
      </main>
      <footer/>
    </div>
  );
}
export default App;
