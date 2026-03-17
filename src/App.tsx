import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Coach from './components/Coach';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Coach />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
