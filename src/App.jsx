// MainComponent.js
import React from 'react';
import './App.css'
import Navbar from './navbar';
import Hero from './hero';
import AboutUs from './about';
import Impact from './impact';
import DonationsComponent from './donations';
import Services from './services';

function App() {
  return (
    <div className="MainComponent">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <section id="a-propos">
          <AboutUs />
        </section>
        <section id='impact'>
          <Impact />
        </section>
        <section id='donner'>
          <DonationsComponent />
        </section>
        <Services/>
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default App;
