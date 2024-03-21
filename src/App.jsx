// MainComponent.js
import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './navbar';
import Hero from './hero';
import LoginForm from './formulaire_connection/donations';
import AboutUs from './about';
import Impact from './impact';
import Services from './services';

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
          {/* <Route path='/recevoir' element={<Recevoir />} />
          <Route path='/connexion' element={<Connexion />} /> */}
        </Routes>
      </main>
      <footer>
        {/* <h2 style={{ background: "blue" }}>Footer</h2> */}
      </footer>
    </div>
  );
}
export default App;
