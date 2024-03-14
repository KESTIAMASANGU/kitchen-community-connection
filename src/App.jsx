// MainComponent.js
import React from 'react';
import './App.css'
import Navbar from './navbar';
import Hero from './hero';
import AboutUs from './about';
import Impact from './impact';

function App() {
  return (
    <div className="MainComponent">
      <header>
      <Navbar/>
      <Hero/>
      </header>
      <main>
        <AboutUs/>
        <Impact/>
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default App;
